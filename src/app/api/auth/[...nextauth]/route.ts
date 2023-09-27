import NextAuth from "next-auth/next";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          await connect();
          const user = await Users.findOne({ email });

          if (!user) {
            throw Error("email/password mismatch");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw Error("email/password mismatch");
          }
          return user;
        } catch (e: any) {
          console.error("Error: ", e.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.pseudo) {
        token.user.pseudo = session.pseudo;
      }
      if (trigger === "update" && session?.email) {
        token.user.email = session.email;
      }
      if (user) {
        token = {
          ...token,
          user: {
            id: user?._id,
            pseudo: user?.pseudo,
            email: user?.email,
          },
        };
        await Users.findByIdAndUpdate(token.user.id, {
          pseudo: token.pseudo,
          email: token.email,
        });
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

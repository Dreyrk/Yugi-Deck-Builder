import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { IconType } from "react-icons";

export interface YugiCard {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk: number;
  def: number;
  level: number;
  race: string;
  attribute: string;
  img: string;
}

export interface FooterLinks {
  logo: IconType;
  href: string;
}

interface isOpenStateProps {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
}

export interface AddCardBtnProps extends isOpenStateProps {}

export interface AddToDeckModalProps extends isOpenStateProps {
  deck: string;
}

export interface AuthProps {
  registered: boolean;
  setRegistered: (registered: boolean) => void;
}

export interface FormInputProps {
  id: string;
  label: string;
  value: string;
  setValue: () => void;
  logo: IconType;
  type: string;
}

export interface User {
  _id?: string;
  id?: string;
  pseudo?: string;
  email: string;
  password?: string;
}

export interface CustomJWT extends JWT {
  user: User;
}
export interface CustomSession extends Session {
  pseudo?: string;
  email?: string;
  user?: User;
}

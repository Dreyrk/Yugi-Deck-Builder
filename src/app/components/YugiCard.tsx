import Image from "next/image";

export default function YugiCard({ src }: { src: string }) {
  return <Image src={src} alt="card" width={180} height={260} />;
}

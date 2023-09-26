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

export interface AddCardBtnProps {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
}

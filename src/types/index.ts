import { IconType } from "react-icons";

export interface YugiCards {
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
  price: number;
}

export interface DeckProps {
  allCards: YugiCards[];
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
  allCards: YugiCards[];
}

export interface AuthProps {
  registered: boolean;
  setRegistered: (registered: boolean) => void;
}

export interface FormInputProps {
  id: string;
  label: string;
  value: any;
  setValue: (value: any) => void;
  Logo: IconType;
  type: string;
}

export interface User {
  _id?: string;
  id?: string;
  pseudo?: string;
  email: string;
  password?: string;
}

export interface AnimatedTextProps {
  text: string;
  style?: string;
  decoration?: string;
}

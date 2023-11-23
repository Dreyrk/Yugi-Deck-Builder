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
  deckType?: string;
}

export interface Deck {
  _id: string;
  name: string;
  main: YugiCards[];
  extra: YugiCards[];
  side: YugiCards[];
}

export interface YugiCardProps {
  card: YugiCards;
  inDeck?: boolean;
  deckType?: string;
  selectedCards?: YugiCards[];
  setSelectedCards?: any;
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
  deckType: string;
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
  id: string;
  pseudo: string;
  email: string;
  password?: string;
  decks: Deck[];
}

export interface AnimatedTextProps {
  text: string;
  style?: string;
  decoration?: string;
}

export interface CardPrices {
  cardmarket_price?: string;
  tcgplayer_price?: string;
  ebay_price?: string;
  amazon_price: string;
  coolstuffinc_price?: string;
}

export interface FetchedCards {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  atk: number;
  def: number;
  level: number;
  race: string;
  attribute: string;
  card_sets: {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;
  }[];
  card_images: {
    id: number;
    image_url: string;
    image_url_small: string;
    image_url_cropped: string;
  }[];
  card_prices: CardPrices[];
}

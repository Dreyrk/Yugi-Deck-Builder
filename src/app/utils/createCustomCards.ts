import { YugiCards } from "@/types";

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
  card_prices: {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;
  }[];
}

function getAvgPrice(prices: any) {
  const currentPrice: any = Object.values(prices);

  const avg =
    currentPrice
      .map((el: string) => parseInt(el, 10))
      .reduce(
        (prev: number, curr: number) => (prev as number) + (curr as number)
      ) / currentPrice.length;

  console.log(avg);

  return avg;
}

function createCustomCards(cards: FetchedCards[]) {
  const cleanCards = cards.map((card: FetchedCards): YugiCards => {
    return {
      id: card.id,
      name: card.name,
      type: card.type,
      desc: card.desc,
      atk: card.atk,
      def: card.def,
      level: card.level,
      race: card.race,
      attribute: card.attribute,
      img: card.card_images[0].image_url,
      price: getAvgPrice(card.card_prices[0]),
    };
  });
  return cleanCards;
}

export default createCustomCards;

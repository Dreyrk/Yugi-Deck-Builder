import { YugiCards } from "@/types";
import createCustomCards from "../utils/createCustomCards";

const MainDeckTypes = [
  "Effect Monster",
  "Flip Effect Monster",
  "Flip Tuner Effect Monster",
  "Gemini Monster",
  "Normal Monster",
  "Normal Tuner Monster",
  "Pendulum Effect Monster",
  "Pendulum Flip Effect Monster",
  "Pendulum Normal Monster",
  "Pendulum Tuner Effect Monster",
  "Ritual Effect Monster",
  "Ritual Monster",
  "Spell Card",
  "Spirit Monster",
  "Toon Monster",
  "Trap Card",
  "Tuner Monster",
  "Union Effect Monster",
];

const ExtraDeckTypes = [
  "Fusion Monster",
  "Link Monster",
  "Pendulum Effect Fusion Monster",
  "Synchro Monster",
  "Synchro Pendulum Effect Monster",
  "Synchro Tuner Monster",
  "XYZ Monster",
  "XYZ Pendulum Effect Monster",
];

const getUrl = (type: string) => {
  switch (type) {
    case "main":
      return `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${MainDeckTypes.join(
        ","
      )}`;
    case "extra":
      return `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${ExtraDeckTypes.join(
        ","
      )}`;
    case "side":
      return `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

    default:
      return "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  }
};

async function getCards(type: string) {
  try {
    const url = getUrl(type);
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();

      const cards: YugiCards[] = createCustomCards(data.data);

      return cards;
    } else {
      console.error("failed to fetch");
    }
  } catch (e: any) {
    console.error(e.message);
  }
}

export default getCards;

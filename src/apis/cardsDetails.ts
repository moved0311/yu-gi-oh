import axios from "axios";

const CARDS_DEATILS_URL = "https://moved0311.github.io/yu-gi-oh-cards-data/details/cards.json";

export const getCardsDetails = async () => {
  return axios.get(CARDS_DEATILS_URL);
};

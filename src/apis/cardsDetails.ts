import axios from "axios";

const CARDS_DEATILS_URL = "https://raw.githubusercontent.com/moved0311/yu-gi-oh-cards-data/master/details/cards.json";

export const getCardsDetails = async () => {
  return axios.get(CARDS_DEATILS_URL);
};

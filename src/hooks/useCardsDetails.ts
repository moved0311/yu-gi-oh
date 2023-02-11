import { useQuery } from "@tanstack/react-query";
import { getCardsDetails } from "apis/cardsDetails";

const fetchData = async (): Promise<Card.Info[]> => {
  try {
    const res = await getCardsDetails();

    return res.data;
  } catch (error) {
    console.log("[卡片API資料錯誤]");
    return [];
  }
};

const useCardsDetails = () => {
  const { data: cards } = useQuery(["cards-details"], fetchData, {
    initialData: [],
  });

  return { cards };
};
export default useCardsDetails;

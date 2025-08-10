import { useEffect, useState } from "react";
import { quoteApi, QuoteForFindOne } from "../service/quoteApiService";

export const useHooks = () => {
  const [quote, setQuote] = useState<QuoteForFindOne>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuotes = async () => {
    try {
      const getQuote = await quoteApi.getOne();
      console.log(getQuote);
      setQuote(getQuote);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async () => {
    console.log(process.env.NEXT_PUBLIC_API_QUOTE_URL);
    setIsLoading(true);
    await fetchQuotes();
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return { quote, handleClick, isLoading };
};

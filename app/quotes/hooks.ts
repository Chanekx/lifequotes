import { useState } from "react";
import { quoteApi, QuoteForFindOne } from "../service/quoteApiService";

export const useHooks = () => {
  const [quote, setQuote] = useState<QuoteForFindOne>();

  const fetchQuotes = async () => {
    try{
      const getQuote = await quoteApi.getOne();
      console.log(getQuote)
      setQuote(getQuote)
    }
    catch(e){
      console.log(e)
    }
  }
  

  return {quote, fetchQuotes};
};

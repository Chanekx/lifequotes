import axios, {type AxiosResponse } from "axios";


export const api = axios.create({
 baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface QuoteForFindOne {
  text: string;
  author: string;
}

const getOne = async (): Promise<QuoteForFindOne> => {
  const response: AxiosResponse<QuoteForFindOne> =
    await api.get<QuoteForFindOne>("/quote");
  return response.data;
};

export const quoteApi = {
  getOne,
};

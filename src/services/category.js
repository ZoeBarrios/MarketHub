import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;

export const getCategories = async () => {
  const response = await fetch(`${baseUrl}/categories`);
  return checkResponse(response);
};

export const getCategory = async (id) => {
  const response = await fetch(`${baseUrl}/categories/${id}`);
  return checkResponse(response);
};

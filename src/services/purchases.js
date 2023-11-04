import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;

export const getPurchasesBySeller = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/seller/${id}`);
  return checkResponse(response);
};

export const getPurchase = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return checkResponse(response);
};

export const getPurchaseByUser = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return checkResponse(response);
};

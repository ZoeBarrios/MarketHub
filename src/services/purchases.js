import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};
export const getPurchasesBySeller = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/seller/${id}`, {
    headers: {
      Authorization: authorizationHeader(),
    },
  });
  return checkResponse(response);
};

export const getPurchase = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/${id}`, {
    headers: {
      Authorization: authorizationHeader(),
    },
  });

  return checkResponse(response);
};

export const getPurchaseByUser = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/user/${id}`, {
    headers: {
      Authorization: authorizationHeader(),
    },
  });
  return checkResponse(response);
};

export const createPurchase = async (purchase) => {
  const response = await fetch(`${baseUrl}/purchases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader(),
    },
    body: JSON.stringify(purchase),
  });

  return checkResponse(response);
};

export const updatePurchaseDelivered = async (id) => {
  const response = await fetch(`${baseUrl}/purchases/${id}`, {
    method: "PUT",
    headers: {
      Authorization: authorizationHeader(),
    },
  });

  return checkResponse(response);
};

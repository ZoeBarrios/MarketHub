import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;

export const getFavoritesByUser = async (id) => {
  const response = await fetch(`${baseUrl}/favorites/user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return checkResponse(response);
};

export const createFavorite = async (data) => {
  const response = await fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteFavorite = async (userId, publicationId) => {
  const response = await fetch(
    `${baseUrl}/favorites/${userId}/${publicationId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (response.status === 200) {
    return response.status;
  } else {
    return response.json();
  }
};
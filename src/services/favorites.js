import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const getFavoritesByUser = async (id) => {
  const response = await fetch(`${baseUrl}/favorites/user/${id}`, {
    headers: {
      Authorization: authorizationHeader(),
    },
  });
  return checkResponse(response);
};

export const createFavorite = async (data) => {
  const response = await fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: authorizationHeader(),
    },
    body: JSON.stringify(data),
  });
  return checkResponse(response);
};

export const deleteFavorite = async (userId, publicationId) => {
  const response = await fetch(
    `${baseUrl}/favorites/${userId}/${publicationId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: authorizationHeader(),
      },
    }
  );
  if (response.status === 200) {
    return response.status;
  } else {
    return response.json();
  }
};

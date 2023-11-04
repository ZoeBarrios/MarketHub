import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;

export const getCommentsByPublication = async (id) => {
  const response = await fetch(`${baseUrl}/comments/publication/${id}`);
  return checkResponse(response);
};

export const createComment = async (data) => {
  const response = await fetch(`${baseUrl}/comments`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const updateComment = async (id, data) => {
  const response = await fetch(`${baseUrl}/comments/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  return checkResponse(response);
};

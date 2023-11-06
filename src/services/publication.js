import { PUBLICATIONS } from "../utils/constants";
import { checkResponse } from "../utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};
export const getPublications = async (page, pageSize) => {
  const response = await fetch(
    `${baseUrl}/publications?page=${page}&pageSize=${pageSize}`
  );
  return checkResponse(response);
};

export const getPublication = async (id) => {
  const response = await fetch(`${baseUrl}/publications/${id}`);
  return checkResponse(response);
};

export const getPublicationsByUserId = async (id) => {
  const response = await fetch(`${baseUrl}/publications/user/${id}`, {
    headers: {
      Authorization: authorizationHeader(),
    },
  });
  return checkResponse(response);
};

export const createPublication = async (formData) => {
  const response = await fetch(`${baseUrl}/publications`, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader(),
    },
    body: formData,
  });
};

export const updatePublication = async (id, data) => {
  const response = await fetch(`${baseUrl}/publications/${id}`, {
    method: "PUT",
    headers: {
      Authorization: authorizationHeader(),
    },
    body: JSON.stringify(data),
  });
  return checkResponse(response);
};

export const deletePublication = async (id) => {
  const response = await fetch(`${baseUrl}/publications/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationHeader(),
    },
  });
  return checkResponse(response);
};

export const getPublicationsByCategory = async (category, page, pageSize) => {
  const response = await fetch(
    `${baseUrl}/publications/category/${category}?page=${page}&pageSize=${pageSize}`
  );
  return checkResponse(response);
};

export const getPublicationsByName = async (name, page, pageSize) => {
  const response = await fetch(
    `${baseUrl}/publications/name/${name}?page=${page}&pageSize=${pageSize}`
  );
  return checkResponse(response);
};

export const fetchPublication = async (
  type,
  page,
  pageSize,
  id = null,
  search = null
) => {
  console.log(type);
  if (PUBLICATIONS.ALL == type) return await getPublications(page, pageSize);
  if (PUBLICATIONS.BY_CATEGORY == type)
    return await getPublicationsByCategory(id, page, pageSize);
  if (PUBLICATIONS.BY_NAME == type)
    return await getPublicationsByName(search, page, pageSize);
};

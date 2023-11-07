export const checkResponse = async (response) => {
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
};

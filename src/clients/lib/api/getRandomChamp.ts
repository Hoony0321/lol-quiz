import { BASE_API_URL } from "@/src/clients/constants/URL";

const getRandomChamp = async () => {
  const response = await fetch(`${BASE_API_URL}/champs/random`);
  const data = await response.json();
  return data;
};

export default getRandomChamp;

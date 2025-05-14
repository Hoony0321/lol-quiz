import { DDRAGON_CHAMPS_API_URL } from "../constants/URL";

export default class ChampService {
  static async getRandomChamp() {
    const response = await fetch(DDRAGON_CHAMPS_API_URL);
    const data = await response.json();
    const champs = Object.values(data.data);
    const randomChamp = champs[Math.floor(Math.random() * champs.length)];
    return randomChamp;
  }
}

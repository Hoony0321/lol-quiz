import { NextResponse } from "next/server";
import ChampService from "@/src/server/services/ChampService";

export async function GET() {
  const champs = await ChampService.getRandomChamp();
  return NextResponse.json(champs);
}

import { ChartService } from "./charts.service";
const APIURL = process.env.API_URL
  ? process.env.API_URL
  : "https://retoolapi.dev";
export const chartService = new ChartService(APIURL);

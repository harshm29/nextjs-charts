import { chartService } from "@/services/index";
import { Data } from "../type/chart";
export const useGetXData = () => {
  const GetXData = async () => {
    const data: any = await chartService.GetXData();
    return data as Data;
  };

  return { GetXData };
};

export const useGetYData = () => {
  const GetYData = async () => {
    const data: any = await chartService.GetYData();
    return data as Data;
  };

  return { GetYData };
};

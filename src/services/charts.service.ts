import axios, { AxiosInstance } from "axios";

export class ChartService {
  protected readonly instance: AxiosInstance;
  protected readonly xuri: string;
  protected readonly yuri: string;

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "API response Time out!",
    });
    this.xuri = "/gDa8uC/data"; // Initialize with a default value or handle undefined case
    this.yuri = "/o5zMs5/data"; // Initialize with a default value or handle undefined case
  }

  GetXData = () => {
    return this.instance
      .get(this.xuri)
      .then((res: any) => {
        return {
          data: res.data,
          status: true,
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          message: error.message,
          status: false,
        };
      });
  };

  GetYData = () => {
    return this.instance
      .get(this.yuri)
      .then((res: any) => {
        return {
          data: res.data,
          status: true,
        };
      })
      .catch((error) => {
        return {
          message: error.message,
          status: false,
        };
      });
  };
}

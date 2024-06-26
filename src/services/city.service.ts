import { ICity } from "../interfaces/city.interface";
import { IResponse } from "../interfaces/http.interface";
import { addQueryParams } from "../utils/calls";

const API_URL = import.meta.env.VITE_API_URL;

export const getCities = async (params?: {
  department: string;
}): Promise<IResponse<ICity[]>> => {
  const queryParams = params ? addQueryParams(params) : "";
  const response = await fetch(`${API_URL}/cities${queryParams}`);
  const data = await response.json();
  return data;
};

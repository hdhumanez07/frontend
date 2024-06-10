import { IDepartment } from "../interfaces/department.interface";
import { IResponse } from "../interfaces/http.interface";

const API_URL = import.meta.env.VITE_API_URL;

export const getDepartments = async (): Promise<IResponse<IDepartment[]>> => {
  const response = await fetch(`${API_URL}/departments`);
  const data = await response.json();
  return data;
};

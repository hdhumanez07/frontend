const API_URL = import.meta.env.VITE_API_URL;

export const getDepartments = async () => {
  const response = await fetch(`${API_URL}/departments`);
  const data = await response.json();
  return data;
};

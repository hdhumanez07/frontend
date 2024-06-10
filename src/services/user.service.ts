import { IResponse } from "../interfaces/http.interface";
import { IPokemon, IPokemonResponse } from "../interfaces/pokemon.interface";
import { IUser, IUserContext } from "../interfaces/user.interface";
import { TLoginSchema, TUserSchema } from "../schemas/user.schema";
import { addQueryParams } from "../utils/calls";

const API_URL = import.meta.env.VITE_API_URL;

async function signUp(data: TUserSchema): Promise<IResponse<IUser>> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function login(
  data: TLoginSchema
): Promise<IResponse<IUserContext["auth"]>> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function getUsers(token: string): Promise<IResponse<IUser[]>> {
  const response = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

async function getPokemons(params?: {
  limit: number;
  offset: number;
}): Promise<IResponse<IPokemonResponse>> {
  const queryParams = params ? addQueryParams(params) : "";
  const response = await fetch(`${API_URL}/pokemons${queryParams}`, {
    method: "GET",
  });
  return response.json();
}

async function getPokemonsByUser(
  iduser: string,
  token: string
): Promise<IResponse<IPokemon[]>> {
  // Se pudo usar el token para obtener el id del usuario
  // pero para efectos de la prueba se envía el id del usuario
  const response = await fetch(`${API_URL}/users/favorites/${iduser}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

async function addPokemon(
  data: IPokemon,
  token: string
): Promise<IResponse<IPokemon>> {
  const response = await fetch(`${API_URL}/users/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function deletePokemon(
  id: string,
  token: string
): Promise<IResponse<IPokemon>> {
  const response = await fetch(`${API_URL}/users/favorites/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export {
  signUp,
  login,
  getUsers,
  addPokemon,
  getPokemons,
  getPokemonsByUser,
  deletePokemon,
};

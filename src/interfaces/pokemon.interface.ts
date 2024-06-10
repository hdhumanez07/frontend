export interface IPokemon {
  name: string;
  url: string;
  user: string;
  _id?: string;
}

export interface IPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

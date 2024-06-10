import { useEffect, useState } from "preact/hooks";
import { IPokemon } from "../../interfaces/pokemon.interface";
import { deletePokemon, getPokemonsByUser } from "../../services/user.service";
import useAuth from "../../context/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { POKEMONS_HEADER_TABLE } from "../../utils/constants/table";
import { Table } from "../../components/Table";

export function Pokemons() {
  const { auth } = useAuth();
  const { token, user } = auth;
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([]);

  const doDeletePokemon = (id: string) => {
    deletePokemon(id, token).then((data) => {
      if (!data.success) {
        return toast.error(data.info);
      }
      let filteredPokemons = pokemons.filter((pokemon) => pokemon._id !== id);
      setPokemons(filteredPokemons);
    });
  };

  useEffect(() => {
    getPokemonsByUser(user._id, token).then((data) => setPokemons(data.data));
  }, []);

  return (
    <>
      <Toaster />
      <Table
        title="Mis pokemons favoritos"
        description="Esta es tu lista de pokemones favoritos registrados"
        header={POKEMONS_HEADER_TABLE}
      >
        {pokemons &&
          pokemons.map((pokemon) => (
            <tr key={pokemon.name}>
              <td class="p-4 whitespace-nowrap text-gray-600">
                {pokemon.name}
              </td>
              <td class="p-4 whitespace-nowrap text-gray-600">
                <button
                  class="bg-red-600 text-white font-bold rounded-md px-2 py-1"
                  onClick={() => doDeletePokemon(pokemon._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </Table>
    </>
  );
}

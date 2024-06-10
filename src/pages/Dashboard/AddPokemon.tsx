import { useEffect, useState } from "preact/hooks";
import { IPokemon, IPokemonResponse } from "../../interfaces/pokemon.interface";
import { addPokemon, getPokemons } from "../../services/user.service";
import useAuth from "../../context/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { doAlert } from "../../utils/alert";
import { Table } from "../../components/Table";
import { POKEMONS_HEADER_TABLE } from "../../utils/constants/table";

export function AddPokemon() {
  const { auth } = useAuth();
  const [pokemons, setPokemons] = useState<IPokemonResponse>();

  const handleSavePokemon = (pokemon: IPokemon) => {
    addPokemon(pokemon, auth.token).then((data) => {
      if (data.success) {
        toast.success("Pokemon guardado correctamente");
      } else {
        return doAlert(data.info, false);
      }
    });
  };

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data.data));
  }, []);

  return (
    <>
      <Toaster />
      <Table
        title="Lista de pokemons"
        description="Esta es la lista de pokemons registrados en la plataforma"
        header={POKEMONS_HEADER_TABLE}
      >
        {pokemons &&
          pokemons.results.map((pokemon) => (
            <tr key={pokemon.name}>
              <td class="p-4 whitespace-nowrap text-gray-600">
                {pokemon.name}
              </td>
              <td class="p-4 whitespace-nowrap text-gray-600">
                <button
                  class="bg-teal-600 text-white font-bold rounded-md px-2 py-1"
                  onClick={() => handleSavePokemon(pokemon)}
                >
                  Guardar
                </button>
              </td>
            </tr>
          ))}
      </Table>
    </>
  );
}

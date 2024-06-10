import { useEffect, useState } from "preact/hooks";
import { IPokemon, IPokemonResponse } from "../../interfaces/pokemon.interface";
import { addPokemon, getPokemons } from "../../services/user.service";
import useAuth from "../../context/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { doAlert } from "../../utils/alert";

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

  console.log(pokemons);
  return (
    <div class="bg-white shadow rounded-lg m-4 p-4 sm:p-6 xl:p-8 ">
      <Toaster />
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Lista de pokemons
          </h3>
          <span class="text-base font-normal text-gray-500">
            Esta es la lista de pokemons registrados en la plataforma
          </span>
        </div>
        <div class="flex-shrink-0">
          <a
            href="#"
            class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
          >
            View all
          </a>
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="overflow-x-auto rounded-lg">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Opción
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "preact/hooks";
import { IPokemon } from "../../interfaces/pokemon.interface";
import { deletePokemon, getPokemonsByUser } from "../../services/user.service";
import useAuth from "../../context/useAuth";
import toast, { Toaster } from "react-hot-toast";

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

  console.log(pokemons);
  return (
    <div class="bg-white shadow rounded-lg m-4 p-4 sm:p-6 xl:p-8 ">
      <Toaster />
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Mis pokemons favoritos
          </h3>
          <span class="text-base font-normal text-gray-500">
            Esta es tu lista de pokemones favoritos registrados
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
                    pokemons.map((pokemon) => (
                      <tr key={pokemon.name}>
                        <td class="p-4 whitespace-nowrap text-gray-600">
                          {pokemon.name}
                        </td>
                        <td class="p-4 whitespace-nowrap text-gray-600">
                          <button
                            class="bg-teal-600 text-white font-bold rounded-md px-2 py-1 mr-2"
                            onClick={() => console.log(pokemon)}
                          >
                            Ver poderes
                          </button>
                          <button
                            class="bg-red-600 text-white font-bold rounded-md px-2 py-1"
                            onClick={() => doDeletePokemon(pokemon._id)}
                          >
                            Eliminar
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

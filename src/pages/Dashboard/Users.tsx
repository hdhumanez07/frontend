import { useEffect, useState } from "preact/hooks";
import { getUsers } from "../../services/user.service";
import useAuth from "../../context/useAuth";

export function Users() {
  const [users, setUsers] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    getUsers(auth.token).then((data) => setUsers(data.data));
  }, []);
  console.log(users);
  return (
    <div class="bg-white shadow rounded-lg m-4 p-4 sm:p-6 xl:p-8 ">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Lista de usuarios
          </h3>
          <span class="text-base font-normal text-gray-500">
            Esta es la lista de usuarios registrados en la plataforma
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
                      Email
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nombre completo
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Dirección
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Teléfono
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nacimiento
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ciudad
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Departamento
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {users.map((user, index) => (
                    <tr class={`${index % 2 == 1 ? "bg-gray-50" : null}`}>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        {user.email}
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        {user.fullName}
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {user.address}
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        {user.phone}
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        {new Date(user.birthday).toLocaleDateString()}
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {user.city.name}
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        {user.department.name}
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

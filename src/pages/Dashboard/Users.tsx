import { useEffect, useState } from "preact/hooks";
import { getUsers } from "../../services/user.service";
import useAuth from "../../context/useAuth";
import { USERS_HEADER_TABLE } from "../../utils/constants/table";
import { Table } from "../../components/Table";

export function Users() {
  const [users, setUsers] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    getUsers(auth.token).then((data) => setUsers(data.data));
  }, []);

  return (
    <Table
      title="Lista de usuarios"
      description="Esta es la lista de usuarios registrados en la plataforma"
      header={USERS_HEADER_TABLE}
    >
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
    </Table>
  );
}

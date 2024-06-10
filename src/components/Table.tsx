interface ITable {
  children?: React.ReactNode;
  title: string;
  description: string;
  header: string[];
}

export function Table({ children, title, description, header }: ITable) {
  return (
    <div class="bg-white shadow rounded-lg m-4 p-4 sm:p-6 xl:p-8 ">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <span class="text-base font-normal text-gray-500">{description}</span>
        </div>
        <div class="flex-shrink-0">
          <a
            href="#"
            class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
          >
            Ver todos
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
                    {header.map((header) => (
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {children ? children : <tr>Tabla sin datos</tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

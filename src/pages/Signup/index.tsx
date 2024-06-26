import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, TUserSchema } from "../../schemas/user.schema";
import busPeople from "../../assets/business-people.png";
import { signUp } from "../../services/user.service";
import { Toaster } from "react-hot-toast";
import { doAlert } from "../../utils/alert";
import { useNavigate } from "react-router-dom";
import { IDepartment } from "../../interfaces/department.interface";
import { ICity } from "../../interfaces/city.interface";
import { useEffect, useState } from "preact/hooks";
import { getDepartments } from "../../services/department.service";
import { getCities } from "../../services/city.service";

export function Signup() {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: TUserSchema) => {
    signUp(data).then((response) => {
      doAlert(response.info, response.success);
      if (response.success) {
        setTimeout(() => {
          if (response.success) {
            navigate("/login");
          }
        }, 4000);
      }
    });
  };

  // este useEffect se ejecuta una sola vez cuando el componente se monta para obtener los departamentos
  useEffect(() => {
    getDepartments().then((data) => setDepartments(data.data));
  }, []);

  // este useEffect se ejecuta cada vez que cambia el departamento seleccionado
  useEffect(() => {
    const department = watch("department");
    getCities({ department }).then((data) => setCities(data.data));
  }, [watch("department")]);

  return (
    <>
      <Toaster />
      <div
        class="flex h-full w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
        }}
      >
        <div class="bg-gray-800 w-full sm:w-auto bg-opacity-50 px-8 py-8 shadow-lg backdrop-blur-md sm:px-16">
          <div class="text-white text-sm">
            <div class="mb-4 flex flex-col items-center">
              <img src={busPeople} width="150" alt="Business People" />
              <h1 class="mt-4 text-xl">Registrarse</h1>
            </div>
            <form
              class="flex flex-col items-center gap-1"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="w-full mb-1">
                <label class="block mb-1 text-gray-300" for="fullName">
                  Nombre completo
                </label>
                <input
                  class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                  {...register("fullName")}
                  placeholder="Joris Voorn"
                />
                <p class="text-xs text-red-200">{errors.fullName?.message}</p>
              </div>
              <div class="w-full sm:flex sm:gap-2 mb-1">
                <div class="w-full sm:w-1/2 mb-1 sm:mb-0">
                  <label class="block mb-1 text-gray-300" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                  />
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block mb-1 text-gray-300" for="password">
                    Password
                  </label>
                  <input
                    class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                    type="password"
                    {...register("password")}
                    placeholder="********"
                  />
                  <p class="text-xs text-red-200">{errors.password?.message}</p>
                </div>
              </div>
              <div class="w-full sm:flex sm:gap-2 mb-1">
                <div class="w-full sm:w-1/2 mb-1 sm:mb-0">
                  <label class="block mb-1 text-gray-300" for="address">
                    Dirección
                  </label>
                  <input
                    class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                    {...register("address")}
                    placeholder="Dirección"
                  />
                  <p class="text-xs text-red-200">{errors.address?.message}</p>
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block mb-1 text-gray-300" for="phone">
                    Teléfono
                  </label>
                  <input
                    class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                    {...register("phone", { valueAsNumber: true })}
                    placeholder="Teléfono"
                  />
                  <p class="text-xs text-red-200">{errors.phone?.message}</p>
                </div>
              </div>
              <div class="w-full mb-1">
                <label class="block mb-1 text-gray-300" for="birthday">
                  Fecha de nacimiento
                </label>
                <input
                  class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                  type="date"
                  {...register("birthday", { valueAsDate: true })}
                />
                <p class="text-xs text-red-200">{errors.birthday?.message}</p>
              </div>
              {cities &&
                departments &&
                cities.length > 0 &&
                departments.length > 0 && (
                  <div class="w-full sm:flex sm:gap-2 mb-1">
                    <div class="w-full sm:w-1/2 mb-1 sm:mb-0">
                      <label class="block mb-1 text-gray-300" for="city">
                        Ciudad
                      </label>

                      <select
                        class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                        {...register("city", { value: cities[0]?._id })}
                      >
                        {cities.length > 0 &&
                          cities.map((city) => (
                            <option value={city._id}>{city.name}</option>
                          ))}
                      </select>
                      <p class="text-xs text-red-200">{errors.city?.message}</p>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <label class="block mb-1 text-gray-300" for="department">
                        Departamento
                      </label>
                      <select
                        class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3 text-sm"
                        {...register("department", {
                          value: departments[0]._id,
                        })}
                      >
                        {departments.length > 0 &&
                          departments.map((dep) => (
                            <option value={dep._id}>{dep.name}</option>
                          ))}
                      </select>
                      <p class="text-xs text-red-200">
                        {errors.department?.message}
                      </p>
                    </div>
                  </div>
                )}
              <button
                type="submit"
                class="w-full mt-6 sm:w-1/2 rounded-lg bg-yellow-600 hover:bg-yellow-500 py-2 text-white font-medium shadow-lg transition-colors"
              >
                Registrarse
              </button>
              <a href="/login" class="mt-4 text-sm text-gray-300 underline">
                iniciar sesión
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

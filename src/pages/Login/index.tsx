import lg from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "../../schemas/user.schema";
import { login } from "../../services/user.service";
import { Toaster } from "react-hot-toast";
import { IResponse } from "../../interfaces/http.interface";
import { doAlert } from "../../utils/alert";
import useAuth from "../../context/useAuth";
// import { initFalseUser, initLocalStorage } from "../../context/InitFalseUser";

export function Login() {
  //initFalseUser();
  //initLocalStorage();
  const { setAuth } = useAuth();
  const { register, handleSubmit } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginSchema) => {
    login(data).then((response: IResponse) => {
      if (response.success) {
        setAuth(response.data);
        window.localStorage.setItem("auth", JSON.stringify(response.data));
      } else {
        doAlert(response.info, response.success);
      }
    });
  };

  return (
    <>
      <Toaster />
      <div
        class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
        }}
      >
        <div class="bg-gray-800 w-full h-screen flex items-center justify-center sm:w-auto bg-opacity-50 px-8 py-8 shadow-lg backdrop-blur-md sm:px-16">
          <div class="text-white">
            <div class="mb-4 flex flex-col items-center">
              <img src={lg} width="150" alt="Login" />
              <h1 class="mt-4 text-2xl">Iniciar sesión</h1>
              <span class="text-sm">
                Ingresa tus credenciales para continuar
              </span>
            </div>
            <form
              class="flex flex-col items-center gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="w-96 mb-1">
                <label class="block mb-1 text-gray-300" for="email">
                  Email
                </label>
                <input
                  class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3"
                  type="email"
                  {...register("email")}
                  placeholder="joris.v@email.com"
                />
              </div>
              <div class="w-96 mb-1">
                <label class="block mb-1 text-gray-300" for="password">
                  Password
                </label>
                <input
                  class="w-full rounded-lg border border-gray-300 bg-gray-700 text-white py-2 px-3"
                  type="password"
                  {...register("password")}
                  placeholder="*********"
                />
              </div>
              <button
                type="submit"
                class="w-full sm:w-1/2 mt-6 rounded-lg bg-yellow-600 hover:bg-yellow-500 py-2 text-white font-medium shadow-lg transition-colors"
              >
                Login
              </button>
              <a href="/signup" class="mt-4 text-sm text-gray-300 underline">
                registrarse
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

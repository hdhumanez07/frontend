import useAuth from "../../context/useAuth";

export function Welcome() {
  const { auth } = useAuth();
  const { fullName } = auth.user;
  return (
    <div className="w-full h-full bg-yellow-600 text-white flex items-center justify-center">
      <div className="p-8 bg-black bg-opacity-50 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
        <p className="text-2xl">{fullName}</p>
      </div>
    </div>
  );
}

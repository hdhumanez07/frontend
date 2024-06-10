import { falseUser } from "./falseUser";
import useAuth from "./useAuth";

const initFalseUser = () => {
  const { auth, setAuth } = useAuth();
  setAuth(falseUser);
  console.log(auth);
};

const initLocalStorage = () => {
  window.localStorage.setItem("user", JSON.stringify(falseUser));
};

export { initFalseUser, initLocalStorage };

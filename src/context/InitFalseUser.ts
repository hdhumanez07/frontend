import { falseUser } from "./falseUser";
import useAuth from "./useAuth";

const initFalseUser = () => {
  const { setAuth } = useAuth();
  setAuth(falseUser);
};

const initLocalStorage = () => {
  window.localStorage.setItem("user", JSON.stringify(falseUser));
};

export { initFalseUser, initLocalStorage };

import { createContext } from "preact";
import { IUserContext } from "../interfaces/user.interface";

const UserContext = createContext<IUserContext>({
  auth: null,
  setAuth: () => {},
});

export default UserContext;

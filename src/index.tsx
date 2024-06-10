import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/_404.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import UserContext from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Dashboard/Welcome";
import { AddPokemon } from "./pages/Dashboard/AddPokemon";
import { Pokemons } from "./pages/Dashboard/Pokemons";
import { Users } from "./pages/Dashboard/Users";
import { PrivateRoute } from "./context/PrivateRoute";
import { useEffect, useMemo, useState } from "preact/hooks";
import { IsLogged } from "./context/IsLogged";
import "./style.css";

export function App() {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("auth");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      const auth = JSON.parse(loggedUserJSON);
      setAuth(auth);
    }
  }, []);

  const [auth, setAuth] = useState(null);
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <main>
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<IsLogged />}>
              <Route path="" element={<Login />} />
            </Route>
            <Route path="/signup" element={<IsLogged />}>
              <Route path="" element={<Signup />} />
            </Route>

            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route
                path=""
                element={
                  <Dashboard>
                    <Welcome />
                  </Dashboard>
                }
              />
              <Route
                path="/dashboard/users"
                element={
                  <Dashboard>
                    <Users />
                  </Dashboard>
                }
              />
              <Route
                path="/dashboard/pokemons"
                element={
                  <Dashboard>
                    <Pokemons />
                  </Dashboard>
                }
              />
              <Route
                path="/dashboard/pokemons/add"
                element={
                  <Dashboard>
                    <AddPokemon />
                  </Dashboard>
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </main>
  );
}

render(<App />, document.getElementById("app"));

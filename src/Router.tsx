import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Cadastro";
import Login from "./pages/Login";
import Budget from "./pages/Budget";
import { DefaultLayout } from "./DefaultLayout";
import Chat from "./pages/Chat";
import Profile from "./pages/Perfil";

export function Router() {

  return (
    <div className='app'>
      <div>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<DefaultLayout />}>
              <Route path="/orcamento" element={<Budget />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/perfil" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  )
}
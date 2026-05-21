import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Cadastro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { DefaultLayout } from "./DefaultLayout";
import CreateBudget from "./pages/CriarOrcamento";
import Budget from "./pages/Orcamento";
import Chat from "./pages/Chat";

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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/criar-orcamento" element={<CreateBudget />} />
              <Route path="/orcamento" element={<Budget />} />
              <Route path="/chat" element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  )
}
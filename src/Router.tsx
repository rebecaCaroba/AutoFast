import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Cadastro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { DefaultLayout } from "./DefaultLayout";
import CreateBudget from "./pages/CriarOrçamento";

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
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  )
}
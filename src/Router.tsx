import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Cadastro";
import Login from "./pages/Login";

export function Router() {
  const location = useLocation();
  const showAside = location.pathname.startsWith('/library');

  return (
    <div className='app'>
      <div  className={`content ${showAside ? 'with-sidebar' : ''}`}>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}
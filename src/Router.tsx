import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";

export function Router() {
  const location = useLocation();
  const showAside = location.pathname.startsWith('/library');

  return (
    <div className='app'>
      <div  className={`content ${showAside ? 'with-sidebar' : ''}`}>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}
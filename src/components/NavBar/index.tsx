import { Link } from 'react-router-dom';
import './style.scss';

export function NavBar() {
    return (
        <nav>
            <Link to="/" className="nav-logo">
                <span className="nav-logo-text">Auto<span>Fast</span></span>
            </Link>
            <ul className="nav-links">
                <li><a href="#como-funciona">Como funciona</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#para-quem">Para quem</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
            <div className="nav-cta">
                <Link to="/login" className="btn-ghost">Entrar</Link>
                <Link to="/cadastrar" className="btn-primary">Cadastrar grátis →</Link>
            </div>
            <button className="hamburger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </nav>
    )
}
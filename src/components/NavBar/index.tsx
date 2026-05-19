import './style.scss';

export function NavBar() {
    return (
        <nav>
            <a href="#" className="nav-logo">
                <span className="nav-logo-text">Auto<span>Fast</span></span>
            </a>
            <ul className="nav-links">
                <li><a href="#como-funciona">Como funciona</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#para-quem">Para quem</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
            <div className="nav-cta">
                <a href="../login/index.html" className="btn-ghost">Entrar</a>
                <a href="../login/index.html" className="btn-primary">Cadastrar grátis →</a>
            </div>
            <button className="hamburger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </nav>
    )
}
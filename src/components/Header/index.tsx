import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';

export function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    function handleLinkClick(link: string) {
        setActiveLink(link)
    }

    return (
        <header className="header" id="header">
            <div className='header-left'>
                <div className="header-profile">
                    <div className="header-avatar">OF</div>
                    <div className="header-profile-info">
                        <div className="header-profile-name">Oficina Mendes</div>
                    </div>
                    <div className="header-badge-online"></div>
                </div>
                <Link to="/orcamentos"
                    className={`nav-item ${activeLink === '/orcamentos' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('/orcamentos')}
                >
                    Orçamentos
                </Link>

                <Link to="/dashboard"
                    className={`nav-item ${activeLink === '/dashboard' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('/dashboard')}
                >
                    Painel
                </Link>

            </div>

            <div className='header-right'>
                <Link to="/perfil" >
                    Perfil
                </Link>
            </div>


        </header>
    );
}
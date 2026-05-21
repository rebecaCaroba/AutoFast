import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';

export function Sidebar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    function handleLinkClick(link: string)  {
        setActiveLink(link)
    }
  
    return (
        <aside className="sidebar" id="sidebar">

            <Link to="/" className="sidebar-logo">
                <span className="sidebar-logo-text">Auto<span>Fast</span></span>
            </Link>

            <div className="sidebar-profile">
                <div className="sidebar-avatar">RM</div>
                <div className="sidebar-profile-info">
                    <div className="sidebar-profile-name">Roberto Mendes</div>
                    <div className="sidebar-profile-role">Mecânico · Oficina Mendes</div>
                </div>
                <div className="sidebar-badge-online"></div>
            </div>

            <div className="sidebar-bottom">
                <Link to="/dashboard" 
                className={`nav-item ${activeLink === '/dashboard' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('/dashboard')}
                >
                    Dashboard
                </Link>

                <Link 
                to="/criar-orcamento" 
                className={`nav-item ${activeLink === '/criar-orcamento' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('/criar-orcamento')}
                >
                    Criar Orçamentos
                </Link>
            
                <a href="#" className="nav-item">
                    Configurações
                </a> 

                {/* <span className="sidebar-section-label">Gerenciamento</span> */}

                {/* <a href="#" className="nav-item">
                    Clientes
                </a>

                <a href="#" className="nav-item">
                    Histórico
                </a> */}

                <Link to="/" className="nav-item">
                    Sair
                </Link>
            </div>
        </aside>
    );
}
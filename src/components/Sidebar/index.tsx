import './style.scss';

export function Sidebar() {
    return (
        <aside className="sidebar" id="sidebar">

            <a href="../landing/index.html" className="sidebar-logo">
                <div className="sidebar-logo-icon">⚡</div>
                <span className="sidebar-logo-text">Auto<span>Fast</span></span>
            </a>

            <div className="sidebar-profile">
                <div className="sidebar-avatar">RM</div>
                <div className="sidebar-profile-info">
                    <div className="sidebar-profile-name">Roberto Mendes</div>
                    <div className="sidebar-profile-role">Mecânico · Oficina Mendes</div>
                </div>
                <div className="sidebar-badge-online"></div>
            </div>

            <div className="sidebar-bottom">
                <a href="#" className="nav-item">
                    Configurações
                </a>
                 <a href="#" className="nav-item active">
                    Dashboard
                </a>

                <a href="#" className="nav-item">
                    Orçamentos
                </a>

                <a href="../criar-orcamento/index.html" className="nav-item">
                    Novo orçamento
                </a>

                <a href="#" className="nav-item">
                    Mensagens
                </a>

                <span className="sidebar-section-label">Gerenciamento</span>

                <a href="#" className="nav-item">
                    Clientes
                </a>

                <a href="#" className="nav-item">
                    Histórico
                </a>

                <a href="#" className="nav-item">
                    Relatórios
                </a>
                <a href="../landing/index.html" className="nav-item">
                    Sair
                </a>
            </div>
        </aside>
    );
}
import './style.scss';

export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">⚡</div>
                            <span className="footer-logo-text">Auto<span>Fast</span></span>
                        </div>
                        <p className="footer-tagline">A plataforma que substitui o WhatsApp no gerenciamento de orçamentos de peças automotivas recondicionadas.</p>
                        <div className="footer-socials">
                            <a href="#" className="social-btn">in</a>
                            <a href="#" className="social-btn">ig</a>
                            <a href="#" className="social-btn">fb</a>
                            <a href="#" className="social-btn">yt</a>
                        </div>
                    </div>
                    <div>
                        <div className="footer-col-title">Produto</div>
                        <ul className="footer-links">
                            <li><a href="#como-funciona">Como funciona</a></li>
                            <li><a href="#funcionalidades">Funcionalidades</a></li>
                            <li><a href="#">Preços</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="footer-col-title">Empresa</div>
                        <ul className="footer-links">
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Parceiros</a></li>
                            <li><a href="#">Carreiras</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="footer-col-title">Suporte</div>
                        <ul className="footer-links">
                            <li><a href="#">Central de ajuda</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">Comunidade</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span className="footer-copy">© 2025 AutoFast. Todos os direitos reservados.</span>
                    <ul className="footer-legal">
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
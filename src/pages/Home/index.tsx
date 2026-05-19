import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import './style.scss';

export default function Home() {
    return (
        <div>
            <NavBar />
            {/* <!-- ── HERO ── --> */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-grid"></div>
                    <div className="hero-glow-1"></div>
                    <div className="hero-glow-2"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="hero-badge-dot"></span>
                            Plataforma de orçamentos automotivos
                        </div>
                        <h1 className="hero-title">
                            Orçamentos de peças<br />
                            <span className="hero-title-accent">rápidos e organizados</span>
                        </h1>
                        <p className="hero-subtitle">
                            Chega de negociar pelo WhatsApp. O AutoFast conecta clientes e mecânicos em uma plataforma profissional para gerenciar orçamentos de peças recondicionadas com agilidade e transparência.
                        </p>
                        <div className="hero-actions">
                            <Link to="/cadastrar" className="btn-hero-primary">
                                🚀 Começar agora — é grátis
                            </Link>
                            <a href="#como-funciona" className="btn-hero-secondary">
                                ▶ Ver como funciona
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-number">+2.400</span>
                                <span className="hero-stat-label">Orçamentos gerados</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat">
                                <span className="hero-stat-number">98%</span>
                                <span className="hero-stat-label">Taxa de satisfação</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat">
                                <span className="hero-stat-number">3x</span>
                                <span className="hero-stat-label">Mais rápido</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-mockup">
                            <div className="mockup-header">
                                <div className="mockup-title-row">
                                    <div className="mockup-icon">🔧</div>
                                    <div>
                                        <div className="mockup-title">Dashboard do Mecânico</div>
                                        <div className="mockup-subtitle">Gerenciar solicitações</div>
                                    </div>
                                </div>
                                <span className="mockup-badge">● Online</span>
                            </div>
                            <div className="mockup-orcamentos">
                                <div className="mockup-orcamento">
                                    <div className="mockup-orc-left">
                                        <div className="mockup-car-icon">🚗</div>
                                        <div>
                                            <div className="mockup-orc-title">Alternador — Civic 2019</div>
                                            <div className="mockup-orc-sub">Carlos Silva · há 5 min</div>
                                        </div>
                                    </div>
                                    <span className="mockup-orc-status status-pending">Pendente</span>
                                </div>
                                <div className="mockup-orcamento">
                                    <div className="mockup-orc-left">
                                        <div className="mockup-car-icon">🏎️</div>
                                        <div>
                                            <div className="mockup-orc-title">Caixa de Câmbio — Gol G5</div>
                                            <div className="mockup-orc-sub">Ana Lima · há 1h</div>
                                        </div>
                                    </div>
                                    <span className="mockup-orc-status status-approved">Aprovado</span>
                                </div>
                                <div className="mockup-orcamento">
                                    <div className="mockup-orc-left">
                                        <div className="mockup-car-icon">🚙</div>
                                        <div>
                                            <div className="mockup-orc-title">Motor de Arranque — HB20</div>
                                            <div className="mockup-orc-sub">Pedro Costa · há 2h</div>
                                        </div>
                                    </div>
                                    <span className="mockup-orc-status status-review">Em revisão</span>
                                </div>
                            </div>
                            <div className="mockup-footer">
                                <div className="mockup-stat-card">
                                    <div className="mockup-stat-number">12</div>
                                    <div className="mockup-stat-label">Abertas</div>
                                </div>
                                <div className="mockup-stat-card">
                                    <div className="mockup-stat-number">7</div>
                                    <div className="mockup-stat-label">Aprovadas</div>
                                </div>
                                <div className="mockup-stat-card">
                                    <div className="mockup-stat-number">R$4.8k</div>
                                    <div className="mockup-stat-label">Este mês</div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-float-card hero-float-card-1">
                            <div className="float-card-icon">📸</div>
                            <div className="float-card-content">
                                <div className="float-card-title">Foto anexada</div>
                                <div className="float-card-sub">alternador_frente.jpg · 2.3MB</div>
                            </div>
                        </div>
                        <div className="hero-float-card hero-float-card-2">
                            <div className="float-card-icon">✅</div>
                            <div className="float-card-content">
                                <div className="float-card-title">Orçamento aprovado!</div>
                                <div className="float-card-sub">R$ 380,00 · Honda Civic</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ── COMO FUNCIONA ── --> */}
            <section className="how-section" id="como-funciona">
                <div className="section-container">
                    <div className="how-header">
                        <div className="section-eyebrow">Como funciona</div>
                        <h2 className="section-title">Simples, rápido e<br /><span className="accent">sem complicação</span></h2>
                        <p className="section-desc">Do pedido à aprovação em poucos passos. Sem confusão de mensagens, sem orçamentos perdidos.</p>
                    </div>
                    <div className="how-grid">
                        <div className="how-steps">
                            <div className="how-step">
                                <div className="how-step-number">01</div>
                                <div className="how-step-content">
                                    <div className="how-step-title">Cliente solicita orçamento</div>
                                    <div className="how-step-desc">Preenche os dados do veículo, descreve o problema e envia fotos da peça diretamente na plataforma.</div>
                                </div>
                            </div>
                            <div className="how-step">
                                <div className="how-step-number">02</div>
                                <div className="how-step-content">
                                    <div className="how-step-title">Mecânico analisa e responde</div>
                                    <div className="how-step-desc">Recebe a notificação, avalia a peça, define o valor e envia o orçamento detalhado com prazo e condições.</div>
                                </div>
                            </div>
                            <div className="how-step">
                                <div className="how-step-number">03</div>
                                <div className="how-step-content">
                                    <div className="how-step-title">Cliente aprova ou negocia</div>
                                    <div className="how-step-desc">Pode aprovar o orçamento, solicitar ajustes ou conversar pelo chat integrado antes de decidir.</div>
                                </div>
                            </div>
                            <div className="how-step">
                                <div className="how-step-number">04</div>
                                <div className="how-step-content">
                                    <div className="how-step-title">Serviço executado e histórico salvo</div>
                                    <div className="how-step-desc">Tudo fica registrado no histórico, com rastreabilidade completa para consultas futuras.</div>
                                </div>
                            </div>
                        </div>

                        <div className="how-visual">
                            <div className="how-visual-inner">
                                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Acompanhamento em tempo real</div>
                                <div className="how-status-flow">
                                    <div className="how-status-item">
                                        <div className="how-status-dot dot-done"></div>
                                        <div className="how-status-text">Orçamento solicitado</div>
                                        <span className="how-status-badge status-approved">✓ Concluído</span>
                                    </div>
                                    <div className="how-status-item">
                                        <div className="how-status-dot dot-done"></div>
                                        <div className="how-status-text">Fotos analisadas pelo mecânico</div>
                                        <span className="how-status-badge status-approved">✓ Concluído</span>
                                    </div>
                                    <div className="how-status-item">
                                        <div className="how-status-dot dot-active"></div>
                                        <div className="how-status-text">Aguardando aprovação do cliente</div>
                                        <span className="how-status-badge status-review">● Em andamento</span>
                                    </div>
                                    <div className="how-status-item">
                                        <div className="how-status-dot dot-pending"></div>
                                        <div className="how-status-text">Serviço agendado</div>
                                        <span className="how-status-badge status-pending">○ Pendente</span>
                                    </div>
                                    <div className="how-status-item">
                                        <div className="how-status-dot dot-pending"></div>
                                        <div className="how-status-text">Finalizado e arquivado</div>
                                        <span className="how-status-badge status-pending">○ Pendente</span>
                                    </div>
                                </div>

                                <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '20px' }}>💬</span>
                                        <div>
                                            <div style={{ color: '#fb923c', fontSize: '0.82rem', fontWeight: '700' }}>Nova mensagem do mecânico</div>
                                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: '2px' }}>"Peça disponível! Posso instalar amanhã."</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ── FUNCIONALIDADES ── --> */}
            <section id="funcionalidades">
                <div className="section-container">
                    <div className="features-header">
                        <div>
                            <div className="section-eyebrow">Funcionalidades</div>
                            <h2 className="section-title">Tudo que você precisa<br /><span className="accent">em um lugar só</span></h2>
                        </div>
                        <a href="../login/index.html" className="btn-primary">Ver plataforma →</a>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card highlight">
                            <div className="feature-icon">📋</div>
                            <div className="feature-title">Criação de Orçamentos</div>
                            <div className="feature-desc">Formulário inteligente com upload de fotos, dados do veículo e descrição detalhada do problema. Tudo organizado e rastreável.</div>
                            <div className="feature-tags">
                                <span className="feature-tag">Fotos</span>
                                <span className="feature-tag">Dados do veículo</span>
                                <span className="feature-tag">Histórico</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔔</div>
                            <div className="feature-title">Notificações em Tempo Real</div>
                            <div className="feature-desc">Alertas instantâneos para cada atualização de status. Clientes e mecânicos sempre informados sem precisar checar manualmente.</div>
                            <div className="feature-tags">
                                <span className="feature-tag">Push</span>
                                <span className="feature-tag">E-mail</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <div className="feature-title">Chat Integrado</div>
                            <div className="feature-desc">Comunicação direta entre cliente e mecânico dentro da plataforma. Sem precisar de WhatsApp, tudo centralizado no orçamento.</div>
                            <div className="feature-tags">
                                <span className="feature-tag">Tempo real</span>
                                <span className="feature-tag">Por orçamento</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <div className="feature-title">Dashboard Completo</div>
                            <div className="feature-desc">Painel visual para mecânicos gerenciarem todas as solicitações. Métricas, gráficos e status em um só lugar.</div>
                            <div className="feature-tags">
                                <span className="feature-tag">Métricas</span>
                                <span className="feature-tag">Filtros</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🕐</div>
                            <div className="feature-title">Histórico Completo</div>
                            <div className="feature-desc">Todos os orçamentos e serviços ficam arquivados com data, valores e detalhes para consultas e comprovações futuras.</div>
                            <div className="feature-tags">
                                <span className="feature-tag">Busca</span>
                                <span className="feature-tag">Exportar</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <div className="feature-title">Segurança e Privacidade</div>
                            <div className="feature-desc">Dados criptografados, acesso por perfil e controle total sobre informações compartilhadas entre as partes.</div>
                            <div className="feature-tags">
                                <span className="feature-tag">SSL</span>
                                <span className="feature-tag">LGPD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ── PARA QUEM ── --> */}
            <section className="roles-section" id="para-quem">
                <div className="section-container">
                    <div style={{ textAlign: 'center', marginBottom: 0 }}>
                        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Para quem é o AutoFast</div>
                        <h2 className="section-title">Feito para mecânicos<br />e para clientes</h2>
                    </div>
                    <div className="roles-grid">
                        <div className="role-card mechanic">
                            <div className="role-header">
                                <div className="role-avatar mechanic-av">🔧</div>
                                <div>
                                    <div className="role-name">Para mecânicos</div>
                                    <div className="role-tagline">Gerencie sua oficina com eficiência</div>
                                </div>
                            </div>
                            <div className="role-features">
                                <div className="role-feature">
                                    <div className="role-feature-icon mechanic-fi">📥</div>
                                    Receba solicitações organizadas por prioridade
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon mechanic-fi">✏️</div>
                                    Crie orçamentos manualmente em segundos
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon mechanic-fi">📸</div>
                                    Visualize fotos das peças antes de responder
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon mechanic-fi">📊</div>
                                    Acompanhe métricas e faturamento do mês
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon mechanic-fi">💬</div>
                                    Chat direto com o cliente sem sair da plataforma
                                </div>
                            </div>
                            <a href="../login/index.html" className="role-cta mechanic-cta">
                                Cadastrar como mecânico →
                            </a>
                        </div>
                        <div className="role-card client">
                            <div className="role-header">
                                <div className="role-avatar client-av">🚗</div>
                                <div>
                                    <div className="role-name">Para clientes</div>
                                    <div className="role-tagline">Peça orçamentos com tranquilidade</div>
                                </div>
                            </div>
                            <div className="role-features">
                                <div className="role-feature">
                                    <div className="role-feature-icon client-fi">📲</div>
                                    Solicite orçamentos a qualquer hora, de qualquer lugar
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon client-fi">📸</div>
                                    Envie fotos da peça para diagnóstico preciso
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon client-fi">⚡</div>
                                    Receba respostas rápidas e detalhadas
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon client-fi">✅</div>
                                    Aprove, rejeite ou negocie com um clique
                                </div>
                                <div className="role-feature">
                                    <div className="role-feature-icon client-fi">📁</div>
                                    Histórico completo de todos os seus serviços
                                </div>
                            </div>
                            <a href="../login/index.html" className="role-cta client-cta">
                                Cadastrar como cliente →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ── DEPOIMENTOS ── --> */}
            <section id="depoimentos">
                <div className="section-container">
                    <div className="testimonials-header">
                        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Depoimentos</div>
                        <h2 className="section-title">O que dizem nossos usuários</h2>
                        <p className="section-desc">Mecânicos e clientes que transformaram sua comunicação com o AutoFast.</p>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                            </div>
                            <p className="testimonial-text">"Antes eu perdia horas organizando pedidos no WhatsApp. Hoje tudo chega organizado no dashboard. Triplicou minha produtividade na oficina."</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar av-blue">R</div>
                                <div>
                                    <div className="testimonial-name">Roberto Mendes</div>
                                    <div className="testimonial-role">Mecânico, Oficina Mendes — SP</div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                            </div>
                            <p className="testimonial-text">"Finalmente tenho transparência total. Vejo exatamente em qual etapa está meu orçamento e consigo conversar com o mecânico sem ficar ligando."</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar av-orange">A</div>
                                <div>
                                    <div className="testimonial-name">Ana Paula Souza</div>
                                    <div className="testimonial-role">Cliente, São Paulo — SP</div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                            </div>
                            <p className="testimonial-text">"A possibilidade de enviar fotos da peça direto na plataforma mudou tudo. O mecânico já chega preparado e o serviço fica mais rápido e preciso."</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar av-teal">M</div>
                                <div>
                                    <div className="testimonial-name">Marcos Ferreira</div>
                                    <div className="testimonial-role">Cliente, Campinas — SP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ── CTA ── --> */}
            <section className="cta-section">
                <div className="cta-glow"></div>
                <div className="section-container">
                    <div className="cta-content">
                        <div className="section-eyebrow" style={{ justifyContent: 'center', color: '#fb923c' }}>Comece agora</div>
                        <h2 className="cta-title">Pronto para organizar seus orçamentos?</h2>
                        <p className="cta-desc">Cadastre-se gratuitamente e experimente o AutoFast. Sem cartão de crédito, sem compromisso.</p>
                        <div className="cta-actions">
                            <Link to="/cadastrar" className="btn-hero-primary">Criar conta gratuita →</Link>
                            <a href="#como-funciona" className="btn-hero-secondary">Saber mais</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>




    )
}
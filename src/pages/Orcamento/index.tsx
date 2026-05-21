import { Link } from 'react-router-dom';
import './style.scss';

export default function Budget() {
    return (
        <main className="budget-page">
            <section className="budget-shell">
                <header className="budget-header">
                    <div className="budget-header-top">
                        <div className="budget-badges">
                            <span className="budget-id">#ORC-0047</span>
                            <span className="budget-status budget-status-active">Em análise</span>
                        </div>
                        <h1>Alternador — Honda Civic 2019</h1>
                        <p>Solicitado em 20/05/2025 às 09:14 · Oficina Mendes</p>
                    </div>
                    <Link to={'/chat'} className="btn-chat">Chat</Link>
                </header>

                <div className="budget-grid">
                    <section className="card-surface budget-card budget-status-card">
                        <div className="section-heading">
                            <div className="section-icon section-icon-blue">🧭</div>
                            <div>
                                <h2>Acompanhamento do status</h2>
                                <p>Progresso atual do orçamento</p>
                            </div>
                        </div>

                        <div className="timeline">
                            <article className="timeline-item timeline-done">
                                <div className="timeline-marker">✓</div>
                                <div className="timeline-content">
                                    <strong>Orçamento solicitado</strong>
                                    <p>Você enviou a solicitação com fotos e descrição do problema.</p>
                                    <span>20/05/2025 · 09:14</span>
                                </div>
                            </article>

                            <article className="timeline-item timeline-done">
                                <div className="timeline-marker">✓</div>
                                <div className="timeline-content">
                                    <strong>Recebido pelo mecânico</strong>
                                    <p>Roberto Mendes recebeu e está analisando as fotos da peça.</p>
                                    <span>20/05/2025 · 09:31</span>
                                </div>
                            </article>

                            <article className="timeline-item timeline-done">
                                <div className="timeline-marker">✓</div>
                                <div className="timeline-content">
                                    <strong>Orçamento enviado</strong>
                                    <p>O mecânico respondeu com valor, prazo e condições de serviço.</p>
                                    <span>20/05/2025 · 11:45</span>
                                </div>
                            </article>

                            <article className="timeline-item timeline-active">
                                <div className="timeline-marker timeline-marker-active">•</div>
                                <div className="timeline-content">
                                    <strong>Aguardando sua aprovação</strong>
                                    <p>Revise o orçamento e decida se aprova, rejeita ou solicita ajustes.</p>
                                    <span>Agora</span>
                                </div>
                            </article>

                            <article className="timeline-item timeline-muted">
                                <div className="timeline-marker timeline-marker-muted">4</div>
                                <div className="timeline-content">
                                    <strong>Serviço agendado</strong>
                                    <p>Após aprovação, o serviço será agendado com a oficina.</p>
                                </div>
                            </article>

                            <article className="timeline-item timeline-muted">
                                <div className="timeline-marker timeline-marker-muted">5</div>
                                <div className="timeline-content">
                                    <strong>Concluído</strong>
                                    <p>Serviço executado e orçamento arquivado no histórico.</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className="card-surface budget-card budget-response-card">
                        <div className="section-heading">
                            <div className="section-icon section-icon-orange">🛠️</div>
                            <div>
                                <h2>Resposta do mecânico</h2>
                                <p>Avaliação e proposta de serviço</p>
                            </div>
                        </div>

                        <blockquote className="mechanic-quote">
                            “O alternador do Civic 2019 apresenta desgaste nas escovas e no regulador de tensão. Tenho disponível uma unidade recondicionada com revisão completa, testada em bancada e com garantia de 6 meses. A peça inclui rolamento novo e conector original Honda. Posso instalar amanhã com entrega no mesmo dia.”
                        </blockquote>

                        <div className="mechanic-author">
                            <div className="mechanic-avatar">RM</div>
                            <div>
                                <strong>Roberto Mendes — Oficina Mendes</strong>
                                <span>20/05/2025 às 11:45</span>
                            </div>
                        </div>

                        <div className="budget-values">
                            <div className="budget-value-row">
                                <span>Peça recondicionada (alternador)</span>
                                <strong>R$ 280,00</strong>
                            </div>
                            <div className="budget-value-row">
                                <span>Mão de obra</span>
                                <strong>R$ 120,00</strong>
                            </div>
                            <div className="budget-value-row budget-value-discount">
                                <span>Desconto (cliente fidelidade)</span>
                                <strong>- R$ 20,00</strong>
                            </div>
                            <div className="budget-value-row budget-total-row">
                                <span>Total</span>
                                <strong>R$ 380,00</strong>
                            </div>
                        </div>

                        <div className="budget-meta-grid">
                            <div>
                                <span>Prazo de entrega</span>
                                <strong>Em 24 horas</strong>
                            </div>
                            <div>
                                <span>Garantia da peça</span>
                                <strong>6 meses</strong>
                            </div>
                            <div>
                                <span>Validade do orçamento</span>
                                <strong>Até 27/05/2025</strong>
                            </div>
                            <div>
                                <span>Formas de pagamento</span>
                                <div className="payment-chips">
                                    <span>Pix</span>
                                    <span>Crédito</span>
                                    <span>Débito</span>
                                </div>
                            </div>
                        </div>

                        <div className="decision-box">
                            <strong>Sua decisão</strong>
                            <div className="decision-actions">
                                <button type="button" className="decision-button decision-approve">✓ Aprovar</button>
                                <button type="button" className="decision-button decision-adjust">↻ Solicitar ajuste</button>
                                <button type="button" className="decision-button decision-reject">✕ Rejeitar</button>
                            </div>
                        </div>
                    </section>

                    <section className="card-surface budget-card budget-info-card">
                        <div className="section-heading">
                            <div className="section-icon section-icon-cream">🚗</div>
                            <div>
                                <h2>Veículo e peça</h2>
                                <p>Informações da solicitação original</p>
                            </div>
                        </div>

                        <div className="info-grid">
                            <div>
                                <span>Marca</span>
                                <strong>Honda</strong>
                            </div>
                            <div>
                                <span>Modelo</span>
                                <strong>Civic EXL</strong>
                            </div>
                            <div>
                                <span>Ano</span>
                                <strong>2019 / 2019</strong>
                            </div>
                            <div>
                                <span>Placa</span>
                                <strong>BRA-2E19</strong>
                            </div>
                            <div>
                                <span>Câmbio</span>
                                <strong>CVT (automático)</strong>
                            </div>
                            <div>
                                <span>Quilometragem</span>
                                <strong>94.200 km</strong>
                            </div>
                            <div className="info-full">
                                <span>Peça solicitada</span>
                                <strong>Alternador — Recondicionado</strong>
                            </div>
                            <div className="info-full">
                                <span>Descrição do problema</span>
                                <p>Veículo não está carregando a bateria. Luz de carga acesa no painel. Barulho leve ao ligar o motor na região do alternador. Bateria nova, problema descartado na fonte.</p>
                            </div>
                        </div>
                    </section>

                    <section className="card-surface budget-card budget-photos-card">
                        <div className="section-heading">
                            <div className="section-icon section-icon-yellow">📷</div>
                            <div>
                                <h2>Fotos da peça</h2>
                                <p>2 arquivos enviados pelo cliente</p>
                            </div>
                        </div>

                        <div className="photo-grid">
                            <div className="photo-card">
                                <div className="photo-illustration">🛠️</div>
                                <span>alternador_1.jpg</span>
                            </div>
                            <div className="photo-card">
                                <div className="photo-illustration">⚙️</div>
                                <span>alternador_2.jpg</span>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}
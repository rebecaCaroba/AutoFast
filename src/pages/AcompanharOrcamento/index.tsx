export default function AcompanharOrcamento() {
    return (
        <>
            <div className="budget-header-top">
                <div className="budget-badges">
                    <span className="budget-id">#ORC-0047</span>
                    <span className="budget-status budget-status-active">Em análise</span>
                </div>
                <h1>Alternador — Honda Civic 2019</h1>
                <p>Solicitado em 20/05/2025 às 09:14 · Oficina Mendes</p>
            </div>

            <br /><br />
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
        </>
    );
}
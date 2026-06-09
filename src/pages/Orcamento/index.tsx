import { Link, useParams } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';

const valueFields = [
    { label: 'Valor da peça (R$)', placeholder: '100' },
    { label: 'Valor da mão de obra (R$)', placeholder: '0,00' },
    { label: 'Desconto (R$)', placeholder: '0,00' },
    { label: 'Prazo de entrega', placeholder: 'Selecionar prazo...' },
    { label: 'Garantia da peça', placeholder: 'Selecionar...' },
    { label: 'Validade do orçamento', placeholder: '7 dias' },
];

const paymentOptions = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Boleto', 'Dinheiro'];


export default function Budget() {
    const parameters = useParams();
    const [value, setValue] = useState<number>(100);

    const formatarMoeda = (value: number) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        <main className="budget-page">
            <section className="budget-shell">
                <header className="budget-header">
                    <div className="budget-header-top">
                        <div className="budget-badges">
                            <span className="budget-id">#ORC-0047</span>
                            <span className="budget-status budget-status-active">{parameters.id}</span>
                        </div>
                        <h1>Alternador — Honda Civic 2019</h1>
                        <p>Solicitado em 20/05/2025 às 09:14 · Oficina Mendes</p>
                    </div>
                    <div>
                        <Link to={'/acompanhar-orcamento'} className="btn-chat" style={{ marginRight: '24px', }}>Acompanhar orçamento</Link>
                        <Link to={'/chat'} className="btn-chat">Chat</Link>
                    </div>
                </header>

                <div className="budget-grid">


                    <section className={`card-surface budget-card budget-response-card ${parameters.id == "Pendente" ? "hiden" : ""}`}  >
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

                    <section className="card form-card">
                        <div className="t">
                            <div>
                                <h2>Valor e prazo</h2>
                                <p>Defina o valor do orçamento e condições de pagamento</p>
                            </div>
                        </div>
                        <div className="field-grid field-grid-2">
                            {valueFields.map((field) => (
                                <label key={field.label} className="field">
                                    <span>{field.label} *</span>
                                    <input type="text" placeholder={field.placeholder} />
                                </label>
                            ))}
                        </div>
                        <div className="payment-row">
                            <span>Formas de pagamento aceitas</span>
                            <div className="payment-options">
                                {paymentOptions.map((option, index) => (
                                    <label key={option} className="checkbox-chip">
                                        <input type="checkbox" defaultChecked={index === 0} />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="total-box">
                            <div>
                                <span>TOTAL DO ORÇAMENTO</span>
                                <strong>Peça + mão de obra - desconto</strong>
                            </div>
                            <b>{formatarMoeda(value)}</b>
                        </div>
                    </section>
                    <button type="button" className="primary-button full">Enviar orçamento ao cliente</button>
                    <br /> <br />
                </div>
            </section>
        </main>
    )
}
const vehicleFields = [
    { label: 'Marca', placeholder: 'Selecionar marca...' },
    { label: 'Modelo', placeholder: 'Ex: Civic, Gol, Corolla...' },
    { label: 'Ano de fabricação', placeholder: 'Selecionar ano...' },
    { label: 'Ano do modelo', placeholder: 'Selecionar ano...' },
    { label: 'Placa do veículo', placeholder: 'ABC-1234 ou ABCD123' },
    { label: 'Câmbio', placeholder: 'Selecionar...' },
    { label: 'Combustível', placeholder: 'Selecionar...' },
    { label: 'Quilometragem', placeholder: 'Ex: 65000' },
];

const serviceFields = [
    { label: 'Tipo de peça', placeholder: 'Selecionar peça...' },
    { label: 'Condição da peça', placeholder: 'Recondicionada' },
];

const valueFields = [
    { label: 'Valor da peça (R$)', placeholder: '100' },
    { label: 'Valor da mão de obra (R$)', placeholder: '0,00' },
    { label: 'Desconto (R$)', placeholder: '0,00' },
    { label: 'Prazo de entrega', placeholder: 'Selecionar prazo...' },
    { label: 'Garantia da peça', placeholder: 'Selecionar...' },
    { label: 'Validade do orçamento', placeholder: '7 dias' },
];

const paymentOptions = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Boleto', 'Dinheiro'];

export default function RequestBudget() {
    return (
        <main className="create-budget-page">
            <div className="create-budget-shell">
                <h1>Solicitar orçamento</h1>
                <br />
                <div className="form-stack">
                    <div className='cards'>

                        <section className="card form-card">
                            <div className="">
                                <h2>Dados do veículo</h2>
                            </div>
                            <div className="field-grid field-grid-2">
                                {vehicleFields.map((field) => (
                                    <label key={field.label} className="field">
                                        <span>{field.label} *</span>
                                        <input type="text" placeholder={field.placeholder} />
                                    </label>
                                ))}
                            </div>
                        </section>
                        <section className="card form-card">
                            <div className="t">
                                <h2>Peça e serviço</h2>
                            </div>
                            <div className="field-grid field-grid-2">
                                {serviceFields.map((field) => (
                                    <label key={field.label} className="field">
                                        <span>{field.label} *</span>
                                        <input type="text" placeholder={field.placeholder} />
                                    </label>
                                ))}
                            </div>
                            <label className="field field-full">
                                <span>Descrição do problema *</span>
                                <textarea placeholder="Descreva detalhadamente o problema relatado pelo cliente..." rows={5} />
                            </label>
                            <label className="field field-full">
                                <span>Observações internas</span>
                                <textarea placeholder="Anotações internas (não serão exibidas para o cliente)..." rows={3} />
                            </label>
                        </section>
                        <section className="card form-card">
                            <div className="t">
                                <div>
                                    <h2>Fotos da peça</h2>
                                    <p>Imagens ajudam na avaliação da peça ou veículo</p>
                                </div>
                            </div>
                            <div className="upload-box">
                                <div className="upload-icon">📷</div>
                                <p><strong>Arraste fotos aqui ou clique para selecionar</strong></p>
                                <span>Você pode enviar múltiplas imagens da peça</span>
                                <div className="tag-list">
                                    <span>JPG</span>
                                    <span>PNG</span>
                                    <span>HEIC</span>
                                    <span>PDF</span>
                                    <span>MP4</span>
                                </div>
                            </div>
                            <div className="photo-thumbs">
                                <div className="thumb-card" />
                                <div className="thumb-card" />
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
                                <b>R$ 100,00</b>
                            </div>
                        </section>
                    </div>

                    <section className="card summary-card">
                        <header className="summary-header">
                            <h2>Resumo do orçamento</h2>
                            <p>Pré-visualização antes de enviar</p>
                        </header>

                        <div className="summary-table">
                            <div><span>Cliente</span><strong>Rebeca</strong></div>
                            <div><span>Veículo</span><strong>Não informado</strong></div>
                            <div><span>Peça</span><strong>Não selecionada</strong></div>
                            <div><span>Fotos</span><strong>2 arquivos</strong></div>
                            <div><span>Valor</span><strong>R$ 100,00</strong></div>
                            <div><span>Prazo</span><strong>Não definido</strong></div>
                            <div><span>Status inicial</span><strong className="status pending">• Pendente</strong></div>
                        </div>

                        <div className="footer-actions">
                            <button type="button" className="primary-button full">Enviar orçamento ao cliente</button>
                            <button type="button" className="ghost-button full">Salvar como rascunho</button>
                            <button type="button" className="link-button">← Voltar ao dashboard</button>
                        </div>
                    </section>
                    
                </div>
            </div>
        </main>
    );
}
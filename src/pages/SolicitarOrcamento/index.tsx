import { useState } from 'react';
import './style.scss';

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
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: 'Dados do veículo',
            description: 'Preencha os dados básicos do carro antes de seguir.',
            content: (
                <div className="field-grid field-grid-2">
                    {vehicleFields.map((field) => (
                        <label key={field.label} className="field">
                            <span>{field.label} *</span>
                            <input type="text" placeholder={field.placeholder} />
                        </label>
                    ))}
                </div>
            ),
        },
        {
            title: 'Peça e serviço',
            description: 'Descreva o problema e o tipo de peça necessário.',
            content: (
                <>
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
                </>
            ),
        },
        {
            title: 'Fotos da peça',
            description: 'Anexe imagens para facilitar a avaliação.',
            content: (
                <>
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
                </>
            ),
        },
    ];

    const currentStepData = steps[currentStep];

    const goPrevious = () => {
        setCurrentStep((step) => Math.max(step - 1, 0));
    };

    const goNext = () => {
        setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    };

    return (
        <main className="create-budget-page">
            <div className="create-budget-shell">
                <h1>Solicitar orçamento</h1>
                <br />
                <div className="form-stack">
                    <div className='cards'>
                        <section className="card form-card">
                            <div className="t step-header">
                                <div>
                                    <h2>{currentStepData.title}</h2>
                                    <p>{currentStepData.description}</p>
                                </div>
                                <span className="step-badge">Etapa {currentStep + 1} de {steps.length}</span>
                            </div>

                            {currentStepData.content}

                            <div className="step-actions">
                                <button
                                    type="button"
                                    className="ghost-button"
                                    onClick={goPrevious}
                                    disabled={currentStep === 0}
                                >
                                    ← Anterior
                                </button>
                                <button
                                    type="button"
                                    className="primary-button"
                                    onClick={goNext}
                                    disabled={currentStep === steps.length - 1}
                                >
                                    Próxima →
                                </button>
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
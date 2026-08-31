import { IoMdClose } from "react-icons/io";
import './style.scss'
import { useState } from "react";

type BudgetStatus = 'new' | 'accepted'

interface ModalBudgetProps {
    toggleModalBudget: () => void
}

export function ModalBudget({ toggleModalBudget }: ModalBudgetProps) {
    const [budgetStatus, setBudgetStatus] = useState<BudgetStatus>('new');
    const [serviceDescription, setServiceDescription] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceDeadline, setServiceDeadline] = useState('');
    const [serviceStage, setServiceStage] = useState('Aguardando início');

    function handleAcceptBudget() {
        setBudgetStatus('accepted')
    }

    function handleSubmitService(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setServiceStage('Em execução')
    }

    return (
        <div className="modal-budget">
            <div className='modal-budget-container'>
                <div className="modal-budget-header">
                    <div className="modal-budget-header-title">
                        <h3>ORC-124</h3>
                        <span className={`modal-budget-status modal-budget-status--${budgetStatus}`}>
                            {budgetStatus === 'new' ? 'Novo orçamento' : 'Orçamento aceito'}
                        </span>
                    </div>
                    <div className="modal-budget-header-buttons">
                        <button type="button" onClick={toggleModalBudget} className='modal-budget-btn-close' aria-label="Fechar orçamento">
                            <IoMdClose size={17} />
                        </button>
                    </div>
                </div>
                <div className='modal-budget-body'>
                    <div className='modal-budget-body-info'>
                        <p><strong>Cliente:</strong> João Vitor</p>
                        <p><strong>Telefone:</strong> (99) 99999-9999</p>
                        <p><strong>Veículo:</strong> Honda Civic</p>
                        <p><strong>Peça:</strong> Eixo Dianteiro</p>
                    </div>
                    <div className="modal-budget-body-img">
                        <img src="https://picsum.photos/seed/picsum/200" alt="Foto da peça solicitada" />
                    </div>

                    <details>
                        <summary>Descrição do problema</summary>
                        <div className="summary-desc">
                             <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </details>

                    <details open>
                        <summary>Preço e prazo</summary>
                        <div className='summary-price'>
                            <div className="price-left">
                                <p>Valor do orçamento</p>
                                <strong>R$432,00</strong>
                            </div>
                            <div className="price-right">
                                <p>Prazo de entrega</p>
                                <strong>5 dias utéis</strong>
                            </div>
                        </div>
                    </details>
                     {budgetStatus !== 'new' && (
                        <AcceptedBudget
                            description={serviceDescription}
                            price={servicePrice}
                            deadline={serviceDeadline}
                            stage={serviceStage}
                            onDescriptionChange={setServiceDescription}
                            onPriceChange={setServicePrice}
                            onDeadlineChange={setServiceDeadline}
                            onSubmit={handleSubmitService}
                        />
                     )}
                </div>
                    {budgetStatus === 'new' ? (
                        <div className='modal-budget-footer'>
                            <button type="button" onClick={toggleModalBudget} className='modal-budget-btn-reject'>Recusar</button>
                            <button type="button" onClick={handleAcceptBudget} className='modal-budget-btn-approve'>Aprovar orçamento</button>
                        </div>
                    ) : (
                       ''
                    )}
            </div>
        </div>
    )
}

interface AcceptedBudgetProps {
    description: string
    price: string
    deadline: string
    stage: string
    onDescriptionChange: (value: string) => void
    onPriceChange: (value: string) => void
    onDeadlineChange: (value: string) => void
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function AcceptedBudget({
    description,
    price,
    deadline,
    stage,
    onDescriptionChange,
    onPriceChange,
    onDeadlineChange,
    onSubmit,
}: AcceptedBudgetProps) {
    return (
        <section className="accepted-budget">
            <div className="accepted-budget-heading">
                <div>
                    <span className="accepted-budget-step">Etapa 2 de 2</span>
                    <h4>Prepare o serviço</h4>
                    <p>Preencha os dados abaixo para informar ao cliente como o serviço será realizado.</p>
                </div>
                <span className="accepted-budget-stage">{stage}</span>
            </div>
            <form className="modal-budget-body-form" onSubmit={onSubmit}>
                <label className="form-field form-field--full" htmlFor="service-description">
                    <span>1. Descrição do serviço</span>
                    <textarea
                        id="service-description"
                        value={description}
                        onChange={(event) => onDescriptionChange(event.target.value)}
                        placeholder="Descreva o reparo, as peças utilizadas e os cuidados do serviço..."
                        rows={4}
                        required
                    />
                </label>
                <div className="form-field-row">
                    <label className="form-field" htmlFor="service-price">
                        <span>2. Preço final</span>
                        <input id="service-price" type="number" min="0" step="0.01" value={price} onChange={(event) => onPriceChange(event.target.value)} placeholder="Ex: 432,00" required />
                    </label>
                    <label className="form-field" htmlFor="service-deadline">
                        <span>3. Prazo de entrega</span>
                        <input id="service-deadline" type="text" value={deadline} onChange={(event) => onDeadlineChange(event.target.value)} placeholder="Ex: 5 dias úteis" required />
                    </label>
                </div>
                <p className="accepted-budget-hint">Você poderá atualizar essas informações enquanto o serviço estiver em andamento.</p>
                <div className="accepted-budget-actions">
                    <button type="button" className="modal-budget-btn-secondary">Salvar rascunho</button>
                    <button type="submit" className="modal-budget-btn-approve">Atualizar orçamento</button>
                </div>
            </form>
        </section>
    )
}


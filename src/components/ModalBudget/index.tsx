import { IoMdClose } from "react-icons/io";
import './style.scss'

interface ModalBudgetProps {
    toggleModalBudget: () => void
}

const budgetStatus = 'new'


export function ModalBudget({ toggleModalBudget }: ModalBudgetProps) {
    return (
        <div className="modal-budget">
            <div className='modal-budget-container'>
                <div className="modal-budget-header">
                    <div className="modal-budget-header-title">
                        <h3>ORC-124</h3>
                        <span className={`modal-budget-status modal-budget-status`}>
                            Novo
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
                </div>
                    {budgetStatus === 'new' ? (
                        <div className='modal-budget-footer'>
                            <button type="button"  className='modal-budget-btn-reject'>Recusar</button>
                            <button type="button" className='modal-budget-btn-approve'>Aprovar orçamento</button>
                        </div>
                    ) : (
                       ''
                    )}
            </div>
        </div>
    )
}

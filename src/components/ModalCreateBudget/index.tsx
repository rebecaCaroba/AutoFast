import './styele.scss'
import { IoAddSharp } from "react-icons/io5";

interface ModalCreateBudgetProps {
    handleOpenModal: () => void
}

export function ModalCreateBudget({handleOpenModal}: ModalCreateBudgetProps) {
    return (
        <div className="modal-create-budget">
            <div className='modal-create-budget-container'>
                <div className="modal-creat-budget-header">
                    <div className="modal-creat-budget-header-title">
                        <h3>Novo orçamento — Mecânico</h3>
                    </div>

                    <div className="modal-creat-budget-header-buttons">
                        <button className='modal-creat-budget-btn'>
                            <IoAddSharp />
                        </button>
                    </div>
                </div>

                <div className='modal-create-budget-body'>
                    <details>
                        <summary>Dados do cliente</summary>
                        <p>Detalhes</p>
                    </details>


                    <details>
                        <summary>Dados do cliente</summary>
                        <p>Detalhes</p>
                    </details>

                    <details>
                        <summary>Veículo</summary>
                        <p>Detalhes</p>
                    </details>

                    <details>
                        <summary>Peça</summary>
                        <p>Detalhes</p>
                    </details>
                    
                    <details>
                        <summary>Preço e prazo</summary>
                        <p>Detalhes</p>
                    </details>

                    
                </div>

                <div className='modal-create-budget-footer'>
                    <div className="modal-creat-budget-footer-buttons">
                        <button onClick={handleOpenModal} className='modal-creat-budget-btn-cancel'>
                            Cancelar
                        </button>

                        <button className='modal-creat-budget-btn-submit'>
                            <IoAddSharp />
                            Criar orçamento
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
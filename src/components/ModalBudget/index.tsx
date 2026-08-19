import './style.scss'

interface ModalBudgetProps {
    toggleModalBudget: () => void
}

export function ModalBudget({ toggleModalBudget }: ModalBudgetProps) {
    return (
        <div className="modal-budget">
            <div className='modal-budget-container'>
                <div className="modal-budget-header">
                    <div className="modal-budget-header-title">
                        <h3>Orçamento</h3>
                    </div>
                    <div className="modal-budget-header-buttons">
                        <button onClick={toggleModalBudget} className='modal-budget-btn'>
                            Fechar
                        </button>
                    </div>
                </div>
                <div className='modal-budget-body'>
                    <div className='modal-budget-body-info'>
                        <p><strong>Cliente:</strong> João Vitor</p>
                        <p><strong>Telefone:</strong> (99) 99999-9999</p>
                        <p><strong>Veículo:</strong> Honda Civic</p>
                        <p><strong>Serviço:</strong> Troca de óleo</p>
                        <p><strong>Status:</strong> Pendente</p>
                    </div>

                    <details>
                        <summary>Descrição</summary>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </details>

                    <details>
                        <summary>Preço e prazo</summary>
                        <p><strong>Valor:</strong> R$ 150,00</p>
                        <p><strong>Prazo:</strong> 4 dias uteis</p>
                    </details>
                    <div className='modal-budget-body-actions'>
                        <button className='modal-budget-btn-approve'>Aprovar</button>
                        <button className='modal-budget-btn-reject'>Rejeitar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

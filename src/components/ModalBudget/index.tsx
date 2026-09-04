import { IoMdClose } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

import './style.scss'
import { useState } from "react";
import { Chat } from "../Chat";

interface ModalBudgetProps {
    toggleModalBudget: () => void
}

const budgetStatus: string = 'new'

export function ModalBudget({ toggleModalBudget }: ModalBudgetProps) {
    const [isActiveNav, setIsActiveNav] = useState<'bud' | 'chat'>('bud')

    return (

        <div className="modal-budget">
            <div className='modal-budget-container'>
                <div className="modal-budget-header">
                    <div className="modal-budget-header-content">
                        <div className="modal-budget-header-title">
                            <h3>ORC-124</h3>
                            <span className={`modal-budget-status`}>
                                Novo
                            </span>
                        </div>
                        <div className="modal-budget-header-buttons">
                            <button type="button" onClick={toggleModalBudget} className='modal-budget-btn-close' aria-label="Fechar orçamento">
                                <IoMdClose size={17} />
                            </button>
                        </div>
                    </div>

                    <nav className="modal-budget-header-nav">
                        <li
                            onClick={() => setIsActiveNav('bud')}
                            className={`${isActiveNav == 'bud' ? 'active' : ''}`}>
                            Orçamento
                        </li>
                        <li
                            onClick={() => setIsActiveNav('chat')}
                            className={`${isActiveNav == 'chat' ? 'active' : ''}`}>
                            Chat
                        </li>
                    </nav>
                </div>
                {isActiveNav === 'bud' ? (
                    <BudgetDetails />
                ) : (
                    <Chat />
                )}

            </div>
        </div>
    )
}


export function BudgetDetails() {
    const [sectionOpen, setSectionOpen] = useState<string | null>(null);

    const toggleSection = (sectionId: string) => {
        setSectionOpen(sectionOpen === sectionId ? null : sectionId);
    };

    return (
        <>
            <div className='modal-budget-body'>
                <div className='modal-budget-body-info'>
                    <p><span>Cliente:</span> João Vitor</p>
                    <p><span>Telefone:</span> (99) 99999-9999</p>
                    <p><span>Veículo:</span> Honda Civic</p>
                    <p><span>Peça:</span> Eixo Dianteiro</p>
                </div>
                <div className="modal-budget-body-img">
                    <img src="https://picsum.photos/seed/picsum/200" alt="Foto da peça solicitada" />
                </div>

                <div className="modal-budget-body-client-request">
                    <div className="cr-label">Descrição enviada pelo cliente</div>
                    <p id="aDescricaoCliente">Veículo não dá partida, motor de arranque com ruído excessivo. Cliente pediu retorno rápido pois usa o carro para trabalho.</p>
                </div>


                {budgetStatus !== 'new' ? (
                    <div className="modal-budget-section" id="secDescricao">
                        <div className="section-head" onClick={() => toggleSection('secDescricao')}>
                            <div className={`section-head-left ${sectionOpen === 'secDescricao' ? 'open' : ''}`}>
                                <IoIosArrowForward size={15} />
                                <h4>Preço e prazo</h4>
                            </div>
                        </div>
                        <div className={`summary-price ${sectionOpen === 'secDescricao' ? '' : 'hidden'}`}>
                            <div className="price-left">
                                <p>Valor do orçamento</p>
                                <strong>R$432,00</strong>
                            </div>
                            <div className="price-right">
                                <p>Prazo de entrega</p>
                                <strong>5 dias utéis</strong>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="modal-budget-form">
                        <div className="modal-budget-form-header">
                            <div className="modal-budget-form-icon" aria-hidden="true">
                                <RiEdit2Fill size={18} />
                            </div>
                            <div>
                                <h4>Responder orçamento</h4>
                                <p>Preencha os dados abaixo para aprovar e enviar ao cliente</p>
                            </div>
                        </div>

                        <div className="modal-budget-form-element">
                            <label htmlFor="service-description">Descrição do serviço que será feito</label>
                            <textarea
                                id="service-description"
                                placeholder="Explique o diagnóstico e o serviço que será realizado..."
                                rows={3}
                            />
                        </div>

                        <div className="modal-budget-form-grid">
                            <div className="modal-budget-form-element">
                                <label htmlFor="budget-value">Valor do orçamento</label>
                                <input id="budget-value" type="text" placeholder="Ex: R$ 380,00" />
                            </div>

                            <div className="modal-budget-form-element">
                                <label htmlFor="delivery-time">Prazo de entrega</label>
                                <input id="delivery-time" type="text" placeholder="Ex: 2 dias úteis" />
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            {budgetStatus === 'new' ? (
                <div className='modal-budget-footer'>
                    <button type="button" className='modal-budget-btn-reject'> <ImCancelCircle size={15} /> Recusar</button>
                    <button type="button" className='modal-budget-btn-approve'> <FaCheck size={15} /> Aprovar orçamento</button>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
import { useState } from 'react';
import './styele.scss'
import { IoAddSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { GrPrevious } from "react-icons/gr";


interface ModalCreateBudgetProps {
    toggleModal: () => void
}

export function ModalCreateBudget({ toggleModal }: ModalCreateBudgetProps) {
    const [step, setStep] = useState<number>(1)

    function handleNextStep() {
        setStep((state) => state + 1)
    }

    function handlePreviousStep() {
        setStep((state) => state - 1)
    }

    return (
        <div className="modal-create-budget">
            <div className='modal-create-budget-container'>
                <div className="modal-creat-budget-header">
                    <div className="modal-creat-budget-header-title">
                        <h3>Novo orçamento</h3>
                    </div>

                    <div className="modal-creat-budget-header-buttons">
                        <button onClick={toggleModal} className='modal-creat-budget-btn'>
                            < IoMdClose size={18}/>
                        </button>
                    </div>
                </div>

                <div className='modal-create-budget-body'>
                    <form className="modal-create-budget-body-form" action="">
                        {
                            step == 1 && (
                                <>
                                    <h4>Dados do cliente</h4>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Nome cliente</label>
                                        <input type="text" placeholder='João Vitor' />
                                    </div>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Telefone</label>
                                        <input type="text" placeholder='(99) 99999-9999' />
                                    </div>
                                </>
                            )
                        }

                        {
                            step == 2 && (
                                <>
                                    <h4>Dados do Veículo</h4>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Modelo</label>
                                        <input type="text" placeholder='VW Gol G5 1.5' />
                                    </div>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Ano</label>
                                        <input type="number" placeholder='2017' />
                                    </div>
                                </>
                            )
                        }

                        {
                            step == 3 && (
                                <>
                                    <h4>Dados da peça</h4>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Nome da peça</label>
                                        <input type="text" placeholder='Eixo dianteiro' />
                                    </div>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Garantia</label>
                                        <select>
                                            <option value="">3 meses</option>
                                            <option value="">4 meses</option>
                                            <option value="">6 meses</option>
                                            <option value="">Sem garantia</option>
                                        </select>
                                    </div>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Foto da peça</label>
                                        <input type="file" />
                                    </div>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Descrição</label>
                                        <textarea name="" id="" placeholder='Descreva o problema relatado e o que será feito...'></textarea>
                                    </div>
                                </>
                            )
                        }

                        {
                            step == 4 && (
                                <>
                                    <h4>Prazo e entrega</h4>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Valor Orçamento</label>
                                        <input type="number" placeholder='Ex: 360,50' step={0.0} />
                                    </div>
                                    <div className='form-fiel'>
                                        <label htmlFor="">Prazo de entrega</label>
                                        <input type="text" placeholder='Ex: 2 dias úteis' />
                                    </div>
                                </>
                            )
                        }

                    </form>


                </div>

                <div className='modal-create-budget-footer'>
                    <div className="modal-creat-budget-footer-buttons">
                        <button onClick={toggleModal} className='modal-creat-budget-btn-cancel'>
                            Cancelar
                        </button>

                        <button onClick={handlePreviousStep} className='modal-creat-budget-btn-previous' disabled={step === 1}>
                            <GrPrevious size={18}/>
                        </button>

                        {step < 4 ? (
                            <button onClick={handleNextStep} className='modal-creat-budget-btn-submit'>
                                <IoAddSharp />
                                Próximo
                            </button>
                        ) : (
                            <button onClick={handleNextStep} className='modal-creat-budget-btn-submit'>
                                <IoAddSharp />
                                Criar Orçamento
                            </button>
                        )

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
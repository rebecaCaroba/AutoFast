import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';
import { IoAddSharp } from 'react-icons/io5';
import { FaSortAmountDown } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import { ModalCreateBudget } from '../../../components/ModalCreateBudget';
import { ModalBudget } from '../../../components/ModalBudget';

interface Orcamento {
    id: number;
    cliente: string;
    orc: string;
    veiculo: string;
    data: string;
    valor: number;
    status: 'Pendente' | 'Aprovado' | 'Em revisão' | 'Em análise';
}

const dados: Orcamento[] = [
    { id: 1, cliente: 'Carlos Silva', orc: 'Alternador - Recondicionado', veiculo: 'Honda Civic 2019', data: 'Hoje, 09:14', valor: 0, status: 'Pendente' },
    { id: 2, cliente: 'Ana Lima', orc: 'Caixa de Câmbio - Recondicionado', veiculo: 'VW Gol G5 2015', data: 'Hoje, 08:30', valor: 750.00, status: 'Aprovado' },
    { id: 4, cliente: 'Fernanda Ramos', orc: 'Compressor de A/C - Recondicionado', veiculo: 'Jeep Compass 2020', data: 'Ontem, 11:45', valor: 1200.00, status: 'Em análise' },
];

export function BudgetClient() {
    const navigate = useNavigate();
    const [isModalOpenCreateBudget, setIsOpenCreateBudget] = useState<boolean>(false)
    const [isModalBudgetOpen, setIsModalBudgetOpen] = useState<boolean>(false)

    function toggleModalBudget() {
        setIsModalBudgetOpen((state) => !state)
    }

    function toggleModalCreateBudget() {
        setIsOpenCreateBudget((state) => !state)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pendente':
                return '#FFF3CD';
            case 'Aprovado':
                return '#D4EDDA';
            case 'Em revisão':
                return '#FCE5CD';
            case 'Em análise':
                return '#D1ECF1';
            default:
                return '#F8F9FA';
        }
    };

    const getStatusTextColor = (status: string) => {
        switch (status) {
            case 'Pendente':
                return '#856404';
            case 'Aprovado':
                return '#155724';
            case 'Em revisão':
                return '#856404';
            case 'Em análise':
                return '#0C5460';
            default:
                return '#000';
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Todos os orçamentos</h1>
                    <p className="total-orcamentos">3 orçamentos no total</p>
                </div>
                <div className="dashboard-mechanic-actions">
                    <button type="button" className="dashboard-mechanic-action-button dashboard-mechanic-action-button--ghost">
                        < CiFilter size={24} />
                        Filtrar
                    </button>
                    <button type="button" className="dashboard-mechanic-action-button dashboard-mechanic-action-button--ghost">
                        <FaSortAmountDown size={16} />
                        Ordenar
                    </button>
                    <button type="button" onClick={toggleModalCreateBudget} className="dashboard-mechanic-action-button dashboard-mechanic-action-button--primary">
                        < IoAddSharp />
                        Novo orçamento
                    </button>
                </div>
            </div>

            <div className="dashboard-container">

                <div className="table-container">
                    <table className="orcamentos-table">
                        <thead>
                            <tr>
                                <th>PEÇA / SERVIÇO</th>
                                <th>VEÍCULO</th>
                                <th>DATA</th>
                                <th>VALOR</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((orcamento) => (
                                <tr key={orcamento.id} onClick={toggleModalBudget} className="table-row">
                                    <td>{orcamento.orc}</td>
                                    <td>{orcamento.veiculo}</td>
                                    <td>{orcamento.data}</td>
                                    <td>
                                        {orcamento.valor > 0 ? (
                                            <div className="valor">R$ {orcamento.valor.toFixed(2)}</div>
                                        ) : (
                                            <span>—</span>
                                        )}
                                    </td>
                                    <td>
                                        <span
                                            className="status-badge"
                                            style={{
                                                backgroundColor: getStatusColor(orcamento.status),
                                                color: getStatusTextColor(orcamento.status),
                                            }}
                                        >
                                            {orcamento.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {isModalOpenCreateBudget && (
                <ModalCreateBudget toggleModal={toggleModalCreateBudget} />
            )}

            {isModalBudgetOpen && (
                <ModalBudget toggleModalBudget={toggleModalBudget} />
            )}

        </div>
    );
}
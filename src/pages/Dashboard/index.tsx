import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';

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

export default function Dashboard() {
    const [filtro, setFiltro] = useState('');
    const navigate = useNavigate();

    const orcamentosFiltrados = dados.filter(orcamento =>
        orcamento.cliente.toLowerCase().includes(filtro.toLowerCase()) ||
        orcamento.orc.toLowerCase().includes(filtro.toLowerCase()) ||
        orcamento.veiculo.toLowerCase().includes(filtro.toLowerCase())
    );

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
                    <p className="total-orcamentos">{orcamentosFiltrados.length} orçamentos no total</p>
                </div>
                <Link to={'/criar-orcamento'} className="btn-criar-orcamento">+ Criar orçamento</Link>
            </div>

            <div className="filtro-container">
                <input
                    type="text"
                    placeholder="Pesquisar por cliente, serviço ou veículo..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className="filtro-input"
                />
            </div>

            <div className="table-container">
                <table className="orcamentos-table">
                    <thead>
                        <tr>
                            <th>CLIENTE</th>
                            <th>PEÇA / SERVIÇO</th>
                            <th>VEÍCULO</th>
                            <th>DATA</th>
                            <th>VALOR</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orcamentosFiltrados.map((orcamento) => (
                            <tr key={orcamento.id} onClick={() => navigate('/orcamento')}>
                                <td>
                                    <div className="cliente-info">
                                        <div className="cliente-avatar">{orcamento.cliente.charAt(0)}</div>
                                        <div>
                                            <div className="cliente-nome">{orcamento.cliente}</div>
                                            <div className="cliente-id">#{String(orcamento.id).padStart(4, '0')}</div>
                                        </div>
                                    </div>
                                </td>
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
    );
}
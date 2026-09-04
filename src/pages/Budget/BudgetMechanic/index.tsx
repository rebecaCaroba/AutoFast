import { CiFilter, CiClock2 } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { useState } from "react";

import './style.scss'
import { ModalCreateBudget } from "../../../components/ModalCreateBudget";
import { ModalBudget } from "../../../components/ModalBudget";

interface CardItem {
    id: string
    title: string
    client: string
    description: string
    value: string
    time: string
    initials: string
    tone: 'blue' | 'orange' | 'green'
    tag: string
}

interface BoardColumn {
    title: string
    count: number
    accent: 'blue' | 'purple' | 'yellow' | 'orange' | 'green' | 'gray'
    cards: CardItem[]
}

const columns: BoardColumn[] = [
    {
        title: 'Novas',
        count: 4,
        accent: 'blue',
        cards: [
            {
                id: '#ORC-1042',
                title: 'Alternador recond. - Gol G5',
                client: 'Matheus Cano',
                description: 'Padrão',
                value: 'R$ 380,00',
                time: '2h',
                initials: 'MV',
                tone: 'blue',
                tag: 'Padrão',
            },
            {
                id: '#ORC-1043',
                title: 'Motor de partida - Onix',
                client: 'Matheus Cano',
                description: 'Urgente',
                value: 'R$ 295,00',
                time: '40min',
                initials: 'FR',
                tone: 'orange',
                tag: 'Urgente',
            },
            {
                id: '#ORC-1044',
                title: 'Compressor A/C - HB20',
                client: 'Matheus Cano',
                description: 'Simples',
                value: 'R$ 610,00',
                time: '5h',
                initials: 'DA',
                tone: 'green',
                tag: 'Simples',
            },
            {
                id: '#ORC-1045',
                title: 'Caixa de direção - Corolla',
                client: 'Matheus Cano',
                description: 'Padrão',
                value: 'R$ 890,00',
                time: '1 dia',
                initials: 'RS',
                tone: 'blue',
                tag: 'Padrão',
            },
        ],
    },
    {
        title: 'Em análise',
        count: 3,
        accent: 'purple',
        cards: [
            {
                id: '#ORC-1031',
                title: 'Turbina - Hilux 3.0',
                client: 'Matheus Cano',
                description: 'Padrão',
                value: 'R$ 1.450,00',
                time: '3h',
                initials: 'PN',
                tone: 'orange',
                tag: 'Padrão',
            },
            {
                id: '#ORC-1032',
                title: 'Bomba d\'água - Fiesta',
                client: 'Matheus Cano',
                description: 'Urgente',
                value: 'R$ 210,00',
                time: '25min',
                initials: 'LP',
                tone: 'orange',
                tag: 'Urgente',
            },
            {
                id: '#ORC-1033',
                title: 'Radiador - Civic',
                client: 'Matheus Cano',
                description: 'Simples',
                value: 'R$ 460,00',
                time: '6h',
                initials: 'IB',
                tone: 'green',
                tag: 'Simples',
            },
        ],
    },
    {
        title: 'Aguardando resposta',
        count: 3,
        accent: 'yellow',
        cards: [
            {
                id: '#ORC-1020',
                title: 'Cabeçote - Uno 1.0',
                client: 'Matheus Cano',
                description: 'Aguardando',
                value: 'R$ 1.120,00',
                time: '1 dia',
                initials: 'BF',
                tone: 'blue',
                tag: 'Aguardando',
            },
            {
                id: '#ORC-1021',
                title: 'Injeção eletrônica - Kicks',
                client: 'Matheus Cano',
                description: 'Aguardando',
                value: 'R$ 980,00',
                time: '2 dias',
                initials: 'TM',
                tone: 'orange',
                tag: 'Aguardando',
            },
            {
                id: '#ORC-1022',
                title: 'Câmbio automático - Cruze',
                client: 'Matheus Cano',
                description: 'Padrão',
                value: 'R$ 3.200,00',
                time: '8h',
                initials: 'AD',
                tone: 'blue',
                tag: 'Padrão',
            },
        ],
    },
    {
        title: 'Ajustes',
        count: 2,
        accent: 'orange',
        cards: [
            {
                id: '#ORC-1018',
                title: 'Suspensão dianteira - Argo',
                client: 'Matheus Cano',
                description: 'Urgente',
                value: 'R$ 540,00',
                time: '1h',
                initials: 'RP',
                tone: 'orange',
                tag: 'Urgente',
            },
            {
                id: '#ORC-1011',
                title: 'Farol de LED - Compass',
                client: 'Matheus Cano',
                description: 'Padrão',
                value: 'R$ 720,00',
                time: '4h',
                initials: 'CR',
                tone: 'blue',
                tag: 'Padrão',
            },
        ],
    },
    {
        title: 'Em execução',
        count: 3,
        accent: 'green',
        cards: [
            {
                id: '#ORC-0998',
                title: 'Amortecedor traseiro - Sandero',
                client: 'Matheus Cano',
                description: 'Simples',
                value: 'R$ 410,00',
                time: '3h',
                initials: 'EF',
                tone: 'green',
                tag: 'Simples',
            },
            {
                id: '#ORC-0999',
                title: 'Bomba de óleo - S10',
                client: 'Matheus Cano',
                description: 'Padrão',
                value: 'R$ 630,00',
                time: '1 dia',
                initials: 'VL',
                tone: 'blue',
                tag: 'Padrão',
            },
            {
                id: '#ORC-1000',
                title: 'Embreagem - Strada',
                client: 'Matheus Cano',
                description: 'Urgente',
                value: 'R$ 750,00',
                time: '2h',
                initials: 'GN',
                tone: 'orange',
                tag: 'Urgente',
            },
        ],
    },
    {
        title: 'Finalizadas',
        count: 3,
        accent: 'gray',
        cards: [
            {
                id: '#ORC-0972',
                title: 'Alternador recond. - Fox',
                client: 'Matheus Cano',
                description: 'Concluído',
                value: 'R$ 350,00',
                time: '07 dias',
                initials: 'PG',
                tone: 'green',
                tag: 'Concluído',
            },
            {
                id: '#ORC-0965',
                title: 'Radiador - Ranger',
                client: 'Matheus Cano',
                description: 'Concluído',
                value: 'R$ 580,00',
                time: '12 dias',
                initials: 'HC',
                tone: 'green',
                tag: 'Concluído',
            },
            {
                id: '#ORC-0951',
                title: 'Motor de partida - Voyage',
                client: 'Matheus Cano',
                description: 'Concluído',
                value: 'R$ 270,00',
                time: '20 dias',
                initials: 'SM',
                tone: 'orange',
                tag: 'Concluído',
            },
        ],
    },
]

export function BudgetMechanic() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isModalBudgetOpen, setIsModalBudgetOpen] = useState<boolean>(false)

    function toggleModalBudget() {
        setIsModalBudgetOpen((state) => !state)
    }

    function toggleModal() {
        setIsModalOpen((state) => !state)
    }

    return (
        <div className="dashboard-mechanic">
            <div className="dashboard-mechanic-shell">
                <header className="dashboard-mechanic-header">
                    <div>
                        <h1 className="dashboard-mechanic-title">Orçamentos – Peças Recondicionadas</h1>
                        <p className="dashboard-mechanic-subtitle">Acompanhe cada orçamento do pedido até a finalização</p>
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
                        <button type="button" onClick={toggleModal} className="dashboard-mechanic-action-button dashboard-mechanic-action-button--primary">
                            < IoAddSharp />
                            Novo orçamento
                        </button>
                    </div>
                </header>

                {isModalOpen && (
                    <ModalCreateBudget toggleModal={toggleModal} />
                )}

                {isModalBudgetOpen && (
                    <ModalBudget toggleModalBudget={toggleModalBudget} />
                )}

                <div className="dashboard-mechanic-board" role="list" aria-label="Quadro de orçamentos do mecânico">
                    {columns.map((column) => (
                        <section key={column.title} className="dashboard-mechanic-column" role="listitem" data-accent={column.accent}>
                            <div className="dashboard-mechanic-column-header">
                                <div className="dashboard-mechanic-column-title-row">
                                    <span className="dashboard-mechanic-column-dot" aria-hidden="true" />
                                    <h2 className="dashboard-mechanic-column-title">{column.title}</h2>
                                    <span className="dashboard-mechanic-column-count">{column.count}</span>
                                </div>

                                <button type="button" onClick={toggleModal} className="dashboard-mechanic-column-add" aria-label={`Adicionar novo item em ${column.title}`}>
                                    < IoAddSharp />
                                </button>
                            </div>

                            <div className="dashboard-mechanic-cards">
                                {column.cards.map((card) => (
                                    <article key={card.id} onClick={toggleModalBudget} className="dashboard-mechanic-card">
                                        <div className="dashboard-mechanic-card-top">
                                            <span className="dashboard-mechanic-badge" data-tone={card.tone}>
                                                {card.description}
                                            </span>

                                            <span className="dashboard-mechanic-time"><CiClock2 /> {card.time}</span>
                                        </div>

                                        <div className="dashboard-mechanic-code">{card.id}</div>
                                        <h3 className="dashboard-mechanic-card-title">{card.client}</h3>
                                        <p className="dashboard-mechanic-card-text">{card.title}</p>

                                        <div className="dashboard-mechanic-card-footer">
                                            <div className="dashboard-mechanic-price">{card.value}</div>
                                           
                                        </div>
                                    </article>

                                ))}
                            </div>

                            <button type="button" className="dashboard-mechanic-add-new">
                                < IoAddSharp size={12} /> Novo orçamento
                            </button>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}
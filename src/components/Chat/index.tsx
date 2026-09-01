import { BsSend } from "react-icons/bs";

import './style.scss'

export function Chat() {
    return (
        <div className="chat">
            <div className="chat-container">
                <div className="chat-messages">
                    <div className="chat-date">Hoje</div>
                    <div className="chat-message chat-message-user">
                        <div className="chat-avatar chat-avatar-user">RO</div>
                        <div className="chat-bubble chat-bubble-user">
                            <p>Consegue melhorar um pouco esse valor? Pago à vista.</p>
                            <span className="chat-time">09:50</span>
                        </div>
                    </div>
                    <div className="chat-message chat-message-bot">
                        <div className="chat-bubble chat-bubble-bot">
                            <p>Consigo sim! Ajustei para R$ 540,00 a vista, já te enviei o novo orçamento.</p>
                            <span className="chat-time">10:15</span>
                        </div>
                        <div className="chat-avatar chat-avatar-bot">OF</div>
                    </div>
                </div>
            </div>
            <div className="chat-input-area">
                <input type="text" placeholder="Escreva uma mensagem para o cliente..." />
                <button type="button" aria-label="Enviar mensagem">
                    <BsSend size={20} />
                </button>
            </div>
        </div>
    )
}
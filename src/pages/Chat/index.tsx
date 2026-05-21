import './style.scss';

export default function Chat() {
    return (
        <main className="chat-page">
            <section className="chat-shell">
                <header className="chat-header">
                    <div className="chat-user">
                        <div className="chat-avatar">CS</div>
                        <div className="chat-user-info">
                            <strong>Carlos Silva</strong>
                            <span className="chat-status">
                                <span className="chat-status-dot" />
                                Online agora
                            </span>
                        </div>
                    </div>

                    <div className="chat-actions" aria-label="Ações do chat">
                        <button type="button" className="chat-action-button" aria-label="Copiar conversa">
                            📋
                        </button>
                        <button type="button" className="chat-action-button" aria-label="Mais opções">
                            ⋯
                        </button>
                    </div>
                </header>

                <div className="chat-body">
                    <div className="chat-divider">
                        <span>Hoje · 20 de maio de 2025</span>
                    </div>

                    <div className="chat-system-chip">Chat iniciado a partir do orçamento #ORC-0047</div>

                    <div className="chat-thread">
                        <div className="message-group message-group-left">
                            <span className="message-author">Carlos Silva</span>

                            <article className="message message-incoming">
                                <p>
                                    Olá Roberto! Envie o orçamento agora há pouco. O alternador do meu Civic está com problema,
                                    a bateria não carrega mais.
                                </p>
                            </article>

                            <span className="message-time">09:15</span>

                            <article className="message message-incoming">
                                <p>Mandei fotos da peça junto com a solicitação. Consegue dar uma olhada?</p>
                            </article>

                            <span className="message-time">09:16</span>

                            <div className="attachment-card">
                                <div className="attachment-preview">🔧</div>
                                <div className="attachment-label">alternador_frente.jpg · 2.3 MB</div>
                            </div>

                            <span className="message-time">09:17</span>
                        </div>

                        <div className="message-group message-group-right">
                            <article className="message message-outgoing">
                                <p>Oi Carlos! Recebi tudo. Deixa eu analisar as fotos com calma.</p>
                            </article>

                            <div className="message-meta message-meta-right">
                                <span className="message-time">09:31</span>
                                <span className="message-checks">✓✓</span>
                                <div className="message-avatar message-avatar-small">RM</div>
                            </div>

                            <article className="message message-outgoing message-outgoing-wide">
                                <p>
                                    Pelo que vi nas fotos, o problema está nas escovas e no regulador de tensão. Tenho um alternador
                                    recondicionado revisado em bancada disponível aqui na oficina!
                                </p>
                            </article>

                            <div className="message-meta message-meta-right">
                                <span className="message-time">11:40</span>
                                <span className="message-checks">✓✓</span>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="chat-footer">
                    <div className="composer">
                        <button type="button" className="composer-icon" aria-label="Anexar arquivo">
                            📎
                        </button>

                        <label className="composer-field">
                            <span className="sr-only">Escreva uma mensagem</span>
                            <input type="text" placeholder="Escreva uma mensagem..." />
                            <button type="button" className="composer-icon composer-icon-emoji" aria-label="Inserir emoji">
                                😊
                            </button>
                        </label>

                        <button type="button" className="composer-send" aria-label="Enviar mensagem">
                            ▶
                        </button>
                    </div>

                    <p className="composer-hint">Enter para enviar · Shift+Enter para nova linha</p>
                </footer>
            </section>
        </main>
    );
}
import { IoMdExit } from "react-icons/io";
import { FaBuilding, FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { RiEdit2Fill } from "react-icons/ri";



import './style.scss'

export default function Profile() {
    return (
        <div className="profile">
            <h1>Meu perfil</h1>
            <p>Gerencie seus dados pessoais, da oficina e sua senha de acesso</p>
            <div className="profile-container">

                <aside className="profile-aside">
                    <div className="profile-aside-user">
                        <div className="profile-aside-user-image">
                            <img src="https://picsum.photos/id/237/200/300" alt="Profile" />
                        </div>
                        <div className="profile-aside-user-info">
                            <h3>Vitor</h3>
                        </div>
                    </div>

                    <div className="profile-aside-summary">
                        <div className="profile-aside-summary-item">
                            <span>128</span>
                            <p>Orçamentos</p>
                        </div>
                        <div className="profile-aside-summary-item">
                            <span>4.9</span>
                            <p>Avaliação</p>
                        </div>
                    </div>

                    <nav className="profile-aside-nav">
                        <ul>
                            <li><a className="active" href="#personal-data"> <FaRegUser size={14} /> Dados Pessoais</a></li>
                            <li><a href="#company-data"> <FaBuilding size={14} /> Dados da Oficina</a></li>
                            <li><a href="#password"> <CiLock size={14} /> Alterar Senha</a></li>
                        </ul>
                    </nav>

                    <div className="profile-aside-logout">
                        <button><IoMdExit size={18} />Sair da conta</button>
                    </div>
                </aside>

                <section className="profile-content">
                    <div className="profile-content-header">
                    </div>
                    <div className="profile-content-form" id="personal-data">
                        <div className="profile-content-form-header">
                            <div className="profile-content-form-header-title">
                                <div className="profile-content-form-header-icon">
                                    <FaRegUser size={18} />
                                </div>
                                <h3>Dados Pessoais</h3>
                            </div>

                            <button>
                                <RiEdit2Fill size={18} /> Editar
                            </button>
                        </div>
                        {/* <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" value="Vitor" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone</label>
                                <input type="tel" id="phone" name="phone" value="(11) 99999-9999" />
                            </div>
                        </form> */}

                        <div className="profile-content-form-group">
                            <label htmlFor="name">Nome</label>
                            <span id="name">Vitor</span>
                        </div>
                        <div className="profile-content-form-group">
                            <label htmlFor="name">Email</label>
                            <span id="name">mecanico@gmail.com</span>
                        </div>
                        <div className="profile-content-form-group">
                            <label htmlFor="name">Telefone</label>
                            <span id="name">(11) 99999-8888</span>
                        </div>
                    </div>
                    <div className="profile-content-form">
                        <div className="profile-content-form-header" id="company-data">
                            <div className="profile-content-form-header-title">
                                <div className="profile-content-form-header-icon">
                                    <FaBuilding size={18} />
                                </div>

                                <h3>Dados da oficina</h3>
                            </div>
                            <button>
                                <RiEdit2Fill size={18} /> Editar
                            </button>
                        </div>
                        {/* <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" value="Vitor" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone</label>
                                <input type="tel" id="phone" name="phone" value="(11) 99999-9999" />
                            </div>
                        </form> */}

                        <div className="profile-content-form-group">
                            <label htmlFor="name">Nome</label>
                            <span id="name">Tok AutoPeças</span>
                        </div>
                        <div className="profile-content-form-group">
                            <label htmlFor="name">CNPJ</label>
                            <span id="name">12.345.678/0001-90</span>
                        </div>
                        <div className="profile-content-form-group">
                            <label htmlFor="name">Endereço</label>
                            <span id="name">Av. das Recondicionadas, 482 — São Paulo, SP</span>
                        </div>
                        <div className="profile-content-form-group">
                            <label htmlFor="name">Telefone</label>
                            <span id="name">(11) 99999-8888</span>
                        </div>
                        <div className="profile-content-form-group">
                            <label htmlFor="name">Horário de atendimento</label>
                            <span id="name">Seg a Sáb, 08h—18h</span>
                        </div>
                    </div>
                    <div className="profile-content-form">
                        <div className="profile-content-form-header" id="password">
                            <div className="profile-content-form-header-title">
                                <div className="profile-content-form-header-icon">
                                    <CiLock size={18} />
                                </div>
                                <h3>Senha</h3>
                            </div>
                            <button>
                                <RiEdit2Fill size={18} /> Alterar senha
                            </button>
                        </div>
                        {/* <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" value="Vitor" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone</label>
                                <input type="tel" id="phone" name="phone" value="(11) 99999-9999" />
                            </div>
                        </form> */}
                        <div className="profile-content-form-group">
                            <label htmlFor="name">Senha atual</label>
                            <span id="name">*********</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
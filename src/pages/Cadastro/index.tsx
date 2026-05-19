import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import './style.scss';

export default function Register() {
    return (
        <>
        <NavBar />
        <div className="page-bg" aria-hidden="true">
            <div className="grid-layer"></div>
            <div className="glow glow-1"></div>
            <div className="glow glow-2"></div>
        </div>
    	<main className="register-layout">
		<section className="form-panel" aria-label="Formulario de cadastro">
			<div className="form-card">
				<a href="../index.html" className="back-link">← Voltar para home</a>

				<div className="form-header">
					<p className="badge">Comece gratis</p>
					<h1>Criar conta no AutoFast</h1>
					<p>Preencha seus dados para centralizar os orcamentos da sua oficina.</p>
				</div>

				<form className="register-form" action="#" method="post">
					<div className="grid-two">
						<div className="field">
							<label htmlFor="nome">Nome completo</label>
							<input id="nome" name="nome" type="text" placeholder="Ex: Joao Pereira" required />
						</div>
						<div className="field">
							<label htmlFor="telefone">Telefone</label>
							<input id="telefone" name="telefone" type="tel" placeholder="(11) 99999-9999" required />
						</div>
					</div>

					<div className="field">
						<label htmlFor="email">E-mail</label>
						<input id="email" name="email" type="email" placeholder="voce@autofast.com" required />
					</div>

					<div className="grid-two">
						<div className="field">
							<label htmlFor="perfil">Perfil</label>
							<select id="perfil" name="perfil" required>
								<option value="" selected disabled>Selecione seu perfil</option>
								<option value="mecanico">Mecanico</option>
								<option value="cliente">Cliente</option>
							</select>
						</div>
						<div className="field">
							<label htmlFor="cidade">Cidade</label>
							<input id="cidade" name="cidade" type="text" placeholder="Sao Paulo" required />
						</div>
					</div>

					<div className="grid-two">
						<div className="field">
							<label htmlFor="senha">Senha</label>
							<input id="senha" name="senha" type="password" placeholder="Minimo de 8 caracteres" required />
						</div>
						<div className="field">
							<label htmlFor="confirmar-senha">Confirmar senha</label>
							<input id="confirmar-senha" name="confirmar-senha" type="password" placeholder="Repita sua senha" required />
						</div>
					</div>

					<label className="check-field" htmlFor="termos">
						<input id="termos" type="checkbox" required />
						<span>Aceito os termos de uso e a politica de privacidade.</span>
					</label>

					<button type="submit" className="btn-submit">Criar minha conta</button>
				</form>

				<p className="switch-auth">
					Ja possui uma conta?
					<Link to="/login">Entrar agora</Link>
				</p>
			</div>
		</section>

		<section className="brand-panel" aria-label="Beneficios da plataforma">
			<h2>Digitalize o seu atendimento sem complicacao.</h2>
			<p className="brand-description">
				Com o AutoFast voce tira os orcamentos do WhatsApp e coloca todo o processo em um fluxo profissional, rapido e rastreavel.
			</p>

			<div className="benefits-list" aria-label="Lista de beneficios">
				<article className="benefit-item">
					<p className="benefit-title">Solicitacoes centralizadas</p>
					<p className="benefit-text">Cada pedido chega com dados completos e fotos da peca.</p>
				</article>
				<article className="benefit-item">
					<p className="benefit-title">Negociacao por status</p>
					<p className="benefit-text">Acompanhe aprovacoes e pendencias sem perder mensagens.</p>
				</article>
				<article className="benefit-item">
					<p className="benefit-title">Visao de crescimento</p>
					<p className="benefit-text">Mensure conversoes e faturamento em um painel intuitivo.</p>
				</article>
			</div>
		</section>
	</main>
        </>
    );
}
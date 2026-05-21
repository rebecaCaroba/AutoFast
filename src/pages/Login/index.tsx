import './style.scss';
import { NavBar } from '../../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();

  return (
    <>
        <NavBar />
        <div className="page-bg" aria-hidden="true">
		<div className="grid-layer"></div>
		<div className="glow glow-1"></div>
		<div className="glow glow-2"></div>
	</div>

	<main className="auth-layout">
		<section className="form-panel" aria-label="Formulario de login">
			<div className="form-card">
				<div className="form-header">
					<p className="badge">Acesso seguro</p>
					<h2>Entrar na conta</h2>
					<p>Use seu e-mail e senha para continuar.</p>
				</div>

				<form className="auth-form" action="#" method="post">
					<label htmlFor="email">E-mail</label>
					<input id="email" name="email" type="email" placeholder="voce@oficina.com" required />

					<div className="field-row">
						<label htmlFor="senha">Senha</label>
						<a href="#" className="aux-link">Esqueci minha senha</a>
					</div>
					<input id="senha" name="senha" type="password" placeholder="Digite sua senha" required />

					<button type="submit" className="btn-submit" onClick={() => navigate('/dashboard/')}>Entrar agora</button>
				</form>

				<p className="switch-auth">
					Ainda nao tem conta?
					<Link to="/cadastrar">Cadastre-se</Link>
				</p>
			</div>
		</section>
	</main>
    </>
  );
}
import { useNavigate } from "react-router";
import './estilo.css';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form" onSubmit={(e) => {e.preventDefault();}} >
                <input type="text" placeholder="Usuário" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit" onClick={() => {navigate('/inicio')}}> Entrar </button>
                <p onClick={() => {navigate('/cadastro')}}> Não tenho uma conta </p>
            </form>
        </div>
    )
}
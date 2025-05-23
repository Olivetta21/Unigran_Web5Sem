import { useNavigate } from "react-router";
import './estilo.css';
import { useAuth } from "../Auth/AuthContext"; // ajuste o caminho conforme onde salvou

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form" onSubmit={(e) => {e.preventDefault();}} >
                <input type="text" placeholder="Usuário" required />
                <input type="password" placeholder="Senha" required />
                
                <button type="submit" onClick={() => {
                    login();
                    navigate('/inicio');
                }}>
                    Entrar
                </button>

                <p onClick={() => {navigate('/cadastro')}}>Não tenho uma conta</p>
            </form>
        </div>
    )
}
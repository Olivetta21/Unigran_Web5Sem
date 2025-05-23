import { useNavigate } from "react-router";

export default function Cadastro() {
    const navigate = useNavigate();

    return (
    <div className="login-page">
        <h1>Cadastro</h1>
        <form className="login-form" onSubmit={(e) => {e.preventDefault();}}>
            <input type="text" placeholder="Nome" required />
            <input type="text" placeholder="Usuário" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit" onClick={() => {navigate('/')}}> Cadastrar-se </button>
            <p type="button" onClick={() => {navigate(-1)}}> voltar </p>
        </form>
    </div>
    )
}
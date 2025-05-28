import { Outlet, useNavigate } from "react-router";
import { useState } from "react";
import "./ProdutoCrud.css";

export default function ProdutoCrud() {
    const navigate = useNavigate();
    const [action, setAction] = useState("");

    function nav(path) {
        navigate("/produtocrud/"+path);
        return path;
    };

    return (
        <div className="produto-crud">
            <div className="produto-crud-menu">
                <div>
                    <button onClick={() => navigate("/inicio")}>Voltar</button>
                    <p> Gerenciamento Produto </p>
                </div>
                <div>
                    <button onClick={() => setAction(nav("cadastrar"))}>Cadastrar</button>
                    <button onClick={() => setAction(nav("atualizar"))}>Atualizar</button>
                    <button onClick={() => setAction(nav("deletar"))}>Deletar</button>
                    <button onClick={() => setAction(nav("visualizar"))}>Listar</button>
                </div>            
            </div>
            <div className="produto-crud-content">
                <p>{action}</p>
                <Outlet />
            </div>
        </div>
    );
}
import { Outlet, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./ProdutoCrud.css";
import { deletarProduto } from "../Fetchers/produto";
import { useToast } from "../Context/ToastNotifContext";

export default function ProdutoCrud() {
    const navigate = useNavigate();
    const { addToast } = useToast();
    const [action, setAction] = useState("");
    const { produtos, setProdutos, carregarProdutos } = useContext(DataContext);


    function delProd(id) {
        addToast("Deletando produto...", "info");
        deletarProduto(id)
            .then(() => {
                addToast("Produto deletado com sucesso!", "success");
                setProdutos(produtos.filter((p) => p.id !== id));
            })
            .catch((error) => {
                addToast("Erro ao deletar produto: " + error.message, "error");
            });
    }   


    function voltar() {
        if (action) {
            setAction("");
            navigate("/produtocrud");
        } else {
            navigate("/inicio");
        }
    }

    return (
        <div className="produto-crud">
            <div className="produto-crud-menu">
                <button onClick={() => voltar()}>Voltar</button>
                <p> Gerenciamento Produto </p>            
                <p>{action || "visualizando"}</p>
                <button onClick={() => {navigate("/produtocrud/cadastrar"); setAction("Cadastrando");}}>Criar Novo</button>
                <button onClick={() => carregarProdutos()}>Recarregar Produtos</button>
            </div>
            <div className="produto-crud-modificacoes">
                {action ? 
                    <Outlet />
                    :
                    <table className="produto-crud-produtos-container">
                        <thead>
                            <tr>
                                <th>Imagem</th>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody className="produto-crud-produto">
                            {produtos.map((p) => (
                                <tr key={p.id}>
                                    <td><img src={p.imagem} alt={p.nome}/></td>
                                    <td>{p.id}</td>
                                    <td>{p.nome}</td>
                                    <td>R$ {p.valor.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => {navigate("/produtocrud/cadastrar", {state: p}); setAction("Atualizando");}}>Atualizar</button>
                                        <button onClick={() => delProd(p.id)}>Deletar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
}
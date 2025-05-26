import { lerProdutos } from "../../Fetchers/produto";
import { useState, useEffect } from "react";

export default function ListarProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const produtosLidos = await lerProdutos();
                setProdutos(produtosLidos);
            } catch (error) {
                console.error("Erro ao ler produtos:", error);
            }
        }
        fetchProdutos();
    }, []);

    return (
        <div>
            <ul>
                {produtos.map((p) => (
                    <li key={p.id} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                        <div> {p.id} </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                            <div>
                                <img src={p.imagem} alt={p.nome} style={{ width: "40px", height: "40px" }} />
                            </div>                        
                            <div>
                                {p.nome} - {p.valor}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}
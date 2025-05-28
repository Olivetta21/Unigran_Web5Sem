import { createContext, useEffect, useState } from "react";
import { lerProdutos } from "../Fetchers/produto";

export const DataContext = createContext();

export default function DataProvider({ children }) {
    const [produtos, setProdutos] = useState([]);
    const [carrinhoVisible, setCarrinhoVisible] = useState(false);

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
    }, [])

    return (
        <DataContext.Provider value={{ produtos, setProdutos, carrinhoVisible, setCarrinhoVisible }}>
            {children}
        </DataContext.Provider>
    );
}
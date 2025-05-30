import { createContext, useEffect, useState } from "react";
import { lerProdutos } from "../Fetchers/produto";
import { useToast } from "./ToastNotifContext";

export const DataContext = createContext();

export default function DataProvider({ children }) {
    const [produtos, setProdutos] = useState([]);
    const [carrinhoVisible, setCarrinhoVisible] = useState(false);
    const { addToast } = useToast();

    async function carregarProdutos() {
        addToast("Carregando produtos...", "info");
        try {
            const produtosLidos = await lerProdutos();
            setProdutos(produtosLidos);
            addToast("Produtos carregados com sucesso!", "success");
        } catch (error) {
            addToast("Erro ao carregar produtos: " + error.message, "error");
        }
    }

    useEffect(() => {
        carregarProdutos();
    }, [])


    return (
        <DataContext.Provider value={{ produtos, setProdutos, carregarProdutos, carrinhoVisible, setCarrinhoVisible }}>
            {children}
        </DataContext.Provider>
    );
}
import { Route, Routes } from "react-router";
import Login from "../Login/Login";
import Cadastro from "../Login/Cadastro";
import Inicio from "../Loja/Inicio";
import PrivateRoute from "../Auth/PrivateRoute";
import ProdutoCrud from "../CRUD/ProdutoCrud";
import CadastrarProduto from "../CRUD/Produto/CadastrarProduto";
import ListarProdutos from "../CRUD/Produto/ListarProdutos";

export default function Routers() {
    return ( 
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/inicio" element={<PrivateRoute><Inicio /></PrivateRoute>} />
            <Route path="/produtocrud" element={<PrivateRoute><ProdutoCrud /></PrivateRoute>} >
                <Route path="/produtocrud/cadastrar" element={<CadastrarProduto />} />
                <Route path="/produtocrud/visualizar" element={<ListarProdutos />} />
            </Route>
        </Routes>
    )
}
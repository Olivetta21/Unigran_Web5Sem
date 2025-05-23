import { Route, Routes } from "react-router";
import Login from "../Login/Login";
import Cadastro from "../Login/Cadastro";
import Inicio from "../Loja/Inicio";
import PrivateRoute from "../Auth/PrivateRoute";

export default function Routers() {
    return ( 
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/inicio" element={<PrivateRoute><Inicio /></PrivateRoute>} />
        </Routes>
    )
}

import './App.css';
import Login from './pages/login/page';
import React from 'react';
import CadastroProfissional from './pages/cadastro_profissional/page';
import PrincipalPage from './pages/principal_page/page';
import CadastroPaciente from './pages/cadastro_paciente/page';
import RegistroAtividades from './pages/registro_atividades/page';
import TelaPacientes from './pages/tela_pacientes/page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<CadastroProfissional />} path="/cadastro_profissional" />
          <Route element={<PrincipalPage />} index path="/home" />
          <Route element={<CadastroPaciente />} path="/cadastro_paciente" />
          <Route element={<RegistroAtividades />} path="/atividades" />
          <Route element={<TelaPacientes />} path="/pacientes" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

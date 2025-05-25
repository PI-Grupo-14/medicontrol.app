import './App.css';
import Login from './pages/login/page';
import CadastroProfissional from './pages/cadastro_profissional/page';
import PrincipalPage from './pages/principal_page/page';
import CadastroPaciente from './pages/cadastro_paciente/page';
import RegistroAtividades from './pages/registro_atividades/page';
import TelaPacientes from './pages/tela_pacientes/page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from "react-dom/client";

// Utilizado para manter o contexto do profissional logado
export const ProfissionalContext = React.createContext(null);

export const API_URL = import.meta.env.VITE_BACKEND_DOMAIN || 'https://medicontrol-backend.onrender.com';

export default function App() {
  // Recupera o profissional do localStorage ao carregar a aplicação
  const [profissional, setProfissional] = React.useState(() => {
    const storedProfissional = localStorage.getItem('profissional');
    return storedProfissional ? JSON.parse(storedProfissional) : null;
  });

  // Atualiza o localStorage sempre que o profissional mudar
  React.useEffect(() => {
    if (profissional) {
      localStorage.setItem('profissional', JSON.stringify(profissional));
    } else {
      localStorage.removeItem('profissional');
    }
  }, [profissional]);

  return (
    <ProfissionalContext.Provider value={{ profissional, setProfissional }}>
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
    </ProfissionalContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

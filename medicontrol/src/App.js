import logo from './logo.svg';
import './App.css';
import Login  from './pages/login/page';
import React from 'react';
import CadastroProfissional from './pages/cadastro_profissional/page';
import PrincipalPage from './pages/principal_page/page';
import CadastroPaciente from './pages/cadastro_paciente/page';
import RegistroAtividades from './pages/registro_atividades/page';
import TelaPacientes from './pages/tela_pacientes/page';

function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
     {/* <CadastroProfissional/>*/}
     {/*<PrincipalPage/>*/}
     {/*<CadastroPaciente/>*/}
     {/*<RegistroAtividades/>*/}
     <TelaPacientes/>
      
    </div>
  );
}

export default App;

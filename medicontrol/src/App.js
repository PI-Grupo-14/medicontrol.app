import logo from './logo.svg';
import './App.css';
import Login  from './pages/login/page';
import React from 'react';
import CadastroProfissional from './pages/cadastro_profissional/page';
import PrincipalPage from './pages/principal_page/page';

function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
     {/* <CadastroProfissional/>*/}
     <PrincipalPage/>
      
    </div>
  );
}

export default App;

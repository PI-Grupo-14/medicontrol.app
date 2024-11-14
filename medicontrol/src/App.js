import logo from './logo.svg';
import './App.css';
import Login  from './pages/login/page';
import React from 'react';
import Cadastro_Profissional from './pages/cadastro_profissional/page';
import Principal_Page from './pages/principal_page/page';

function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
     {/* <Cadastro_Profissional/>*/}
     <Principal_Page/>
      
    </div>
  );
}

export default App;

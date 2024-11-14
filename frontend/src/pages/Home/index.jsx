
import { useState } from 'react';
import './style.css'
import Logo from '../../assets/logo.png'
import Popup from '../Home/pop-up/popup.jsx';
function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className='container'>
      <header><a id="about">Sobre</a></header>
      <form id='entrar'>
        <img src={Logo} alt="Logo app medicontrol" width={200} height={200} />
        <h5>Entrar</h5>
        <input placeholder="Insira o endereço de e-mail" type='email' />
        <h5>Senha</h5>
        <input placeholder="Insira sua senha" type='password' />
        <p></p>
        <button name="Entrar" type='button'>Entrar</button>
        <h6>Ainda não tem conta?</h6>
        <a onClick={openPopup}>Faça seu cadastro</a>
      </form>
      {isPopupOpen && <Popup onClose={closePopup} />}
      <footer></footer>
    </div>
  );
}
export default Home

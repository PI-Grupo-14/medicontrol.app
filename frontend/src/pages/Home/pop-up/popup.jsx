import PropTypes from 'prop-types'; // Importa o PropTypes
import './popup.css';
import Logo from '../../../assets/logo.png'

const Popup = ({ onClose }) => {
  return (

    <div className="popup-overlay">
    <div className="popup">
      <img src={Logo} alt="Logo Medicontrol" width={100} height={100} />
        <form id='popup'>
        <h5>Nome</h5>
        <input placeholder="Insira seu nome completo" type="text" />
        <h5>Data de nascimento</h5>
        <input placeholder="Insira sua data de nascimento" type="date" />
        <h5>Telefone</h5>
        <input
          pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
          placeholder="(XX) XXXXX-XXXX"
          type="tel"
        />
        <h5>E-mail</h5>
        <input placeholder="Insira seu e-mail" type="email" />
        <h5>Profissão</h5>
        <input placeholder="Insira sua profissão" type="text" />
        <h5>N° de Registro</h5>
        <input placeholder="Insira o seu número de registro" type="number" />
        <h5>Crie uma senha</h5>
        <input placeholder="Digite sua senha" type="password" />
        <h5>Repita a senha</h5>
        <input placeholder="Repita a senha" type="password" />
      </form>
      
      {/* Novo contêiner para os botões */}
      <div className="popup-buttons">
        <button id="cancel" onClick={onClose}>Cancelar</button>
        <button id="confirm" type="submit">Confirmar</button>
      </div>
    </div>
  </div>
  );
};

// Validação das props
Popup.propTypes = {
  message: PropTypes.string.isRequired, // A propriedade message deve ser uma string e é obrigatória
  onClose: PropTypes.func.isRequired,    // A propriedade onClose deve ser uma função e é obrigatória
};

export default Popup;

// Importa o arquivo de estilos CSS para o cabeçalho
import "./header.css";

// Importa a imagem do logo
import logo from "../../assets/logo.png";

// Define o componente Header
const Header = () => {
  return (
    // Estrutura do cabeçalho
    <header>
      <div className="container">
        {/* Imagem do logo */}
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};

// Exporta o componente Header para uso em outros arquivos
export default Header;

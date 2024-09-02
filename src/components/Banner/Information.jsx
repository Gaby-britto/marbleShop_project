// Importa o arquivo de estilos CSS para o componente de informações
import "./information.css";

// Componente Information que recebe `title` e `subTitle` como props
const Information = ({ title, subTitle }) => {
  return (
    // Container principal para as informações
    <div className="containerInformation">
      {/* Título principal */}
      <h1>{title}</h1>
      
      {/* Subtítulo */}
      <h2>{subTitle}</h2>
    </div>
  );
};

// Exporta o componente Information para ser utilizado em outros arquivos
export default Information;

// Importa o arquivo de estilos CSS para os cards
import "./cards.css";

// Componente de Cards que recebe `descricao` e `img` como props
const Cards = ({ description, img }) => {
  return (
    // Container principal dos cards
    <div className="containerCards">
      <div className="cards-container">
          <div className="card">
            {/* Imagem do card */}
            <img src={img} alt="Card Image" className="card-img" />
            {/* Conteúdo do card */}
            <div className="card-content">
              <p className="card-text">{description}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

// Exporta o componente Cards para ser utilizado em outros arquivos
export default Cards;

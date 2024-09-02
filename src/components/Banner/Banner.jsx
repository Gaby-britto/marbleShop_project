// Importa o arquivo de estilos CSS para o banner
import "./banner.css";

// Importa a imagem do banner
import banner from "../../assets/banner.png";

// Define o componente Banner
const Banner = () => {
  return (
    // Container principal do banner
    <div className="ContainerBanner">
      {/* Imagem do banner */}
      <img src={banner} alt="Banner" />
      
      {/* Texto sobreposto ao banner */}
      <div className="divText">
        {/* Título do banner */}
        <h1>
          Elegance and Durability 
          in <br />
          Every Stone
        </h1>
        {/* Parágrafo de descrição do banner */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut unde qui
          atque modi, ratione est, vero voluptatum magni sint omnis ipsa
          mollitia incidunt, cumque aliquid necessitatibus nesciunt a
          consectetur amet.
        </p>
      </div>
    </div>
  );
};

// Exporta o componente Banner para uso em outros arquivos
export default Banner;

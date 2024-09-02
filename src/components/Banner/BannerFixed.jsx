// Importa o arquivo CSS para estilização do banner fixo
import "./bannerFixed.css";

const BannerFixed = () => {
    return (
        <div className="fixed">
          {/* Container para o texto sobre o banner */}
          <div className="textFixed">
            {/* Título do banner */}
            <h1>TELL US ABOUT YOUR PROJECT</h1>
            {/* Subtítulo do banner */}
            <h2>We will be happy to help!</h2>
          </div>
        </div>
    );
};

// Exporta o componente BannerFixed para uso em outros arquivos
export default BannerFixed;

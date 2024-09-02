// Importa hooks e estilos necessários do React e do CSS
import { useState } from "react";
import "./App.css";

// Importa os componentes utilizados no aplicativo
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Information from "./components/Banner/Information";

// Importa as imagens usadas nos Cards
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import BannerFixed from "./components/Banner/bannerFixed";

// Componente principal do aplicativo
function App() {
  // Declara o estado `count`, que atualmente não está sendo utilizado
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Renderiza o cabeçalho do site */}
      <Header />

      {/* Renderiza o banner principal */}
      <Banner />

      {/* Renderiza uma seção de informações com título e subtítulo */}
      <Information
        title="PRESENTING OUR EXCLUSIVE MARBLE PRODUCTS"
        subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
      />

      {/* Renderiza uma grade de cards com imagens e descrições */}
      <div className="cardInfo">
        <Cards
          img={img1}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
        <Cards
          img={img2}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
        <Cards
          img={img3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
        <Cards
          img={img4}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
      </div>
      <div className="cardInfo">
        <Cards
          img={img5}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
        <Cards
          img={img6}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
        <Cards
          img={img7}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
        <Cards
          img={img8}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto nihil molestias suscipit, iure perspiciatis explicabo"
        />
      </div>

      {/* Renderiza um banner fixo */}
      <BannerFixed />

      {/* Renderiza uma segunda seção de informações com título e subtítulo */}
      <Information
        title="Transform Your Space with Our Exclusive Marble Pieces"
        subTitle=" - Contact Us Today! -"
      />

      {/* Renderiza o formulário de contato */}
      <Form />

      {/* Renderiza o rodapé do site */}
      <Footer />
    </>
  );
}

// Exporta o componente App como o ponto de entrada da aplicação
export default App;

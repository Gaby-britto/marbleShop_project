// Importa ícones de redes sociais da biblioteca react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Importa o arquivo de estilos CSS para o rodapé
import "./footer.css";

// Componente Footer
const Footer = () => {
  return (
    // Elemento de rodapé
    <footer className="footer">
      <div className="footer-content">
        {/* Texto de direitos autorais */}
        <p>&copy; {new Date().getFullYear()} Castelian.</p>
        
        {/* Container dos ícones de redes sociais */}
        <div className="social-icons">
          {/* Ícone do Facebook com link para a página oficial */}
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          
          {/* Ícone do Twitter com link para a página oficial */}
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          
          {/* Ícone do Instagram com link para a página oficial */}
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          
          {/* Ícone do LinkedIn com link para a página oficial */}
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Exporta o componente Footer para ser utilizado em outros arquivos
export default Footer;

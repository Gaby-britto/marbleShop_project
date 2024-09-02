// Importa o arquivo CSS para estilização do componente
import "./form.css";

// Importa o hook useState do React para gerenciar o estado do formulário
import { useState } from "react";

// Importa a imagem que será exibida no formulário
import contact from "../../assets/contact.png";

// Define o componente funcional Form
const Form = () => {
  // Define o estado inicial do formulário com campos nome, email e telefone vazios
  const initialForm = {
    nome: "",
    email: "",
    phone: "",
  };

  // Declara o estado formState para armazenar os valores dos campos do formulário
  // e a função setFormState para atualizar este estado
  const [formState, setFormState] = useState(initialForm);

  // Função para manipular a entrada de dados dos campos do formulário
  const handleInput = (event) => {
    const target = event.currentTarget;
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se algum campo está vazio
    if (
      formState.nome === "" || 
      formState.email === "" ||  
      formState.phone === ""     
    ) {
      // Exibe um alerta se algum campo estiver vazio
      alert("Preencha os campos!");
      return;
    }

    // Exibe os valores do formulário no console
    console.log("Name:", formState.nome, "/", "Email:", formState.email, "/", "Phone:", formState.phone);

    // Reseta o formulário para o estado inicial após o envio
    setFormState({ ...initialForm });
  };

  // Renderiza o componente do formulário
  return (
    <div className="containerForm">
      <div className="form-controll">
        {/* Exibe a imagem de contato */}
        <img src={contact} alt="Contact" className="imgForm" />
        {/* Formulário de entrada de dados */}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-control">
            {/* Campo de entrada para o nome */}
            <label htmlFor="nome">Name</label>
            <input
              maxLength="20"
              placeholder="Your Name"
              type="text"
              id="nome"
              name="nome"
              value={formState.nome}
              onChange={handleInput}
            />
            {/* Campo de entrada para o email */}
            <label htmlFor="email">Email</label>
            <input
              maxLength="20"
              placeholder="Your Email"
              type="text"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInput}
            />
            {/* Campo de entrada para o telefone */}
            <label htmlFor="phone">Phone</label>
            <input
              maxLength="11"
              placeholder="Your Phone"
              type="text"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleInput}
            />
          </div>
          {/* Botão de envio do formulário */}
          <div className="form-control">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Exporta o componente Form para ser utilizado em outros locais
export default Form;

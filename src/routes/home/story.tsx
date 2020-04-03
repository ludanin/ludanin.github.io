import React from "react";

import LocaleText from "components/locale_text/locale_text";

const HomeStory: React.FC = () => {
  return (
    <div className="content scrollable">
      {/* §1 Header */}
      <div className="header">
        Lukas Danin
      </div>

      {/* §1 About me */}
      <h1>
        <LocaleText
          en="About me"
          pt="Sobre mim"
        />
      </h1>
      <LocaleText
        en={
          `Hello! I'm Lukas Danin and I'm a Brazilian software developer
          currently based in Belém, state of Pará, Brazil (GMT -3).`
        }
        pt={
          `Olá! Me chamo Lukas Danin e sou um desenvolvedor de softwares
          brasileiro atualmente morando em Belém do Pará.`
        }
      />
      <br/>
      <br/>

      <LocaleText
        en={
          `I'm specialized in web-development (both front-end and back-end),
          additionally I'm also proficient with mobile technologies such
          as Flutter and React-Native.`
        }
        pt={
          `Sou especializado em desenvolvimento web (tanto front-end
          quanto back-end), além disso tenho proficiência em tecnologias
          mobile, como Flutter e React-Native.`
        }
      />
      <br/>
      <br/>

      {/* §1 How to navigate */}
      <h1>
        <LocaleText
          en="How to use this site"
          pt="Como usar este site"
        />
      </h1>
      <LocaleText
        en={[
          `You can change the current story/page by clicking on the book icon (`,
          <i className="mdi mdi-book-open-page-variant" key="HOME/en:1"/>,
          `) below. If you want to get a brief overview of my career I'd suggest
          you to select the story "Resume", however, if you have some
          time to spare, and want to know more about my recent works, feel
          free to read all the stories available here.`
        ]}
        pt={[
          `Você pode mudar a página/história atual ao clickar no ícone do livro (`,
          <i className="mdi mdi-book-open-page-variant" key="HOME/pt:1"/>,
          `) abaixo. Se estiver interessado em obter um breve resumo de minha carreira
          profissional eu sugiro que você selecione a história "Currículo",
          contudo, se estiver com um pouco de tempo livre, e deseja conhecer
          mais sobre meus últimos trabalhos, sinta-se livre para ler todas
          as outras histórias disponíveis aqui.`
        ]}
      />
    </div>
  );
};

export default HomeStory;

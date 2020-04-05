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

      {/* §2 Change current content */}
      <h2>
        <LocaleText
          en="How to change the current content"
          pt="Como mudar o conteúdo atual"
        />
      </h2>

      <div className="center">
        <video
          src="./videos/story_chooser.mp4"
          autoPlay={true}
          controls={true}
          loop={true}
          muted={true}
        />
      </div>

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
          `Você pode mudar a página/história atual ao clicar no ícone do livro (`,
          <i className="mdi mdi-book-open-page-variant" key="HOME/pt:1"/>,
          `) abaixo. Se estiver interessado em obter um breve resumo da minha carreira
          profissional eu sugiro que você selecione a história "Currículo",
          contudo, se estiver com um pouco de tempo livre, e deseja conhecer
          mais sobre meus últimos trabalhos, sinta-se livre para ler todas
          as outras histórias disponíveis aqui.`
        ]}
      />

      {/* §2 Switch pages */}
      <h2>
        <LocaleText
          en="How to switch pages of a story"
          pt="Como mudar as páginas de uma história"
        />
      </h2>

      <div className="center">
        <video
          src="./videos/turn_pages.mp4"
          autoPlay={true}
          controls={true}
          loop={true}
          muted={true}
          style={{ paddingRight: 2 }}
        />
      </div>

      <LocaleText
        en="Just click on the arrows close to the story chooser!"
        pt="Apenas clique nas setas perto do seletor de histórias!"
      />
    </div>
  );
};

export default HomeStory;

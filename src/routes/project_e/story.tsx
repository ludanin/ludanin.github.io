import React, { useState } from "react";

import LocaleText from "components/locale_text/locale_text";

// §0 Page 01
const page01 = {
  en(showMobile: boolean, toggleVideo: VoidFunction) { // §1 en
    return [
      (
        <div className="header" key="PROJECT_E/en:header">
          Project E
        </div>
      ),
      (
        <div className="notes" key="PROJECT_E/en:notes1">
          These are some footages of Project E, it’s good to mention that
          the true identity of the startup and some functionalities of the
          application are being omitted. For example, things like branding,
          administrative pages, as well as features other than energy measurement
          are not yet being shown to a broader public.
          <br/><br/>
          If you're curious about this project, I'd suggest you to come here
          after a few months, I'll probably update this page as our progress
          and readiness for the public grows.
        </div>
      ),
      (
        <h1 key="PROJECT_E/en:video_title">
          Footage of Project E
        </h1>
      ),
      (
        <div className="center" key="PROJECT_E/en:videoweb">
          <video
            src={
              showMobile
                ? "./videos/project_e_mobile.mp4"
                : "./videos/project_e_web.mp4"
            }
            autoPlay={true} controls={true}
            loop={true} muted={true}
          />
        </div>
      ),
      (
        <div
          className="notes" key="PROJECT_E/en:toggle_video"
          style={{ backgroundColor: "transparent", flexDirection: "row" }}
        >
          <button
            onClick={toggleVideo}
            disabled={showMobile === false}
            style={{
              border: showMobile ? "1px solid var(--base90)" : undefined,
              borderTopLeftRadius: "var(--radius)",
              borderBottomLeftRadius: "var(--radius)",
              color: showMobile ? "var(--base90)" : "var(--base00)",
              backgroundColor: showMobile ? "var(--base00)" : "var(--base90)",
            }}
          >
            Web
          </button>
          <button
            onClick={toggleVideo}
            disabled={showMobile}
            style={{
              border: showMobile ? undefined : "1px solid var(--base90)",
              borderTopRightRadius: "var(--radius)",
              borderBottomRightRadius: "var(--radius)",
              color: showMobile ? "var(--base00)" : "var(--base90)",
              backgroundColor: showMobile ? "var(--base90)" : "var(--base00)",
            }}
          >
            Mobile
          </button>
        </div>
      ),
      (
        <div className="notes" key="PROJECT_E/en:sorry_only_pt">
          For the time being, Project E is only available in Brazilian Portuguese.
          Sorry for not being able to showcase you a English version of our
          product
        </div>
      ),
      `This is our web dashboard, presenting information about a user's
      household energy consumption.`,
      (
        <h2 key="PROJECT_E/pt:video_sub_title">
          What you're seeing
        </h2>
      ),
      (
        <ul key="PROJECT_E/en:ul1">
          <li>
            Peak consumption and where it happened.
          </li>
          <li>
            Always-On consumption, i.e. stuff that are always on (like fridges, etc.).
          </li>
          <li>
            Most used week-day, as well as the least used one.
          </li>
          <li>
            Most used period of the day, as well as the least used one.
          </li>
          <li>
            Select periods to analyze them, or even compare months to understand
            your consumption tendencies.
          </li>
        </ul>
      )
    ];
  },
  pt(showMobile: boolean, toggleVideo: VoidFunction) { // §1 pt
    return [
      (
        <div className="header" key="PROJECT_E/pt:header">
          Projeto E
        </div>
      ),
      (
        <div className="notes" key="PROJECT_E/pt:notes1">
          Estas são algumas filmagens do Projeto E, é bom lembrar que a
          verdadeira identidade da startup e algumas funcionalidades do
          sistema estão sendo omitidas. Por exemplo, a marca, páginas
          administrativas, e outras características além da mensuração de
          energia ainda não estão sendo divulgadas abertamente para um
          público maior.
          <br/><br/>
          Se você está curioso sobre este projeto, recomendo que volte aqui
          depois de alguns meses, provavelmente irei atualizar esta página
          de acordo com o crescimento de nosso progresso e prontidão para
          o público.
        </div>
      ),
      (
        <h1 key="PROJECT_E/pt:video_title">
          Filmagens do Projeto E
        </h1>
      ),
      (
        <div className="center" key="PROJECT_E/pt:videoweb">
          <video
            src={
              showMobile
                ? "./videos/project_e_mobile.mp4"
                : "./videos/project_e_web.mp4"
            }
            autoPlay={true} controls={true}
            loop={true} muted={true}
          />
        </div>
      ),
      (
        <div
          className="notes" key="PROJECT_E/en:toggle_video"
          style={{ backgroundColor: "transparent", flexDirection: "row" }}
        >
          <button
            onClick={toggleVideo}
            disabled={showMobile === false}
            style={{
              border: showMobile ? "1px solid var(--base90)" : undefined,
              borderTopLeftRadius: "var(--radius)",
              borderBottomLeftRadius: "var(--radius)",
              color: showMobile ? "var(--base90)" : "var(--base00)",
              backgroundColor: showMobile ? "var(--base00)" : "var(--base90)",
            }}
          >
            Web
          </button>
          <button
            onClick={toggleVideo}
            disabled={showMobile}
            style={{
              border: showMobile ? undefined : "1px solid var(--base90)",
              borderTopRightRadius: "var(--radius)",
              borderBottomRightRadius: "var(--radius)",
              color: showMobile ? "var(--base00)" : "var(--base90)",
              backgroundColor: showMobile ? "var(--base90)" : "var(--base00)",
            }}
          >
            Mobile
          </button>
        </div>
      ),
      `Esta é nossa dashboard web, atualmente você está vendo a apresentação de informações do consumo de energia da residência de um usuário.`,
      (
        <h2 key="PROJECT_E/pt:video_sub_title">
          O que você está vendo
        </h2>
      ),
      (
        <ul key="PROJECT_E/pt:ul1">
          <li>
            Pico de consumo e quando isso ocorreu.
          </li>
          <li>
            Consumo sempre ligado, isto é: aparelhos que permanecem ligados
            24/7 (como geladeiras, etc.).
          </li>
          <li>
            O dia da semana mais utilizado, assim como o menos utilizado.
          </li>
          <li>
            O período do dia mais utilizado, assim como o menos utilizado.
          </li>
          <li>
            Seleções de períodos para análises, usuários podem até mesmo
            compararem seus consumos atuais com períodos anteriores para
            melhor entender suas tendências.
          </li>
        </ul>
      )
    ];
  },
};

// §0
const ProjectEStory: React.FC = () => {
  const [ showMobile, setShowMobile ] = useState<boolean>(false);

  const toggleVideo = () => {
    setShowMobile(!showMobile);
  };

  return (
    <div className="content scrollable">
      <LocaleText
        en={page01.en(showMobile, toggleVideo)}
        pt={page01.pt(showMobile, toggleVideo)}
      />
    </div>
  );
};

export default ProjectEStory;

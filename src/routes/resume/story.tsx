import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";
import LocaleText from "components/locale_text/locale_text";
import { RPropsComplete } from "reducers";
import { Stories } from "reducers/state/stories";

const ResumeStory: React.FC<RPropsComplete> = ({
  Redux, STRY_REPLACE,
}) => {

  const changeStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = (e.currentTarget.dataset.target as Stories) ?? "/home";
    STRY_REPLACE(target);
  };

  return (
    <div className="content scrollable">
      {/* §1 Header */}
      <div className="header">
        <LocaleText
          en={
            Redux.orientation === "landscape"
            ? "Recent Works"
            : "Resume"
          }
          pt={
            Redux.orientation === "landscape"
            ? "Trabalhos Recentes"
            : "Currículo"
          }
        />
      </div>

      <div className="notes">
        <LocaleText
          en={`
            Tip: ${Redux.orientation === "landscape" ? "Click" : "Touch"}
            on the section title to see more details about the selected work
          `}
          pt={`
            Dica: ${Redux.orientation === "landscape" ? "Clique" : "Toque"}
            nos títulos das seções para ver mais detalhes sobre o trabalho
            selecionado
          `}
        />
        <LocaleText
          en={(
            <span>
              {Redux.orientation === "landscape" ? "Click " : "Touch "}
              <a href="https://ludanin.github.io/docs/assets/cv.pdf">
                here
              </a>
              {" "}for the .PDF version of this page.
            </span>
          )}
          pt={(
            <span>
              {Redux.orientation === "landscape" ? "Clique " : "Toque "}
              <a href="https://ludanin.github.io/docs/assets/cv.pdf">
                aqui
              </a>
              {" "}para a versão .PDF desta página.
            </span>
          )}
        />
      </div>

      {/* §1 Project E */}
      <h1>
        <a
          href="#project_e"
          onClick={changeStory}
          data-target={"/project_e" as Stories}
        >
          <LocaleText
            en="Project E"
            pt="Projeto E"
          />
        </a>

        <span className="subtitle">
          2019-2020
        </span>
      </h1>

      <ul>
        <li>
          <LocaleText
            en="
              Project that aims to digitalize how society sees energy
              consumption, reeducating our habits by helping people
              become aware of any unsustainable behavior.
            "
            pt="
              Projeto que almeja digitalizar o modo que a sociedade
              vê o seu consumo de energia, reeducando nossos hábitos
              ao ajudar as pessoas a se conscientizarem de qualquer
              comportamento não sustentável.
            "
          />
        </li>

        <li>
          <LocaleText
            en={`
              Due to a NDA further details of the Start-up cannot be
              described/discussed. You can, however, check some screens & videos of
              the project by clicking${" "}
            `}
            pt={`
              "Devido a um acordo de confidencialidade, detalhes adicionais
              sobre a Start-Up ainda não podem ser discutidos. Você
              pode, contudo, checar algumas fotos & vídeos do projeto
              ao clicar${" "}
            `}
          />

          <LocaleText
            en={(
              <a href="#project_e" onClick={changeStory} data-target="/project_e">
                here
              </a>
            )}
            pt={(
              <a href="#project_e" onClick={changeStory} data-target="/project_e">
                aqui
              </a>
            )}
          />

          .
          <br/>

          <LocaleText
            en="
              The content available on this link is taken from
              the final stage of our MVP.
            "
            pt="
              O conteúdo disponível neste link foi tirado do estágio
              final de nosso MVP.
            "
          />
        </li>

        <li>
          <LocaleText
            en="
              I did the entire design, back-end, and front-end (web & mobile)
              aspects of the MVP.
            "
            pt="
              Fiz todo o design, back-end e front-end (web & mobile) do MVP.
            "
          />
        </li>
      </ul>

      {/* §1 bGado */}
      <h1>
        <a
          href="#bgado"
          onClick={changeStory}
          data-target={"/bgado" as Stories}
        >
          bGado
        </a>
        <span className="subtitle">
          2019
        </span>
      </h1>
      <ul>
        <li>
          <LocaleText
            en="
              Livestock Management Software built with modern tech, tailored
              for the Brazilian market.
            "
            pt="
              Software de controle de pecuária construído com tecnologia
              moderna, lapidado para o mercado brasileiro.
            "
          />
        </li>
        <li>
          <LocaleText
            en="
              Can work offline with the help of a Raspberry Pi installed near
              the client’s ranch, synchronizing data with the cloud network
              whenever possible.
            "
            pt="
              Pode trabalhar off-line com a ajuda de computadores ARM
              instalados próximos dos ranchos das fazendas, sincronizando
              informações entre a nuvem cloud e instâncias locais assim
              quando possível.
            "
          />
        </li>
        <li>
          <LocaleText
            en="
              Grants a detailed overview of the animals, expenses, personnel,
              stock—food, medicines, etc.
            "
            pt="
              Disponibiliza uma visão geral detalhada dos animais, despesas,
              mão de obra,  ração, medicinas, etc.
            "
          />
        </li>
        <li className="bullet">
          <LocaleText
            en="Front-End (mobile): Flutter, using the BLOC architecture."
            pt="Front-End (mobile): Flutter, utilizando a arquitetura BLOC"
          />
        </li>
        <li className="bullet">
          Front-End (web): React (TypeScript) + Redux & Redux-Saga.
        </li>
        <li className="bullet">
          <LocaleText
            en="Back-End: Coded in Go, uses PostgreSQL as DB."
            pt="Back-End: Programado em Go, utilizando o banco de dados PostgreSQL."
          />
        </li>
      </ul>

      {/* §1 Marborges */}
      <h1>
        <a
          href="#marborges"
          onClick={changeStory}
          data-target={"/marborges" as Stories}
        >
          <LocaleText en="For " pt="Para a "/>
          Marborges
        </a>
        <span className="subtitle">
          2017-2018
        </span>
      </h1>

      <div className="notes">
        <LocaleText
          en="
            I did a series of works for Marborges (as a freelancer) that
            digitilized traditional workflows, these works also allowed
            them to acquire reports and automate routines (such as generating
            spreadsheets, etc.) in a faster way.
          "
          pt="
            Realizei uma série de trabalhos para a Marborges (como freelancer)
            que digitalizaram métodos de trabalhos tradicionais, e que também
            permitiram os mesmos a adquirirem relatórios e automatizar rotinas
            (como gerar planilhas, etc.) de um modo bem mais rápido.
          "
        />
      </div>

      <ul>
        <li>
          <LocaleText
            en="
              The company worked arduously transcribing and
              analyzing data harvest through traditional methods, e.g.
              ink and paper. I digitalized this process, reducing paper
              usage by more than ten thousand sheets every month.
            "
            pt="
              A empresa utilizava bastante esforços para transcrever e
              analisar informações coletadas por métodos tradicionais,
              ex.: caneta e papel. Digitalizei este processo por meio
              do desenvolvimento de softwares, reduzindo a quantidade de
              papel utilizada pela empresa em mais de dez mil folhas mensais.
            "
          />
        </li>
        <li>
          <LocaleText
            en="
              The project synchronizes data from around 50 handheld
              devices. It’s optimized to negate conflicts, such as
              repeated information.
            "
            pt="
              O projeto sincroniza informações de cerca de 50 computadores
              de mão. Além de ser otimizado para negar conflitos, como
              por exemplo, informações repetidas.
            "
          />
        </li>
        <li className="bullet">
          Front-end (web): React + MaterializeCSS.
        </li>
        <li className="bullet">
          <LocaleText
            en="Front-End (mobile): React-Native with Flow + Redux."
            pt="Front-End (mobile): React-Native com Flow + Redux."
            animate={false}
          />
        </li>
        <li className="bullet">
          Back-end: Node.js
        </li>
      </ul>
      <ul/>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps, actions)(ResumeStory);

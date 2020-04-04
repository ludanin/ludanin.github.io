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

      <LocaleText
        en={`
        `}
        pt={`
        `}
      />

      {/* §1 bGado */}
      <h1>
        <a
          href="#bgado"
          onClick={changeStory}
          data-target={"/bgado" as Stories}
        >
          bGado
        </a>
      </h1>

      {/* §1 Marborges */}
      <h1>
        <a
          href="#marborges"
          onClick={changeStory}
          data-target={"/marborges" as Stories}
        >
          Marborges
        </a>
      </h1>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps, actions)(ResumeStory);

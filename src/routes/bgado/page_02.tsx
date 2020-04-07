import React from "react";

import LocaleText from "components/locale_text/locale_text";

const BGado02: React.FC = () => {
  return (
    <div className="content scrollable">
      <LocaleText
        en={(
          <span>
            <div className="header">
              bGado - Technical Details
            </div>

            <div className="center">
              <video
                src="./videos/bgado_dashboard.mp4"
                autoPlay={true}
                controls={true}
                muted={true}
                loop={true}
              />
            </div>

            <div className="notes">
              The video above gives a brief example of how the dashboard
              looks like and works (localized in Brazilian Portuguese)
            </div>

            <h1>
              Front-End
            </h1>
            <span>
              The web front-end is built with React + TypeScript and Redux
              + Redux-Saga, which fetches information from the back-end coded
              in Go and powered by PostgreSQL.
            </span>
            <br/><br/>

            <h1>
              Back-End
            </h1>
            <span>
              The back-end has algorithms to synchronize information between
              instances (local computers on farms and the main cloud server),
              and is engineered using a multi-tenant approach.
            </span>
            <br/><br/>

            <span>
              The mobile apps were done with Flutter (a legacy option with
              React-Native was developed, but not maintained anymore).
            </span>
          </span>
        )}
        pt={(
          <span>
            <div className="header">
              bGado - Detalhes Técnicos
            </div>

            <div className="center">
              <video
                src="./videos/bgado_dashboard.mp4"
                autoPlay={true}
                controls={true}
                muted={true}
                loop={true}
              />
            </div>

            <div className="notes">
              O vídeo acima demonstra, brevemente, como a Dashboard funciona
            </div>

            <h1>
              Front-End
            </h1>
            <span>
              O front-end web foi desenvolvido com o uso de React e TypeScript,
              que obtem informações do back-end programado em Go e alimentado
              de um DB PostgreSQL.
            </span>
            <br/><br/>

            <h1>
              Back-End
            </h1>
            <span>
              O back-end possuí algoritmos que sincronizam informações entre
              instâncias (computadores locais em fazendas com o servidor
              cloud), e foi engenhado utilizando a aproximação multi-tenant.
            </span>
            <br/><br/>

            <span>
              Os aplicativos mobile foram feitos com o Flutter (uma opção
              legado desenvolvida em React-Native foi construída, mas não
              é mais mantida atualmente).
            </span>
          </span>
        )}
      />
    </div>
  );
};

export default BGado02;

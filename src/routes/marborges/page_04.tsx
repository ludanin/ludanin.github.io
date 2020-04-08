import React from "react";

import LocaleText from "components/locale_text/locale_text";

const Marborges04: React.FC = () => {
  return (
    <div className="content scrollable">
      <LocaleText
        en={( // §0 English
          <span>
            <div className="header">
              The Result
            </div>

            <h1>
              Saving Resources
            </h1>
            <span>
              Today, it’s easily visible that the biggest saving the system
              provided for Marborges is time. It took weeks for the supervising
              fleet to properly estimate the amount of palms harvested by
              its handworkers, nowadays this process happens as information
              is fed upon the system.
              <br/><br/>
              Paper usage, as mentioned before, was greatly reduced after
              the implantation of the system. And Along with papers, conflicts
              and repetitions were also eliminated—so did the amount of
              time needed to transcribe handwriting from papers into a
              digital medium.
            </span>
            <h1>
              Future Plans
            </h1>
            <span>
              Today, we are discussing of other ideas to implement in
              Marborges, such as GPS fleet-tracking and even more intelligent
              data collection with the aid of pictures and videos.
            </span>
          </span>
        )}
        pt={( // §0 Portuguese
          <span>
            <div className="header">
              O Resultado
            </div>

            <h1>
              Economizando Recursos
            </h1>
            <span>
              Hoje é visível que a maior economia que o sistema garantiu
              para a Marborges é a economia de tempo. Tomavam-se semanas
              para as equipes de gerenciamento para propriamente estimar
              a quantidade de palmas colhidas pelos seus trabalhadores
              braçais, hoje em dia este processo ocorre de acordo com o
              fluxo de informações que chega no sistema.
              <br/><br/>
              O uso de papel, como dito anteriormente, foi grandemente
              reduzido após a implementação do sistema. E, junto com o
              uso de papel, os conflitos e repetições foram também
              eliminados—assim como o tempo necessário para transcrever
              as informações em papel digitalmente.
            </span>
            <h1>
              Planos Futuros
            </h1>
            <span>
              Atualmente estamos discutindo outras ideias para implementar
              na Marborges, como o tracking via GPS de funcionários e até
              mesmo sistemas de coleta de daos mais inteligentes (com o
              auxilio de fotos e vídeos).
            </span>
          </span>
        )}
      />
    </div>
  );
};

export default Marborges04;

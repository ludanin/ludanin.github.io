import React from "react";
import { useDispatch } from "react-redux";

import { STRY_PAGE_TURN } from "actions";
import LocaleText from "components/locale_text/locale_text";

const BGado01: React.FC = () => {
  const dispatch = useDispatch();
  const nextPage = () => {
    dispatch(STRY_PAGE_TURN(true));
  };

  return (
    <div className="content scrollable">
      <LocaleText
        en={(
          <span>
            <div className="header">
              bGado
            </div>

            <div className="notes">
              <span>
                Click {" "}
                <a
                  href="#bgado/2"
                  onClick={nextPage}
                >
                  here
                </a>
                {" "} to see footage of this project (goes to page 2).
              </span>
            </div>

            <h1>
              What is it?
            </h1>
            <span>
              bGado is a smart ERP for livestock control built to satisfy
              the needs
              of special clients.
            </span>
            <br/><br/>

            <h1>
              Why?
            </h1>
            <span>
              Understanding that most farms in Brazil lack reliable internet
              connection or stable GSM coverage, it’s easy to see why software
              such as bGado is desired in these regions.
            </span>
            <br/><br/>

            <h1>
              How?
            </h1>
            <span>
              bGado operates with and without an internet connection (through
              the aid of a ARM computer installed at the client’s farm).
            </span>
            <br/><br/>
            <span>
              To use it, clients need only to feed the system with information
              while they manage their livestock, i.e. moving cattle from one
              place to another, weighing animals, etc. This step is done by
              the use of a mobile App, with a very intuitive and easy to use
              interface, and the data is automatically synchronized with our
              servers (or with the local computer if the client is offline).
            </span>
            <br/><br/>

            <h2>
              Continuous synchronization
            </h2>
            <span>
              After this information is fed to bGado, the dashboard provides
              intelligent reports based on the data gathered.
            </span>
            <br/><br/>

            <span>
              bGado is a personal project I did for a client, and not yet
              released on market; currently the system only supports fattening
              farms but support for other types of farms is already planned.
            </span>
          </span>
        )}
        pt={(
          <span>
            <div className="header">
              bGado
            </div>

            <div className="notes">
              <span>
                Clique {" "}
                <a
                  href="#bgado/2"
                  onClick={nextPage}
                >
                  aqui
                </a>
                {" "} para ver filmagens deste projeto (vai para a página
                n. 2).
              </span>
            </div>

            <h1>
              O que é?
            </h1>
            <span>
              bGado é um ERP para a pecuária construído para satisfazer as
              necessidades de clientes especiais.
            </span>
            <br/><br/>

            <h1>
              Por Que?
            </h1>
            <span>
              Entendendo que a maioria das fazendas no Brasil estão
              desprovidas de conexões estáveis à internet, ou sem cobertura
              GSM, é fácil entender porque softwares como o bGado são
              desejados nestas regiões.
            </span>
            <br/><br/>

            <h1>
              Como?
            </h1>
            <span>
              bGado opera tanto online quanto off-line (com a ajuda de um
              computador ARM instalado na fazenda do cliente).
            </span>
            <br/><br/>

            <span>
              Para utilizá-lo, os clientes precisam apenas prover o sistema
              com informações enquanto os mesmos manejam seu rebanho, ex.:
              mover gado de um rotacionário para o outro, pesagem de animais,
              etc. A coleta de dados é feita em um App Mobile, que possuí
              uma interface intuitiva e de fácil uso, e sincronizada automaticamente
              com um servidor (ou computador local, caso o cliente esteja
              operando off-line).
            </span>
            <br/><br/>

            <h2>
              Sincronização Contínua
            </h2>
            <span>
              Após a coleta de dados, a Dashboard bGado disponibiliza para
              os nossos clientes relatórios inteligentes baseados na informação
              colhida.
            </span>
            <br/><br/>

            <span>
              bGado é um projeto pessoal que eu realizei para um cliente,
              e ainda não está publicamente disponível no mercado; atualmente
              o sistema apenas agrega fazendas de engorda (mas suporte a
              outros tipos de fazendas já está planejado).
            </span>
          </span>
        )}
      />
    </div>
  );
};

export default BGado01;

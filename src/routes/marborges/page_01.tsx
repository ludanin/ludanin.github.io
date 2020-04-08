import React from "react";

import LocaleText from "components/locale_text/locale_text";

const Marborges01: React.FC = () => {
  return (
    <div className="content scrollable">
      <LocaleText
        en={( // §0 English
          <span>
            <div className="header">
              Marborges
            </div>

            {/* §1 Introduction */}
            <div className="notes">
              At Marborges, I had the opportunity to develop applications
              that reduced paper usage and improved their workflow.
            </div>

            <h1>
              Who are them?
            </h1>
            <span>
              Marborges is an esteemed agribusiness company located at the
              north of Brazil, being responsible for innumerous researches
              and investments on the sector. Its main product is the refined
              palm oil, which is the world’s most consumed vegetal oil.
            </span>
            <br/><br/>
            <div
              className="notes"
              style={{
                backgroundColor: "var(--base10)",
                borderLeft: "3px solid var(--primary50)",
                borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
              }}
            >
              “Without a doubt, Marborges [is the company that] contributes
              most to techno-scientific, operational, and productive advancements
              on the [agribusiness] sector. There is an engagement of all
              collaborators on the improvement process.”
            </div>
            <span style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}>
              Affirms researcher Rui Gomes¹ from EMBRAPA²
            </span>

            {/* §1 Problem */}
            <h1>
              The Problem
            </h1>
            <span>
              Marborges takes duties such as sustainability and ecologic
              responsibilities very seriously, and saw that one of the
              required steps to maintain this positive conduct towards
              the environment was the reduction of paper usage throughout
              its activities.
            </span>
            <br/><br/>
            <span>
              At 2017, as a freelancer, I was contracted to develop an
              application targeting to solve this problem.
            </span>
            <br/><br/>

            <h1>
              Notes
            </h1>
            <div className="notes">
              <span>
                ¹ Quote taken from the company website, {" "}
                <a href="http://www.marborges.com/noticias/capital-humano-o-nos-que-move-a-marborges-no-para/">
                  click here to visit it
                </a>
              </span>
              <br/>
              <span>
                ² EMBRAPA is the Brazilian Agricultural Research Corporation,
                here's their {" "}
                <a href="https://en.wikipedia.org/wiki/Brazilian_Agricultural_Research_Corporation">
                  Wikipedia article
                </a>
                {" "}if you're interested;
              </span>
            </div>
          </span>
        )}
        pt={( // §0 Portuguese
          <span>
            <div className="header">
              Marborges
            </div>

            {/* §1 Introduction */}
            <div className="notes">
              Na Marborges eu tive a oportunidade de desenvolver aplicações
              que reduziram o uso de papel na empresa e que apresentaram
              uma melhora no fluxo de trabalho dos mesmos.
            </div>

            <h1>
              Quem são eles
            </h1>
            <span>
              A Marborges é uma empresa de agronegócios bem prestigiada
              localizada no norte do Brasil, responsável por inúmeras pesquisas
              e investimentos no setor. Seu principal produto é o óleo de
              palma refinado, cujo o mesmo é o óleo vegetal mais consumido
              do mundo.
            </span>
            <br/><br/>
            <div
              className="notes"
              style={{
                backgroundColor: "var(--base10)",
                borderLeft: "3px solid var(--primary50)",
                borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
              }}
            >
              “Sem dúvida, a Marborges é a que mais contribui para avanços
              científicos-tecnológicos, operacionais e produtivos no setor.
              Há um engajamento de todos os colaboradores no processo de
              aperfeiçoamento”
            </div>
            <span style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}>
              Afirma o pesquisador Rui Gomes¹ da EMBRAPA
            </span>

            {/* §1 Problem */}
            <h1>
              O Problema
            </h1>
            <span>
              A Marborges cumpre seus deveres como sustentabilidade e
              responsabilidade ecológica com seriedade, e percebe que um
              dos passos requeridos para manter esta boa conduta em prol
              do meio ambiente é a redução de papel em suas atividades.
            </span>
            <br/><br/>
            <span>
              Em 2017, como um freelancer, eu fui contratado para desenvolver
              uma aplicação para resolver este problema.
            </span>
            <br/><br/>

            <h1>
              Notas
            </h1>
            <div className="notes">
              <span>
                ¹ Citação retirada do site da empresa, {" "}
                <a href="http://www.marborges.com/noticias/capital-humano-o-nos-que-move-a-marborges-no-para/">
                  clique aqui para visita-lo
                </a>
              </span>
            </div>
          </span>
        )}
      />
    </div>
  );
};

export default Marborges01;

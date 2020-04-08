import React from "react";

import LocaleText from "components/locale_text/locale_text";

const Marborges02: React.FC = () => {
  return (
    <div className="content scrollable">
      <LocaleText
        en={( // §0 English
          <span>
            <div className="header">
              Details on the Problem
            </div>

            {/* §1 Why develop */}
            <span>
              Marborges relied on traditional methods to gather and analyze
              most of its  data. After the conclusion of our project, estimates
              of around ten thousand sheets of paper were saved every month.
            </span>

            <h1>
              Why develop a new application?
            </h1>
            <span>
              To understand why we chose to develop a new application from
              scratch, instead of using one available in the market, these
              topics might help you get a quick idea of our initial situation
            </span>

            {/* §2 Points */}
            <ul>
              {/* §3 Point I */}
              <li>
                <b>
                  Geopolitical factors averted the adoption of several data
                  collection systems.
                </b>
                <br/><br/>
                Geographically speaking, Marborges operates most of its
                business in areas with reduced connectivity—some of its
                farms even lack basic GSM coverage! This situation is even
                harder to solve when you take into account the magnitude
                that is Brazil’s territory, especially at the northern
                regions where Marborges is located.
                <br/><br/>
                While looking for a solution to solve its data-collection
                issue, Marborges had to be careful not to choose one that
                operated solely online.
              </li>
              {/* §3 Point II */}
              <li>
                <b>
                  The application needed an easy to use and intuitive
                  interface, tailored for a non-tech public.
                </b>
                <br/><br/>
                The personnel destined to use the system had a significant
                amount of rural workers. It was both a privilege and a great
                responsibility to develop an application knowing that some
                of my users did not even have a computer at home.
                <br/><br/>
                I recognize, however, the most important factor which contributed
                to the success of the application, especially the adoption
                of its interface by our user-base, was the dedication from
                coworkers¹ and the amount of useful feedback they provided
                me whenever I needed.
              </li>
              {/* §3 Point III */}
              <li>
                <b>
                  It was mandatory that the data collected on field needed
                  to be accessible at Marborges headquarters.
                </b>
                <br/><br/>
                Regardless of internet connection, we had to figure out
                a way to circumvent the technological hindrances mentioned
                earlier.
              </li>
            </ul>

            {/* §1 Notes */}
            <h1>
              Notes
            </h1>
            <div className="notes">
              <span>
                ¹ I had the pleasure to dispose of the aid and feedback
                of professionals from the company, as well as having the
                opportunity to work with my Father in this project, who
                is an excellent IT consultant and colorful professional.
                <br/><br/>
                He played a key role in training those people, and made
                my job a much, much smoother experience by doing so.
                Here's his {" "}
                <a href="https://www.linkedin.com/in/alberto-d-32870978/">
                  LinkendIn Profile
                </a>
                {" "}if you're interested checking more about him.
              </span>
            </div>
          </span>
        )}
        pt={( // §0 Portuguese
          <span>
            <div className="header">
              Detalhes do Problema
            </div>

            {/* §1 Why develop */}
            <span>
              A Marborges contava com métodos tradicionais para a coleta
              e análise da maioria de suas informações. Após a conclusão
              do nosso projeto, estima-se que cerca de dez mil folhas de
              papel são economizadas a cada mês.
            </span>

            <h1>
              Por que desenvolver um sistema?
            </h1>
            <span>
              Para entender melhor por quê escolhemos desenvolver uma
              aplicação do zero, em vez de utilizar uma já existente no
              mercado, os seguintes tópicos podem lhe ilustrar o nosso
              inicial contexto:
            </span>

            {/* §2 Points */}
            <ul>
              {/* §3 Point I */}
              <li>
                <b>
                  Fatores geopolíticos evitavam a adoção de muitos sistemas
                  de coletas de dados existentes.
                </b>
                <br/><br/>
                Geograficamente falando, a Marborges opera a maioria de
                suas atividades em áreas com conectividade
                restringidas—algumas de suas fazendas não possuem uma
                cobertura GSM estável! Esta situação se torna ainda mais
                difícil de resolver quando consideramos a magnitude do
                território brasileiro, especialmente nas regiões do norte,
                onde a Marborges está localizada.
                <br/><br/>
                Ao procurar por uma solução existente para resolver o problema
                de coleta de dados, era necessário cautela para escolher
                uma que não funcionasse exclusivamente online.
              </li>
              {/* §3 Point II */}
              <li>
                <b>
                  A aplicação precisava de uma interface simples e fácil
                  de usar, planejada para um público não tão familiar com
                  as tecnologias recentes.
                </b>
                <br/><br/>
                A equipe destinada a utilizar o sistema era composta
                majoritariamente de trabalhadores rurais. Foi um grande
                privilégio e uma grande responsabilidade desenvolver uma
                aplicação sabendo que alguns de meus usuários não possuíam
                nem mesmo um computador em casa.
                <br/><br/>
                Obviamente, reconheço que os fatores mais decisivos que
                contribuíram para o sucesso da implementação do sistema,
                principalmente na adoção da interface pela nossa base de
                usuários, foi a dedicação de colegas de trabalhos¹ e a
                quantidade de feedback positivo que os mesmos me prestavam
                sempre que eu precisava.
              </li>
              {/* §3 Point III */}
              <li>
                <b>
                  Era mandatório que as informações colhidas em campo
                  pudessem ser acessadas nos quarteis de operações da Marborges.
                </b>
                <br/><br/>
                Independentemente de sua conectividade com a internet,
                nós tivemos que pensar em uma maneira de circunver estes
                problemas (observando as barreiras tecnológicas e
                geopolíticas mencionadas nos últimos parágrafos).
              </li>
            </ul>

            {/* §1 Notes */}
            <h1>
              Notes
            </h1>
            <div className="notes">
              <span>
                ¹ Eu tive o prazer de possuir a disponibilidade e o feedback
                de profissionais da empresa, assim como a oportunidade de
                trabalhar com o meu pai neste projeto, que é um excelente
                consultor de TI e um profissional muito competente.
                <br/><br/>
                Ele atuou em um papel chave durante o treino da equipe em
                campo, tornando o meu trabalho de desenvolvedor muito,
                mas muito, mais agradável ao intermediar as minhas conversas
                com o público alvo. Aqui está o seu {" "}
                <a href="https://www.linkedin.com/in/alberto-d-32870978/">
                  perfil pessoal no LinkedIn
                </a>
                {" "}se você estiver mais interessado em conhecer mais
                sobre ele.
              </span>
            </div>
          </span>
        )}
      />
    </div>
  );
};

export default Marborges02;

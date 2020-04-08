import React from "react";

import LocaleText from "components/locale_text/locale_text";

const Marborges03: React.FC = () => {
  return (
    <div className="content scrollable">
      <LocaleText
        en={( // §0 English
          <span>
            <div className="header">
              The Solution
            </div>

            <span>
              The solution developed could be summarized by these three
              key points:
            </span>

            <ul>
              <li>
                <b>
                  Farms and plantations supervisors were equipped with a
                  mobile application allowing them to collect data;
                </b>
              </li>
              <li>
                <b>
                  The data was kept on the device until its supervisor
                  walked close to one of the established access points
                </b>
                <br/><br/>
                There it would be uploaded to the back-end software I
                developed;
              </li>
              <li>
                <b>
                  Marborges has a vast amount of workable land, some of
                  its plantations spread over kilometers.
                </b>
                <br/><br/>
                The system worked entirely offline, which means we couldn’t
                keep data synced 24/7, but we found ways to solve conflicts
                when an older device presented information that could conflict
                those already stored on our databases;
              </li>
            </ul>

            <h1>
              Technical Details
            </h1>

            It was developed an application using React Native for mobile
            handheld computers (Zebra MC36), which allowed Marborges’
            personnel to collect data on remote areas.
            <h2>
              Avoiding Conflicts
            </h2>
            Traditionally, the same work fleet would gather about a dozen
            sheets of paper containing spreadsheets and questionnaires
            necessary for QA and other procedures.  Besides oral communication,
            there were limited ways for supervisors to understand which
            areas and workers were already interviewed and analyzed.
            <br/><br/>
            We solved that issue by allowing the system to detect possible
            conflicting information, such as duplicate entries, when the
            collected data was sent to the back-end.
            <h2>
              Exporting Information
            </h2>
            When uploaded to our back-end, the data was made available
            for specialists who would import the information as excel files,
            maintaining the same design and familiarity they were used to
            work before the system was implanted.

            The back-end was developed using Node.js
          </span>
        )}
        pt={( // §0 Portuguese
          <span>
            <div className="header">
              A Solução
            </div>

            <span>
              A solução desenvolvida pode ser resumida por estes três
              pontos chaves:
            </span>

            <ul>
              <li>
                <b>
                  Os supervisores das fazendas e plantações foram equipados
                  com um aplicativo mobile que permitia a coleta de informações;
                </b>
              </li>
              <li>
                <b>
                  As informações residem no aparelho mobile ate que o
                  supervisor chegue próximo a um de nossos Access Points
                  (redes Wi-Fi)
                </b>
                <br/><br/>
                Após isso, esta informação é sincronizada com o serviço
                back-end que desenvolvi;
              </li>
              <li>
                <b>
                  Possuindo uma vasta quantidade de área trabalhável, a
                  Marborges têm fazendas que se estendem por quilômetros.
                </b>
                <br/><br/>
                O sistema foi desenvolvido para funcionar completamente
                off-line, o que significa que as informações disponibilizadas
                para a Marborges não são sincronizadas 24/7 a cada segundo,
                entretanto, desenvolvemos meios para resolver conflitos
                (como os que ocorrem quando um dispositivo mais antigo
                apresenta dados que possam conflitar com registros
                realizados mais recentemente em nossos bancos de dados);
              </li>
            </ul>

            <h1>
              Detalhes Técnicos
            </h1>

            Foi desenvolvido uma aplicação utilizando React-Native para
            dispositivos handheld (Zebra MC36), que permitiram que os
            funcionários da Marborges pudessem coletar informações em
            áreas remotas.
            <h2>
              Evitando Conflitos
            </h2>
            Tradicionalmente, estas atividades eram realizadas por meios
            convencionais (como planilhas e questionários em papel). Além
            da comunicação verbal, havia poucos meios dos supervisores
            reconhecerem que áreas e trabalhadores já foram previamente
            entrevistados.
            <br/><br/>
            Nós resolvemos este obstáculo com o desenvolvimento de rotinas
            que resolvem possíveis conflitos de informações, como o envio
            de registros repetidos.
            <h2>
              Exportando Informações
            </h2>
            Após o upload dos dados para o nosso back-end, os registros
            realizados são disponibilizados para especialistas que poderão
            importar as informações salvas em arquivos Excel, mantendo o
            mesmo design e familiaridade que os mesmos já possuíam antes
            do sistema ser implantado.

            O back-end foi desenvolvido inteiramente em Node.js
          </span>
        )}
      />
    </div>
  );
};

export default Marborges03;

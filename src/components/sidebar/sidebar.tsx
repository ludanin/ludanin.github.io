import React from "react";
import { connect } from "react-redux";

import LocaleText from "components/locale_text/locale_text";
import { RPropsRedux } from "reducers";

import styles from "./styles.module.css";

const Sidebar: React.FC<RPropsRedux> = ({ Redux }) => {
  return (
    <div className={`SIDEBAR ${Redux.sidebar}`}>
      {/* §1 Header */}
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img
            src="https://avatars3.githubusercontent.com/u/31702297?s=192&v=4"
            alt="Avatar taken from GitHub"
          />
        </div>
        <div className={styles.personal}>
          <div className={styles.personalName}>
            Lukas Danin
          </div>
          <LocaleText
            en="Fullstack Developer"
            pt="Desenvolvedor Fullstack"
            className={styles.personalJob}
          />
        </div>
      </div>

      <div className={`${styles.content} scrollable`}>
        {/* §1 Contact */}
        <h1>
          <LocaleText
            en="Contact me"
            pt="Contate-me"
          />
        </h1>

        <div>
          <div className={styles.contactRow}>
            <i className="mdi mdi-at"/>
            <span>
              <a href="mailto:lukas.danin@gmail.com">
                lukas.danin@gmail.com
              </a>
            </span>
          </div>
          <div className={styles.contactRow}>
            <i className="mdi mdi-phone"/>
            <span>
              <a href="tel:+5591984491719">+55 91 98449 1719</a>
            </span>
          </div>
          <div className={styles.contactRow}>
            <i className="mdi mdi-github-circle"/>
            <span>
              <a href="https://github.com/ludanin">ludanin</a>
            </span>
          </div>
        </div>

        {/* §1 Skills */}
        <h1>
          <LocaleText
            en="Skills"
            pt="Habilidades"
          />
        </h1>

        <ul className={styles.skills}>
          <span>Front-End</span>
          <li>
            <LocaleText
              en="Always toying with the latest JavaScript trends & versions"
              pt="Sempre experimentando as últimas trends e versões do JavaScript"
            />
          </li>
          <li><LocaleText en="Loves" pt="Ama"/> TypeScript</li>
          <li>ReactJS</li>
          <li>Redux & Redux Sagas</li>
          <li>React-Native</li>
          <li>Flutter (Dart)</li>
          <li>
            <LocaleText
              en="Obviously all that HTML5 + CSS (and Sass) stuff"
              pt="Obviamente toda aquela bagagem de HTML5 + CSS (e Sass)"
            />
          </li>
        </ul>

        <ul className={styles.skills}>
          <span>Back-End</span>
          <li>Golang</li>
          <li>SQL (<LocaleText en="Loves" pt="Ama"/> PostgreSQL)</li>
          <li>MongoDB</li>
          <li>NodeJS (Express, Koa, etc.)</li>
        </ul>

        <ul className={`${styles.skills} ${styles.lastItem}`}>
          <span><LocaleText en="Misc." pt="Outros"/></span>
          <li><LocaleText en="Loves to work with" pt="Ama trabalhar com"/> Linux</li>
          <li>
            <LocaleText
              en="Graduated from StartupSchool 2019"
              pt="Graduou na StartupSchool 2019"
            />
          </li>
          <li>
            <LocaleText
              en="Would love to have the opportunity to work in something related to arts or with topics associated to social work"
              pt="Iria amar ter a oportunidade de trabalhar com algo mais artístico ou com tópicos relacionados à trablhos sociais"
            />
          </li>
          <li className={styles.lastItem}>
            <LocaleText
              en="Knows how to draw, and handle most design softwares, very handy if you need some last minute mock ups or concept arts"
              pt="Sabe desenhar, e utilizar a maioria dos softwares de design, muito útil para quando você precisa de umas mock-ups ou concept arts"
            />
          </li>
        </ul>

        {/* §1 Credits */}
        <h1>
          <LocaleText
            en="Credits"
            pt="Créditos"
          />
        </h1>
        <div className={styles.credits}>
          <LocaleText
            en={[
              "This website was developed using ReactJS (with Redux & Redux-Sagas) ",
              "you can check its source code ",
              (
                <a
                  href="https://github.com/ludanin/ludanin.github.io"
                  key="SIDEBAR/en:source"
                >
                  here
                </a>
              ),
              ".",

              <br key="SIDEBAR/en:br1"/>, <br key="SIDEBAR/en:br2"/>,

              "Some of the icons rendered on the content published here were ",
              "acquired from the ",
              (
                <a href="https://icons8.com" key="SIDEBAR/en:icons8">Icons8</a>
              ),
              " library. If you can, do check these guys out, they're amazing!",
            ]}
            pt={[
              "Este website foi desenvolvido utilizando ReactJS (com Redux ",
              "& Redux-Sagas) você pode checar o código fonte deste projeto ",
              (
                <a
                  href="https://github.com/ludanin/ludanin.github.io"
                  key="SIDEBAR/pt:source"
                >
                  aqui
                </a>
              ),
              ".",

              <br key="SIDEBAR/pt:br1"/>, <br key="SIDEBAR/en:br2"/>,

              "Alguns dos ícones utilizados no conteúdo publicado aqui foram ",
              "adquiridos da biblioteca ",
              (
                <a href="https://icons8.com" key="SIDEBAR/pt:icons8">Icons8</a>
              ),
              ". Se puder, cheque o trabalho desta equipe, eles são incríveis!",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps)(Sidebar);

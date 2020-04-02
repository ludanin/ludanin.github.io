import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";
import LocaleText from "components/locale_text/locale_text";
import Pager from "components/pager/pager";
import { RPropsComplete } from "reducers";

import styles from "./styles.module.css";

const Navbar: React.FC<RPropsComplete> = ({
  Redux, LNG_CHANGE, SDB_TOGGLE,
}) => {
  const {
    orientation, stories, sidebar,
  } = Redux;

  if (stories.current === "/") return null;

  const showBorder = sidebar === "hidden" ? styles.showBorder : "";
  const activeSidebar = sidebar === "visible" ? styles.activeSidebar : "";

  const storyTitle = () => {
    if (orientation === "portrait") return null;
    switch (stories.current) {
      case "/home": return (
        <LocaleText
          animate={false}
          en={"H\nO\nM\nE"}
          pt={"I\nN\nÍ\nC\nI\nO"}
        />
      );
      case "/bgado": return "b\nG\nA\nD\nO\n";
      case "/marborges": return "M\nA\nR\nB\nO\nR\nG\nE\nS";
      case "/project_e": return (
        <LocaleText
          animate={false}
          en={"P\nR\nO\nJ\nE\nC\nT\n\nE"}
          pt={"P\nR\nO\nJ\nE\nT\nO\n\nE"}
        />
      );
      case "/resume": return (
        <LocaleText
          animate={false}
          en={"R\nE\nS\nU\nM\nE"}
          pt={"C\nU\nR\nR\nÍ\nC\nU\nL\nO"}
        />
      );

      default: return null;
    }
  };

  return (
    <div className={`NAVBAR ${showBorder}`}>

      {/* §1 Language Chooser */}
      <div className={styles.language}>
        <div className={styles.languageCircle}>
          <LocaleText
            className={styles.languageFlag}
            en={(
              <img
                alt="Português Brasil"
                onClick={LNG_CHANGE}
                src="https://lipis.github.io/flag-icon-css/flags/1x1/br.svg"
              />
            )}
            pt={(
              <img
                alt="English"
                onClick={LNG_CHANGE}
                src="https://lipis.github.io/flag-icon-css/flags/1x1/gb.svg"
              />
            )}
          />
        </div>

      </div>

      {/* §1 Story chooser/pager */}
      <div className={styles.pager}>
        {
          orientation === "portrait"
            ? (<Pager/>)
            : <div className={styles.storyTitle}>{storyTitle()}</div>
        }
      </div>

      {/* §1 Sidebar toggle */}
      <div className={styles.sidebar}>
        <button
          className={`${styles.sidebarButton} ${activeSidebar}`}
          onClick={SDB_TOGGLE}
        >
          {
            activeSidebar !== ""
              ? <i className="mdi mdi-keyboard-backspace"/>
              : <i className="mdi mdi-menu"/>
          }
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps, actions)(Navbar);

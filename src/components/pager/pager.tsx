import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";
import LocaleText from "components/locale_text/locale_text";
import { RPropsComplete } from "reducers";
import { Stories } from "reducers/state/stories";

import styles from "./styles.module.css";

interface Props {
  onlyLandscape?: boolean;
}

interface State {
  storyChooserVisibility: "active" | "hiding" | "hidden";
}

class Pager extends React.Component<RPropsComplete & Props, State> {
  state: State = {
    storyChooserVisibility: "hidden",
  };

  constructor(props: any) {
    super(props);

    this.toggleStoryChooser = this.toggleStoryChooser.bind(this);
    this.chooseStory = this.chooseStory.bind(this);
  }

  /* §1 toggleStoryChooser */
  toggleStoryChooser() {
    const { storyChooserVisibility } = this.state;
    if (storyChooserVisibility === "active") {
      this.setState(
        { storyChooserVisibility: "hiding" },
        () => {
          setTimeout(
            () => {
              this.setState({ storyChooserVisibility: "hidden" });
            },
            150, // Remember to match the HIDING animation of the story chooser
          );
        },
      );
    } else if (storyChooserVisibility === "hidden") {
      this.setState({ storyChooserVisibility: "active" });
    }
  }

  /* §1 chooseStory */
  chooseStory(event: React.SyntheticEvent<HTMLButtonElement>) {
    const { current, nextStory } = this.props.Redux.stories;
    const changingStory = current !== nextStory;
    const story = event.currentTarget.dataset.target as Stories;

    if (story !== current && changingStory === false) {
      this.props.STRY_REPLACE(story);
    }
  }

  /* §0 Render */
  render() {
    const { storyChooserVisibility } = this.state;
    const { stories, orientation } = this.props.Redux;
    const { page, maxPage, current } = stories;
    const { onlyLandscape } = this.props;

    if (onlyLandscape && orientation === "portrait") return null;

    const pager = () => (
      <div className={styles.wrapper}>
        <button
          className={styles.prevNext}
          disabled={page === 1}
        >
          <i className="mdi mdi-chevron-left"/>
        </button>

        {/* §1 Counter */}
        <div
          className={`${styles.pageCounter} ${storyChooserVisibility}`}
          onClick={this.toggleStoryChooser}
        >
          <i className="mdi mdi-book-open-page-variant"/>
          <span>{page} / {maxPage}</span>

          {/* §2 Story chooser */}
          <div className={styles.storyChooser}>

            { // §3 Select '/home'
              current !== "/home"
                ? (
                  <button
                    onClick={this.chooseStory}
                    data-target={"/home" as Stories}
                  >
                    <LocaleText
                      animate={false}
                      en="Home"
                      pt="Início"
                    />
                  </button>
                )
              : undefined
            }

            { // §3 Select '/resume'
              current !== "/resume"
                ? (
                  <button
                    onClick={this.chooseStory}
                    data-target={"/resume" as Stories}
                  >
                    <LocaleText
                      animate={false}
                      en="Resume"
                      pt="Currículo"
                    />
                  </button>
                )
              : undefined
            }

            { // §3 Select '/marborges'/
              current !== "/marborges"
              ? (
                <button
                  onClick={this.chooseStory}
                  data-target={"/marborges" as Stories}
                >
                  Marborges
                </button>
              )
            : undefined
            }

            { // §3 Select '/bgado'/
              current !== "/bgado"
              ? (
                <button
                  onClick={this.chooseStory}
                  data-target={"/bgado" as Stories}
                >
                  bGado
                </button>
              )
            : undefined
            }

            { // §3 Select '/project_e'/
              current !== "/project_e"
              ? (
                <button
                  onClick={this.chooseStory}
                  data-target={"/project_e" as Stories}
                >
                  <LocaleText
                    animate={false}
                    en="Project E"
                    pt="Projeto E"
                  />
                </button>
              )
            : undefined
            }

          </div>
        </div>

        <button
          className={styles.prevNext}
          disabled={page === maxPage}
        >
          <i className="mdi mdi-chevron-right"/>
        </button>
      </div>
    );

    if (onlyLandscape && orientation === "landscape") {
      if (current === "/") return null;
      return (
        <div className={styles.onlyLandscape}>
          {pager()}
        </div>
      );
    }

    return pager();
  }
}

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps, actions)(Pager);

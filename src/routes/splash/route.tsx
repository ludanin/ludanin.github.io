import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";
import LocaleText from "components/locale_text/locale_text";
import { RPropsComplete } from "reducers";

import styles from "./spin.module.css";
import "./styles.css";

class SplashRoute extends React.Component<RPropsComplete> {
  constructor(props: any) {
    super(props);

    this.getScrollbarWidth = this.getScrollbarWidth.bind(this);
  }

  // §1 componentDidMount
  componentDidMount() {
    this.getMobileVH();
    if (window.innerWidth <= 620) {
      this.props.SET_ORIENTATION("portrait");
    } else {
      this.props.SET_ORIENTATION("landscape");
    }

    this.getScrollbarWidth();

    setTimeout(
      () => {
        if (this.props.Redux.orientation === "landscape"){
          this.props.SDB_TOGGLE();
        }
        if (window.location.href.includes("/resume")) {
          this.props.STRY_REPLACE("/resume");
        } else {
          this.props.STRY_REPLACE("/home");
        }
      },
      1000,
    );
  }

  /* §1 getMobileVH */
  getMobileVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  // §1 Get Scrollbars width
  /**
   * saveScrollBarWidth calculates, then records the width of the user's
   * scrollbar in pixels and saves it to our css `:root`
   *
   * The algorithm used to calculate the width is borrowed from:
   * https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
   *
   * Why do we need to do such thing?
   *
   * By not doing this we might end with assymetric design over this website,
   * if we want our content to be centered at certain div, and ignoring the
   * space used by scrollbars, we'll always end up with something looking
   * odd.
   *
   * With the variable `--scrollbar` defined at our `:root` css, we can easily
   * circumvent these situations, padding our elements to the left whenever
   * a scrollbar is present on the right (and vice-versa).
   */
  getScrollbarWidth(): number {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer!.parentNode!.removeChild(outer);

    this.props.SET_SCROLLBAR(scrollbarWidth ?? 12);

    return scrollbarWidth ?? 12;
  }

  render() {
    return (
      <div className="SPLASH">
        <div className={styles.centerSpin}>
          <div className={styles.icon}>
            <i className="mdi mdi-spin mdi-loading"/>
          </div>
          <LocaleText
            className={styles.description}
            en="Loading..."
            pt="Carregando..."
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps, actions)(SplashRoute);

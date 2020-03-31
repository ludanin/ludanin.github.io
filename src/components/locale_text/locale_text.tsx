import React from "react";
import { useSelector } from "react-redux";

import { RPropsRedux } from "reducers";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  animate?: boolean;
  pt: React.ReactNode;
  en: React.ReactNode;
}

/**
 * Use this component to automatically create translateable texts.
 *
 * By default it animates the translation process, to disable this behavior
 * simply pass the prop `animate` as `false`.
 *
 * You can pass custom a `className` to this component, with the prop
 * `className`.
 */
const LocaleText: React.FC<Props> = (props) => {
  const animate = props.animate ?? true;
  const { className: customClassName, en, pt } = props;
  const { language } = useSelector((s: RPropsRedux) => s.Redux);

  const inTransition = language !== "en" && language !== "pt";
  const currentlyEnglish = language === "en" || language === "en>pt";

  const className = `${
    styles.localized
  } ${
    animate ? styles.animated : ""
  } ${
    inTransition ? styles.transition : ""
  } ${
    customClassName ?? ""
  }`;

  return (
    <span className={className}>
      {currentlyEnglish ? en : pt}
    </span>
  );
};

export default LocaleText;

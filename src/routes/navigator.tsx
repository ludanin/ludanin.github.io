import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RPropsRedux } from "reducers";
import { Stories } from "reducers/state/stories";
import BGadoStory from "routes/bgado/story";
import HomeStory from "routes/home/story";
import ProjectEStory from "routes/project_e/story";
import ResumeStory from "routes/resume/story";
import SplashRoute from "routes/splash/route";

import "./navigator.css";

const Navigator: React.FC = () => {
  const { current, nextStory, changingPages } = useSelector((s: RPropsRedux) => s.Redux.stories);

  const renderRoute = (s: Stories) => {
    switch (s) {
      case "/home": return <HomeStory/>;
      case "/bgado": return <BGadoStory/>;
      case "/resume": return <ResumeStory/>;
      case "/project_e": return <ProjectEStory/>;

      case "/":
      default: return <SplashRoute/>;
    }
  };

  // §1 Animation Helpers
  const [ direction, setDirection ] = useState<"forward" | "backward">("forward");

  if (current !== nextStory) {
    if (direction !== "forward") setDirection("forward");
  }

  // §2 classNames
  const transition = current !== nextStory ? "transition" : "";
  const expanded = current === "/" ? "expanded" : "";
  const pageTurn = () => {
    if (changingPages === "") return "";

    if (changingPages === "forward") {
      if (direction !== "forward") setDirection("forward");
    } else {
      if (direction !== "backward") setDirection("backward");
    }

    return changingPages === "forward" ? "nextPage" : "previousPage";
  };

  return (
    <div className={
      `NAVIGATOR ${transition} ${expanded} ${pageTurn()} ${direction}`
    }>
      {renderRoute(current)}
    </div>
  );
};

export default Navigator;

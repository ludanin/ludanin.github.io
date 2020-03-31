import React from "react";
import { useSelector } from "react-redux";

import { RPropsRedux } from "reducers";
import { Stories } from "reducers/state/stories";
import HomeStory from "routes/home/story";
import SplashRoute from "routes/splash/route";

import "./navigator.css";

const Navigator: React.FC<RPropsRedux> = () => {
  const { current, nextStory } = useSelector((s: RPropsRedux) => s.Redux.stories);

  const renderRoute = (story: Stories) => {
    switch (story) {
      case "/home": return <HomeStory/>;

      case "/":
      default: return <SplashRoute/>;
    }
  };

  const transition = current !== nextStory ? "transition" : "";
  const expanded = current === "/" ? "expanded" : "";

  return (
    <div className={`NAVIGATOR ${transition} ${expanded}`}>
      {renderRoute(current)}
    </div>
  );
};

export default Navigator;

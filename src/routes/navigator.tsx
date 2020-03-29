import React from "react";
import { connect, useSelector } from "react-redux";

import { RPropsRedux } from "reducers";
import { Stories } from "reducers/state/stories";
import HomeRoute from "routes/home/story";
import SplashRoute from "routes/splash/route";

import "./navigator.css";

const Navigator: React.FC<RPropsRedux> = () => {
  const { current, nextStory } = useSelector((s: RPropsRedux) => s.Redux.stories);

  const renderRoute = (story: Stories) => {
    switch (story) {
      case "/home": return <HomeRoute/>;

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

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps)(Navigator);

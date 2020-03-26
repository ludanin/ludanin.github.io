import React from "react";
import { connect, useSelector } from "react-redux";

import { RPropsRedux } from "reducers";
import { Stories } from "reducers/state/stories";
import Splash from "routes/splash/route";

const Navigator: React.FC<RPropsRedux> = () => {
  const { current, nextStory } = useSelector((s: RPropsRedux) => s.Redux.stories);

  const renderRoute = (story: Stories) => {
    switch (story) {
      case "/home": return <div/>;

      case "/":
      default: return <Splash/>;
    }
  };

  const inTransition = current !== nextStory;

  return (
    <div className={`NAVIGATOR ${inTransition ? "transition" : ""}`}>
      {renderRoute(current)}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps)(Navigator);

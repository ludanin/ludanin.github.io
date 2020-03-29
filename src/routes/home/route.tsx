import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";
import { RPropsComplete } from "reducers";

const HomeRoute: React.FC<RPropsComplete> = ({ Redux }) => {
  return (
    <div>
      {/*  */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Redux: state.Redux,
});

export default connect(mapStateToProps, actions)(HomeRoute);

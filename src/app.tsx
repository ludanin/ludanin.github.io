import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import Navbar from "components/navbar/navbar";
import Pager from "components/pager/pager";
import reducers from "reducers";
import Navigator from "routes/navigator";
import sagas from "sagas";

import "css/animations.css";
import "css/colors.css";
import "css/fonts.css";
import "css/root.css";
import "css/scrollbars.css";
import "css/shadows.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigator/>
      <Pager onlyLandscape={true}/>
      <Navbar/>
    </Provider>
  );
};

export default App;

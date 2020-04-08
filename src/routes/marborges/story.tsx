import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { STRY_SET_PAGES } from "actions";
import { RPropsRedux } from "reducers";
import Marborges01 from "routes/marborges/page_01";
import Marborges02 from "routes/marborges/page_02";
import Marborges03 from "routes/marborges/page_03";
import Marborges04 from "routes/marborges/page_04";

const MarborgesStory: React.FC = () => {
  const { page, maxPage } = useSelector((s: RPropsRedux) => s.Redux.stories);
  const dispatch = useDispatch();
  if (maxPage !== 4) {
    dispatch(STRY_SET_PAGES(4));
  }

  switch (page) {
    case 1: return <Marborges01/>;
    case 2: return <Marborges02/>;
    case 3: return <Marborges03/>;
    case 4: return <Marborges04/>;
  }

  return null;
};

export default MarborgesStory;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { STRY_SET_PAGES } from "actions";
import { RPropsRedux } from "reducers";
import BGado01 from "routes/bgado/page_01";
import BGado02 from "routes/bgado/page_02";

const BGadoStory: React.FC = () => {
  const { page, maxPage } = useSelector((s: RPropsRedux) => s.Redux.stories);
  const dispatch = useDispatch();

  if (maxPage !== 2) {
    dispatch(STRY_SET_PAGES(2));
  }

  switch (page) {
    case 1: return <BGado01/>;
    case 2: return <BGado02/>;
  }

  return (
    null
  );
};

export default BGadoStory;

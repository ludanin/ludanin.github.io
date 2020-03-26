import { combineReducers } from "redux";

import { Actions } from "actions";
import reducer from "reducers/reducer";
import { State } from "reducers/state";

/**
 * Matches the output of a mapStateToProps
 */
interface ReduxProps {
  Redux: State;
}

// These types are used to feed the type-data of components' props.
// The capital 'R' implies Redux.

/**
 * Exports type-data of both the store and actions
 */
export type RPropsComplete = ReduxProps & Actions;

/**
 * Exports only type-data from the store
 */
export type RPropsRedux = ReduxProps;

/**
 * Exports only type-data of actions
 */
export type RPropsActions = Actions;

// Since we'll use only a single reducer and state in this application,
// for convenience we'll name it in the store as Redux.
export default combineReducers({ Redux: reducer });

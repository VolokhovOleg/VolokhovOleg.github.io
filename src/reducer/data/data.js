import {ActionType, ActionCreator} from './actions';
import NameSpace from '../name-space';
import {extend} from '../../utils';

const NAME_SPACE = NameSpace.DATA;

const initialState = {
  data: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.NAME:
      return extend(state, {data: action.payload});
  }

  return state;
};

const Operation = {
  setData: () => (dispatch, getState) => {
    return dispatch(ActionCreator.setData(++getState()[NAME_SPACE].data));
  },
};

export {reducer, Operation, ActionType, ActionCreator};

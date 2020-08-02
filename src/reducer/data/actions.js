const ActionType = {
  NAME: `NAME`,
};

const ActionCreator = {
  setData: (data) => ({
    type: ActionType.NAME,
    payload: data,
  }),
};

export {ActionType, ActionCreator};

import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.DATA;

const getData = (state) => {
  return state[NAME_SPACE].data;
};

export {getData};

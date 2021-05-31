import { GET_LEADS } from '../actions/type';

const initialState = {
  leads: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LEADS':
      return {
        ...state,
        leads: action.payload,
      };
    default:
      return state;
  }
};

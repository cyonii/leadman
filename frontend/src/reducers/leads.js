import { GET_LEADS, ADD_LEAD, DELETE_LEAD } from '../actions/type';

const initialState = {
  leads: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.uuid !== action.payload),
      };
    default:
      return state;
  }
};

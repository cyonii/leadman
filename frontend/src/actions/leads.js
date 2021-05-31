import { GET_LEADS } from './type';

// FETCH LEADS FROM SERVER
export const getLeads = () => (dispatch) => {
  fetch('/api/leads/')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_LEADS,
        payload: data,
      });
    })
    .catch((err) => console.error(err));
};

import { GET_LEADS, DELETE_LEAD } from './type';

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

// DELETE LEAD AT SERVER
export const deleteLead = (id) => (dispatch) => {
  fetch(`api/leads/${id}/`, { method: 'DELETE' })
    .then((res) => {
      if (res.status === 204) {
        dispatch({
          type: DELETE_LEAD,
          payload: id,
        });
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
};

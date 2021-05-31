import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './type';

const leadsEndpoint = '/api/leads/';

// FETCH LEADS FROM SERVER
export const getLeads = () => (dispatch) => {
  fetch(leadsEndpoint)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_LEADS,
        payload: data,
      });
    })
    .catch((err) => console.error(err));
};

// ADD NEW LEADS TO SERVER
export const addLead = (data) => (dispatch) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  fetch(leadsEndpoint, options)
    .then((res) => {
      if (res.statusText === 'Created') {
        res.json().then((data) => {
          dispatch({
            type: ADD_LEAD,
            payload: data,
          });
        });
      }
    })
    .catch((err) => console.log(err));
};

// DELETE LEAD AT SERVER
export const deleteLead = (id) => (dispatch) => {
  fetch(`${leadsEndpoint}${id}/`, { method: 'DELETE' })
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

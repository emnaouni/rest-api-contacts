import {GET_CONTACTS} from './type';
import axios from 'axios';


export const getContact = () => dispatch => {
    return axios
      .get('/getcontacts')
      .then(res => 
        dispatch({
          type: GET_CONTACTS,
          payload: res.data
        })
      );
  };

  export const addcontact = newContact => dispatch => {
    axios.post('/addcontact', newContact).then(res => {
        dispatch(getContact())
    })
}
export const Removecontact =id => dispatch => {
  axios.delete(`/DeleteContact/${id}`).then(res => {
      dispatch(getContact())
  })
}
export const Editcontact =(id ,updateContact) => dispatch => {
  axios.put(`/EditContact/${id}`,updateContact).then(res => {
      dispatch(getContact())
  })
}
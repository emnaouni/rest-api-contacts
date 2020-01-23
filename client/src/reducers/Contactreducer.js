import {GET_CONTACTS } from '../actions/type'

let initialState={
  contacts:[]
};

const contactReducers=(state = initialState ,action)=>{
    switch (action.type) {
      case GET_CONTACTS:
        return  {
          ...state,
          contacts: action.payload
        }
      default:
        return state;
}
}
export default contactReducers;
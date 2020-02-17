import Types from '../constant/types';

const initialState = {
  user: null
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ONBOARD:
      return {
        ...state,
        user: action.payload
      };
    case Types.AUTHENTICATE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
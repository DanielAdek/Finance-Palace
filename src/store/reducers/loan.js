import Types from '../constant/types';

const initialState = {
  loans: null
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_LOANS:
      return {
        ...state,
        loans: action.payload
      };
    case Types.REQUEST_LOAN:
      return {
        ...state,
        loan: action.payload
      };
    case Types.PAY_LOAN:
      return {
        ...state,
        payloan: action.payload
      };
    default:
      return state;
  }
};
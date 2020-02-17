import Types from '../constant/types';

const initialState = {
  accounts: null
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      };
    case Types.REVEAL_BVN:
      return {
        ...state,
        bvn: action.payload
      };
    default:
      return state;
  }
};
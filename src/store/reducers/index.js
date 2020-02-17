import { combineReducers } from 'redux';
import Types from '../constant/types';
import Authenticate from './authenticate';
import Loan from './loan';
import Account from './account'

// CREATE REDUCER FOR LOADING STATE
const initialState = {
	loading: false
};

const Loading = (state = initialState, action) => {
	switch (action.type) {
		case Types.PROCESSING:
			return {
				...state,
				loading: true,
			};
		case Types.FINISHED:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};

// COMBINE ALL REDUCERS
export default combineReducers({
	Loading,
	Authenticate,
	Loan,
	Account
});
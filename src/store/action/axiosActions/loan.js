import { Promise, handleError, Alert } from '../../utils/helpers';
import { processing, finished } from '../reduxAction/loading';
import { get_loans } from '../reduxAction/loan';

export const retreiveLoans = () => async dispatch => {
  try {
    const response = await Promise('get', '/loan/retreive');
    dispatch(processing());
    await dispatch(get_loans(response.data.data.details.userLoans));
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const requestLoan = (data, history) => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('POST', '/loan/request', data);
    Alert.success(response.data.data.message);
    window.location.reload();
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const payLoan = (data, history) => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('PUT', '/loan/pay', data);
    await dispatch(retreiveLoans());
    Alert.success(response.data.data.details.message);
    localStorage.removeItem('payLoanData');
    history.push('/dashboard');
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};
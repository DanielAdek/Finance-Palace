import { Promise, handleError } from '../../utils/helpers';
import { Alert } from '../../utils/helpers';
import { processing, finished } from '../reduxAction/loading';
import { get_accounts, reveal_bvn } from '../reduxAction/account';

export const retreiveUserAccount = () => async dispatch => {
  try {
    const response = await Promise('get', '/account/retrieve');
    dispatch(processing());
    await dispatch(get_accounts(response.data.data.details.userAccount));
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const createAccount = (data, history) => async dispatch => {
  try {
    dispatch(processing());
    await Promise('POST', '/account/create', data);
    await dispatch(retreiveUserAccount());
    dispatch(finished());
    history.push('/dashboard');
  } catch (error) {
    handleError(error);
    dispatch(finished());
  }
};


export const updateAccount = data => async dispatch => {
  try {
    dispatch(processing());
    await Promise('PUT', '/account/update', data);
    await dispatch(retreiveUserAccount());
    Alert.success('1 million naira is added');
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const revealBvn = () => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('get', '/account/bvn/reveal');
    await dispatch(reveal_bvn(response.data.data.details.bvn));
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const unRevealBvn = () => async dispatch => {
  try {
    dispatch(processing());
    await dispatch(reveal_bvn(null));
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};
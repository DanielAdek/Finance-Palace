import { Promise, handleError, Alert } from '../../utils/helpers';
import { processing, finished } from '../reduxAction/loading';
import { auth_user, onboard_user } from '../reduxAction/auth';

export const handleAuthenticate = (data, history) => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('POST', '/user/login', data,);
    await dispatch(auth_user(response.data.data.details.user));
    localStorage.setItem('x-auth-t', response.data.data.details.token);
    dispatch(finished());
    history.push('/dashboard');
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const handleOnBoard = (data, history) => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('POST', '/user/register', data);
    await dispatch(onboard_user(response.data.data.details.user));
    localStorage.setItem('x-auth-t', response.data.data.details.token);
    localStorage.setItem('avatar', response.data.data.details.user.avatar);
    dispatch(finished());
    history.push('/dashboard');
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const retrieveUserData = () => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('GET', '/user');
    await dispatch(auth_user(response.data.data.details.user));
   localStorage.setItem('x-auth-t', response.data.data.details.token);
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};

export const updateUserProfile = data => async dispatch => {
  try {
    dispatch(processing());
    const response = await Promise('put', '/user/update', data);
    await dispatch(retrieveUserData());
    Alert.success(response.data.data.message)
    dispatch(finished());
  } catch (error) {
    handleError(error)
    dispatch(finished());
  }
};
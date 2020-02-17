import Types from '../../constant/types';

export const auth_user = user => ({
  type: Types.AUTHENTICATE,
  payload: user
});

export const onboard_user = user => ({
  type: Types.ONBOARD,
  payload: user
});
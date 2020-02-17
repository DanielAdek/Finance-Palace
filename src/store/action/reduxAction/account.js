import Types from '../../constant/types';

export const get_accounts = data => ({
  type: Types.GET_ACCOUNTS,
  payload: data
});

export const reveal_bvn = data => ({
  type: Types.REVEAL_BVN,
  payload: data
});
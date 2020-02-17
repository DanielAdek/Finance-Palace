import Types from '../../constant/types';

export const get_loans = data => ({
  type: Types.GET_LOANS,
  payload: data
});

export const pay_loan = data => ({
  type: Types.PAY_LOAN,
  payload: data
});

export const request_loan = data => ({
  type: Types.REQUEST_LOAN,
  payload: data
});
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { CryptoJS } from './dashBoard';
import Select from 'react-dropdown-select';

import { retreiveUserAccount } from '../store/action/axiosActions/account';
import { payLoan } from '../store/action/axiosActions/loan';
import { ToNairaFormat } from '../helpers';
import * as Pay from '../Styles/payLoan';

export const PayForm = () => {
  // React Hooks
  const history = useHistory()
  const [loanPayData, setLoanPayData] = useState(null);
  const [selectedBank, setSelectedBank] = useState({ bankName: '...', balance: 0, bankId: '' });

  // Redux Hooks
  const dispatch = useDispatch();
  const account = useSelector(state => state.Account.accounts);
  
  const loanData = localStorage.getItem('payLoanData');

	useEffect(() => {
    if (loanData) {
      // const bytes  = CryptoJS.decrypt(process.env.NODE_ENV, ciphertext);
      // const payLoanData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      const payLoanData = JSON.parse(loanData);
			setLoanPayData(payLoanData);
    } else history.push('/dashboard');
    if (!account) {
      dispatch(retreiveUserAccount());
    }
  }, [loanData, dispatch, history, account]);
  
  const handleSelectBank = bank => setSelectedBank(bank[0]);

  const handleExit = () => {
    localStorage.removeItem('payLoanData');
    history.push('/dashboard');
  }

  const handlePayLoan = event => {
    event.preventDefault();
    const data = {
      bankId: selectedBank.bankId,
      totalAmountPayable: loanPayData.totalAmountPayable,
      loanId: loanPayData._id
    }
    dispatch(payLoan(data, history));
  }

  const bankOptions = account && account.banks.map(bank => ({ label: bank.bankName, balance: bank.balance, bankCode: bank.bankCode, bankId: bank._id }));

  return (
    <Pay.Wrapper>
      <Pay.PageInfoCont>
        <Pay.PageInfo>Please select a marchant to make payment. You can only select one bank per payment</Pay.PageInfo>
      </Pay.PageInfoCont>
      <Pay.Container>
          <Pay.Form>
          <Pay.Title>Pay Loan</Pay.Title>
            <Pay.Label>Accumulated Liability</Pay.Label>
            <Pay.Input readOnly value={ToNairaFormat(loanPayData && loanPayData.totalAmountPayable)} />
            <Pay.Label>Select Marchant</Pay.Label>
            <Select
              style={Pay.Select}
              options={bankOptions}
              onChange={values => handleSelectBank(values)}
            />
            <Pay.Button onClick={handlePayLoan}>Pay {ToNairaFormat(loanPayData && loanPayData.totalAmountPayable)} </Pay.Button>
          </Pay.Form>
          <Pay.Account>
          <Pay.Title>Account</Pay.Title>
          <Pay.Card>
            <Pay.CardHeaders>Account Balance</Pay.CardHeaders>
            <Pay.CardWalletBalance>{ToNairaFormat((selectedBank && selectedBank.balance) || selectedBank.balance)}</Pay.CardWalletBalance>
            <Pay.CardHeaders>Marchant</Pay.CardHeaders>
            <Pay.CardBankName>{(selectedBank && selectedBank.label) || selectedBank.bankName}</Pay.CardBankName>
          </Pay.Card>
          <Pay.Exit onClick={handleExit}>Back</Pay.Exit>
          </Pay.Account>
      </Pay.Container>
    </Pay.Wrapper>
  )
}
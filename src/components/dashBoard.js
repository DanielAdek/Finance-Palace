import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// import { Crypt, RSA } from 'node-crypto-js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BootstrapTable from 'react-bootstrap-table-next';

import { Loan } from './loan';
import { UserProfile } from './profile';
import { UserAccount } from './account';
import { ToNairaFormat } from '../helpers';
import { Alert } from '../store/utils/helpers';

import * as AC from '../Styles/dashBoard';
import * as CD from '../Styles/creditCardListing';


// imports from redux
import { retreiveLoans } from '../store/action/axiosActions/loan';

import { Transaction } from '../data/data';

const actionButton = (cell, row) => {
  if (!row.loanPaid) {
    return <div className='action-not-completed'>Pay Loan</div>
  }
}

const paymentStatus = (cell, row) => {
  if (!row.loanPaid) {
    return <div className='status-pending'>Pending</div>
  }
  return <div className='status-completed'>Paid</div>
}

const formatDate = (cell, row) => {
	return moment(cell).format('LL')
}

const formatAmount = (cell, row) => {
	return ToNairaFormat(`${cell}`);;
}

const columns = [
	{
		dataField: 'createdAt',
		text: 'Loan Date',
		formatter: formatDate
	},
	{
		dataField: 'amount',
		text: 'Loan Amount',
		formatter: formatAmount
	},
	{
		dataField: 'deadline',
		text: 'Deadline',
		formatter: formatDate,
		classes: (cell, row, rowIndex, colIndex) => {
      if (row.outstandingDays > 0 && !row.loanPaid) {
        return 'red'
      }
      return 'default'
    }
	},
	{
		dataField: 'outstandingDays',
		text: 'Overdue Days',
		classes: (cell, row, rowIndex, colIndex) => {
      if (row.outstandingDays > 0 && row.outstandingDays < 3 && !row.loanPaid) {
        return 'yellow'
      }
      if (row.outstandingDays >= 3 && !row.loanPaid) {
        return 'red'
      }
      return 'default'
    }
	},
	{
		dataField: 'totalAmountPayable',
		text: 'Total Liability',
		formatter: formatAmount
	},
	{
		dataField: 'loanPaid',
		text: 'Payment Status',
		formatter: paymentStatus
	},
	{
		dataField: 'bank',
		text: 'Marchant Used For Payment',
	},
	{
		dataField: 'loanPaid',
		text: 'Action',
		formatter: actionButton,
    events: {
      onClick: (_, _1, _2, row, _3) => {
        if (!window.navigator.onLine) {
          return Alert.error('NETWORK ERROR', 'Please Check Your Internet Connection', 'error');
        };
        if (!row.loanPaid) {
					localStorage.setItem('payLoanData', JSON.stringify(row));
					window.location.href = '/payLoan'
        }
      }
    },
    classes: (cell, row, rowIndex, colIndex) => {
      if (!row.loanPaid) {
        return 'td-row-action-not-completed'
      }
      return 'completed-action'
    }
	}
];

export const Dashboard = () => {
	// React Hooks goes here
	const history = useHistory();
	
	// Redux Hooks
	const dispatch = useDispatch();
	const loans = useSelector(state => state.Loan.loans) || Transaction;

	useEffect(() => {
		if (!localStorage.getItem('x-auth-t')) {
			return history.push('/');
		}
	}, [dispatch, history]);

	// React Actions
	useEffect(() => {
		dispatch(retreiveLoans());
	}, [dispatch]);

	const totalCostOfPendingLoans = (loans && loans.reduce((prev, next) => prev += next.totalAmountPayable, 0)) || 0;

	const pendingLoans = loans && loans.filter(data => !data.loanPaid);
	
	return (
		<Tabs>
			<AC.TabNavPanel>
				<TabList>
					<Tab>Dashboard</Tab>
					<Tab>Acount</Tab>
					<Tab>Loan</Tab>
					<Tab>Profile</Tab>
				</TabList>
			</AC.TabNavPanel>
			<TabPanel>
			<AC.sectionWrapper>
				<AC.PageTitle>Dashboard</AC.PageTitle>
			</AC.sectionWrapper>
				<AC.AccountContainer>
					<AC.Cover>
						<AC.Wrapper
							display="flex"
							justifyContent="space-around"
							mediaflexdirection="column"
							mediaAlignItems="center"
						>
							<AC.Card>
								<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
									<AC.StatisticalCard bg="#DCEEFB80" className="">
										<AC.StatCardHeading>Total Number of Loans</AC.StatCardHeading>
										<AC.StatCardInfo color="#62B0E8">{loans && loans.length}</AC.StatCardInfo>
									</AC.StatisticalCard>
								</CD.Div>
							</AC.Card>
							<AC.Card>
								<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
									<AC.StatisticalCard bg="#F2C94C" className="">
										<AC.StatCardHeading>Pending Loans </AC.StatCardHeading>
										<AC.StatCardInfo color="#62B0E8">{loans && pendingLoans.length}</AC.StatCardInfo>
									</AC.StatisticalCard>
								</CD.Div>
							</AC.Card>
							<AC.Card>
								<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
									<AC.StatisticalCard bg="lightgray" className="">
										<AC.StatCardHeading>Current Loan Amount </AC.StatCardHeading>
										<AC.StatCardInfo color="red">{ToNairaFormat(totalCostOfPendingLoans)}</AC.StatCardInfo>
									</AC.StatisticalCard>
								</CD.Div>
							</AC.Card>
							<AC.Card>
								<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
									<AC.StatisticalCard bg="#27AE60" className="">
										<AC.StatCardHeading>Loan Eligibility Status</AC.StatCardHeading>
										<AC.StatCardInfo color={loans && loans.length >= 1 && loans.length < 3 ? '#0f73bb' : 'red'}>{loans && loans.length >= 3 ? "Not Eligible" : "Eligible"}</AC.StatCardInfo>
									</AC.StatisticalCard>
								</CD.Div>
							</AC.Card>
						</AC.Wrapper>
						<AC.Wrapper paddingTop="5%">
							<AC.Header>Loan Details</AC.Header>
						</AC.Wrapper>
						<AC.Wrapper padding="1.5%">
							<BootstrapTable keyField="id" data={(loans && loans) || Transaction} columns={columns} />
						</AC.Wrapper>
					</AC.Cover>
				</AC.AccountContainer>
			</TabPanel>
			<TabPanel>
				<UserAccount />
			</TabPanel>
			<TabPanel>
				<Loan />
			</TabPanel>
			<TabPanel>
				<UserProfile />
			</TabPanel>
  	</Tabs>
	);
};

export const data = [
	{
		name: 'olorunwa lawrence',
		img: 'fa fa-home',
		loanType: 'personal loan',
		header: 'Dedicated Specialist',
		link: 'Meet the team',
		picture: require('../assests/images/Capture.PNG'),
		text:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
	},
	{
		name: 'daniel adekunle',
		loanType: 'house loan',
		img: 'fa fa-home',
		header: 'success Story Rating',
		link: 'view client review',
		picture: require('../assests/images/Capture.PNG'),
		text:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ',
	},
	{
		name: 'boluwatife adekunle',
		loanType: 'car loan',
		img: 'fa fa-home',
		header: 'No front apraisal fee',
		link: 'why choose us',
		picture: require('../assests/images/Capture.PNG'),
		text:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ',
	},
];

export const profile = [
	{
		firstname: 'olorunwa',
		lastname: 'lawrence',
		maidenname: 'flora',
		Bvn: '123456765432',
		email: 'olorunwalawrence5@gmail.com',
		password: 'loverso',
		city: 'yaba',
		state: 'lagos',
		img: require('../assests/images/Capture.PNG'),
		country: 'Nigeria',
		loantype: {
			cash: 'cash',
			creditcard: 'credit card',
		},
		amount: '90,000',
		year: '20/09/2020',
		officeaddress: '25b ameen street',
		address: '26b ameen street yaba lagos',
	},
];

export const Transaction =[
	{
		"amount": 700000,
		"outstandingDays": 0,
		"totalAmountPayable": 700000,
		"loanPaid": true,
		"_id": "5e3f4cd3708144a1d64dd2d1",
		"customerId": "5e3b089acc800a39afe78ffa",
		"deadline": "2020-05-08T23:00:00.000Z",
		"createdAt": "2020-02-09T00:05:39.447Z",
		"updatedAt": "2020-02-09T00:14:51.967Z",
		"__v": 0,
		"bank": "United Bank of Africa"
	},
	{
		"amount": 500000,
		"outstandingDays": 0,
		"totalAmountPayable": 5401000,
		"loanPaid": false,
		"_id": "5e3f572ceae6aea7e5e700ab",
		"customerId": "5e3b089acc800a39afe78ffa",
		"deadline": "2020-05-08T23:00:00.000Z",
		"createdAt": "2020-02-09T00:49:48.268Z",
		"updatedAt": "2020-02-10T22:59:59.049Z",
		"__v": 0
	}
];

export const ApplicationInfo = [
	{
		title: 'Choose Loan Amount',
		number: 1,
		text: 'Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis etfelis.',
	},
	{
		title: 'Approved Your Loan',
		number: 2,
		text: 'Fusce tempor sstibulum varius sem nec mi luctus viverra edcongue lobortis faucibus.',
	},
	{
		title: 'Get Your Cash',
		number: 3,
		text: 'Get your money in minutes simtibulm varius semnec mluctus gue lobortis faucibus.',
	},
];
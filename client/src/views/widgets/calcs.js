// const rows = [
// 	{
// 	  _id: "56cf587fe46adb3b8960afe2",
// 	  price: 2000,
// 	  title: "ps3",
// 	  url: "www.google.com",
// 	}, {
// 	  _id: "56db2bd434df9046e0643d22",
// 	  price: 499,
// 	  title: "HENRIKSDAL",
// 	  url: "http://www.ikea.com/se/sv/catalog/products/S59847817/",
// 	}
//   ];

// import { string } from "prop-types";

//   var Hello = React.createClass({
// 	renderRow(props) {
// 	  return (
// 		<tr>
// 		  <td>{ props._id }</td>
// 		  <td>{ props.price }</td>
// 		  <td>{ props.title }</td>
// 		  <td>{ props.url }</td>
// 		</tr>
// 	  );
// 	},

// 	render: function() {
// 	  return (
// 		<table>
// 		  { this.props.rows.map(this.renderRow) }
// 		</table>
// 	  );
// 	}
//   });

// function calc( startingAmount, yearsOfInvesting, additionalContributionsPerPeriod, interestRate ) {
// 	var interestPerDay = ( interestRate / 365 );
// 	var total = startingAmount;
// 	var date = new Date( new Date().getFullYear() + new Date().getMonth() + 1, 1 );
// 	var endDate = new Date( date.getFullYear() + yearsOfInvesting, date.getMonth(), date.getDate() - 1 );
// 	var startingWeekday = date.getDay();
// 	var startingDate = date.getDate();
// 	var runningInterest = 0;
// 	while( Date.parse( date.toString() ) < Date.parse( endDate.toString() ) ) {
// 		date.setDate( date.getDate() + 1 );
// 		runningInterest = runningInterest + total * interestPerDay;
// 		if( date.getDay() == startingWeekday ) {
// 			total = total + additionalContributionsPerPeriod;
// 		}
// 		if( date.getDate() == startingDate ) {
// 			total = total + runningInterest;
// 			runningInterest = 0;
// 		}
// 	}
// 	total = total + runningInterest;
// 	return total;
// }
let startingAmount = 4000;
let daysOfInvesting = 30;
let additionalContributionsPerPeriod = 0;



let interestRate = 0.5; //     $87,247
// let interestRate = 0.20; //    $1,186,881  ------------------
// let interestRate = 0.25; //       $4,038,967
// let interestRate = 0.3; //     $13,099,978 ------------------
// let interestRate = 0.4; //     $121,007,161
// let interestRate = 0.5; //     $958,755,296

function Calc(
  startingAmount,
  daysOfInvesting,
  additionalContributionsPerPeriod,
  interestRate
) {
  var interestPerDay = interestRate;
  var total = startingAmount;
  var runningInterest = 0;
  let outcome;
  for (var day = 1; day <= daysOfInvesting; day++) {
    runningInterest = runningInterest + total * interestPerDay;
    total = total + runningInterest;
    outcome = () => {
      return console.log(total);
    };
    outcome();
    runningInterest = 0;
  }
  total = total + runningInterest;
  return total;
}

// const Calc = () => {
// 	let startingAmount = 1000
// 	let yearsOfInvesting = 1
// 	let additionalContributionsPerPeriod = 30
// 	let interestRate = 0.2
// 	let calcs = calc2( startingAmount, yearsOfInvesting, additionalContributionsPerPeriod, interestRate )
// 	return () => (
// 		<p>
// 			{calcs}
// 		</p>

// 	)
// }

export default Calc(
  startingAmount,
  daysOfInvesting,
  additionalContributionsPerPeriod,
  interestRate
);

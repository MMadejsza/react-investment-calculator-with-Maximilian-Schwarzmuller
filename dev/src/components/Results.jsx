import {calculateInvestmentResults, formatter} from '../util/investment.js';

function Results({values}) {
	const resultData = calculateInvestmentResults(values);
	const initialInvestment =
		resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

	return (
		<>
			<table
				id='result'
				className='center'>
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{resultData.map((yearRow) => {
						const totalInterest =
							yearRow.valueEndOfYear -
							yearRow.annualInvestment * yearRow.year -
							initialInvestment;
						const totalAmountInvested = yearRow.valueEndOfYear - totalInterest;
						return (
							<tr key={yearRow.year}>
								<td>{yearRow.year}</td>
								<td>{formatter.format(yearRow.valueEndOfYear)}</td>
								<td>{formatter.format(yearRow.interest)}</td>
								<td>{formatter.format(totalInterest)}</td>
								<td>{formatter.format(totalAmountInvested)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Results;

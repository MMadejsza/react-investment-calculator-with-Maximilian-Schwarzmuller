import React, {useState} from 'react';

function SectionUserInput() {
	const [inputsValues, setInputsValues] = useState({
		// fill up with default first
		initialInvestment: 1000,
		annualInvestment: 1000,
		// %
		expectedReturn: 6,
		duration: 10,
	});

	function updateInput(event) {
		setInputsValues((prevValues) => {
			return {
				...prevValues,
				[event.target.name]: event.target.value,
			};
		});
	}

	console.log(inputsValues);
	return (
		<section id='user-input'>
			<div className='input-group'>
				<div>
					<label htmlFor='initialInvestment'>Initial Investment</label>
					<input
						type='number'
						name='initialInvestment'
						required
						value={inputsValues.initialInvestment}
						onChange={updateInput}
					/>
				</div>

				<div>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						name='annualInvestment'
						required
						value={inputsValues.annualInvestment}
						onChange={updateInput}
					/>
				</div>
			</div>
			<div className='input-group'>
				<div>
					<label htmlFor='expectedReturn'>Expected Return</label>
					<input
						type='number'
						name='expectedReturn'
						required
						value={inputsValues.expectedReturn}
						onChange={updateInput}
					/>
				</div>
				<div>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						name='duration'
						required
						value={inputsValues.duration}
						onChange={updateInput}
					/>
				</div>
			</div>
		</section>
	);
}

export default SectionUserInput;

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
		setInputsValues({
			...prevValues,
			[event.target.name]: event.target.value,
		});
	}

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
					/>
				</div>

				<div>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						name='annualInvestment'
						required
						value={inputsValues.annualInvestment}
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
					/>
				</div>
				<div>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						name='duration'
						required
						value={inputsValues.duration}
					/>
				</div>
			</div>
		</section>
	);
}

export default SectionUserInput;

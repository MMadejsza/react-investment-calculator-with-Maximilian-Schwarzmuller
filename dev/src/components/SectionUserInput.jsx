import React, {useState} from 'react';

function SectionUserInput({inputsValuesInitial, onInsert}) {
	let inputsValues = inputsValuesInitial;
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
						onChange={onInsert}
					/>
				</div>
				<div>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						name='annualInvestment'
						required
						value={inputsValues.annualInvestment}
						onChange={onInsert}
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
						onChange={onInsert}
					/>
				</div>
				<div>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						name='duration'
						required
						value={inputsValues.duration}
						onChange={onInsert}
					/>
				</div>
			</div>
		</section>
	);
}

export default SectionUserInput;

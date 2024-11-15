import React, {useState} from 'react';

function SectionUserInput() {
	const [state, setstate] = useState();

	return (
		<section id='user-input'>
			<div className='input-group'>
				<div>
					<label htmlFor='initialInvestment'>Initial Investment</label>
					<input
						type='number'
						name='initialInvestment'
						required
					/>
				</div>

				<div>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						name='annualInvestment'
						required
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
					/>
				</div>
				<div>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						name='duration'
						required
					/>
				</div>
			</div>
		</section>
	);
}

export default SectionUserInput;

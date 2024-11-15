import React, {useState} from 'react';
import Header from './components/Header';
import SectionUserInput from './components/SectionUserInput';
import Results from './components/Results';

function App() {
	const [inputsValues, setInputsValues] = useState({
		// fill up with default first
		initialInvestment: 15000,
		annualInvestment: 1200,
		// %
		expectedReturn: 6,
		duration: 10,
	});

	function updateInput(event) {
		setInputsValues((prevValues) => {
			return {
				...prevValues,
				// "+" is a shortcut to converse string to a number
				[event.target.name]: +event.target.value,
			};
		});
	}

	return (
		<>
			<Header />
			<SectionUserInput
				onInsert={updateInput}
				inputsValuesInitial={inputsValues}
			/>
			<Results values={inputsValues} />
		</>
	);
}

export default App;

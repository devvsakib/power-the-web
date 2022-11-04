import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

	const [inputValue, setInputValue] = useState('One Punch');

	const onInputChanged = (event) => {
		setInputValue(event.target.value)
	}
	const onSubmitForm = (e) => {
		e.preventDefault();
		const newInputValue = inputValue.trim();
		if(newInputValue.length <= 1) return;
		onNewCategory(newInputValue);
		setInputValue('');
	}

	return (
		<form onSubmit={onSubmitForm}>
			<input
				type="text"
				placeholder='placeholder'
				value={inputValue}
				onChange={onInputChanged}
			/>
		</form>
	)
}
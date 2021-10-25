import React from 'react';
import './search-box.styles.css';

interface SearchBoxProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

export const SearchBox = ({
	handleChange,
	placeholder = 'search',
}: SearchBoxProps) => (
	<input
		className='search'
		type='search'
		placeholder={placeholder}
		onChange={handleChange} // pass event to parent
	/>
);

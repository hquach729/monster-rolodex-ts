import * as React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

interface AppProps {
	name: string;
}
type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

export interface Monster extends User {}
export interface Robot extends User {}
export interface Cat extends User {}

type AppState = {
	monsters: Monster[];
	searchField: string;
};

class App extends React.Component<AppProps, AppState> {
	state: AppState = {
		monsters: [],
		searchField: '',
	};

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		this.setState({ monsters: users });
		console.log('monster', this.state.monsters);
	}
	// Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
	// We need to bound our custom class method, so this refer to our App object state
	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// arrow function automatically bind the this context where it first define
		this.setState({ searchField: event.target.value }, () => {
			console.log(this.state.searchField);
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonster = monsters.filter((monster) =>
			monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className='App'>
				<h1>Monster Rolodex</h1>
				<SearchBox
					placeholder='search monsters'
					handleChange={this.handleChange}
				/>
				<CardList data={filteredMonster}></CardList>
			</div>
		);
	}
}

export default App;

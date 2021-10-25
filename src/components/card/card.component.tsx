import type { Monster, Robot, Cat } from '../../App';
import './card.styles.css';

type HashRobot = Monster | Robot | Cat;

export interface CardProps<T> {
	data: T;
}

export const Card = ({ data }: CardProps<HashRobot>) => (
	<div className='card-container'>
		<img
			src={`https://robohash.org/${data.id}?set=set1&size=180x180`}
			alt='monster'
		/>
		<h2>{data.name}</h2>
		<p>{data.email}</p>
	</div>
);

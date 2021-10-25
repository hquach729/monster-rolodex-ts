import type { Monster, Robot, Cat } from '../../App';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export interface CardListProps<T> {
	data: T[];
}

type HashRobot = Monster | Robot | Cat;
export const CardList = ({ data }: CardListProps<HashRobot>) => (
	<div className='card-list'>
		{data.map((item) => (
			<Card key={item.id} data={item} />
		))}
	</div>
);

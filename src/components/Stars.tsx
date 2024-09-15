import Star from './Star';

interface StarsProps {
    count: number;
}

export default function Stars({ count }: StarsProps) {
    if (!Number.isInteger(count) || count < 1 || count > 5) {
        return (null); 
    }

    return (
        <ul className= "card-body-stars u-clearfix" >
        { Array(count).fill(1).map((el: number, i) => <li key={ i } > <Star /></li >) }
        </ul>
    );
}




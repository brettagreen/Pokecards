import Pokedex from './Pokedex';

const Pokegame = ({array}) => {
    const deck1 = [];
    const deck2 = [];
    let idx;
    const arrayLength = array.length;
    
    for (let x=0; x < arrayLength; x++) {
        idx = Math.floor(Math.random() * array.length);
        if (x % 2 === 0) {
            deck1.push(array[idx]);
        } else {
            deck2.push(array[idx]);
        }
        array.splice(idx, 1);
    }

    const d1exp = deck1.reduce((acc, nextVal) => {
        return acc + nextVal.base_experience;
    }, 0);

    const d2exp = deck2.reduce((acc, nextVal) => {
        return acc + nextVal.base_experience;
    }, 0);

    return (
        <div>
            <Pokedex key={1} deck={deck1} exp={d1exp} isWinner={d1exp >= d2exp} />
            <Pokedex key={2} deck={deck2} exp={d2exp} isWinner={d2exp >= d1exp} />
        </div>
    );
}

export default Pokegame;
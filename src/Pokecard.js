import './Pokecard.css';

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <h3>{props.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name + '_poke'} />
            <h4>{props.type}</h4>
            <h4>{props.base_experience}</h4>
        </div>
    );
}

export default Pokecard;
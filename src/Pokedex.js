import Pokecard from "./Pokecard";
import './Pokedex.css';

const Pokedex = (props) => {
    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {props.deck.map((p) => {
                    return <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                })}
            </div>
            <h3>Your total deck experience is {props.exp}</h3>
            <div className="Pokedex-outcome">
                {props.isWinner ? <h3>WINNER WINNER CHICKEN DINNER</h3> : <h4>THOU HAST LOST. THOU MUST TRYETH AGAINE</h4>}
            </div>
        </div>
    );
}

export default Pokedex;
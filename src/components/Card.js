import '../styles/Card.css';

function Card(props) {

  function handleCardSelection(e){
    console.log(e.target.id)
}

    return (
      <div className="Card" id = {props.name} onClick = {handleCardSelection} style = {{backgroundColor: `${props.color}`}}>
      </div>
    );
  }
  
  export default Card;
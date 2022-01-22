import '../styles/Card.css';

function Card(props) {

    return (
      <div className="Card" 
        id = {props.id} 
        style = {{backgroundColor: `${props.color}`}} 
        onClick = {props.action}>
      </div>
    );
  }
  
  export default Card;
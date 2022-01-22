import '../styles/Card.css';

function Card(props) {
    return (
      <div className="Card" style = {{backgroundColor: `${props.color}`}}>
        <h1> {props.name}</h1>
      </div>
    );
  }
  
  export default Card;
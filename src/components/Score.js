function Score(props) {

    return (
      <div className="Score">
          <h1>Score: {props.score}</h1>
          <h1>High Score: {props.highScore}</h1>
      </div>
    );
  }
  
  export default Score;
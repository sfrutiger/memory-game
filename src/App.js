import { useState } from 'react';
import Card from './components/Card';
import Score from './components/Score';
import Instructions from './components/Instructions';
import './styles/App.css';

function App(props) {

  const initialCards = [
    {
      id: '0',
      color: 'red',
      selected: false,
      position: ''
    },
    {
      id: '1',
      color: 'blue',
      selected: false,
      position: '' 
    },
    {
      id: '2',
      color: 'green',
      selected: false,
      position: '' 
    },
    {
      id: '3',
      color: 'yellow',
      selected: false,
      position: '' 
    },
    {
      id: '4',
      color: 'purple',
      selected: false,
      position: '' 
    },
    {
      id: '5',
      color: 'pink',
      selected: false,
      position: '' 
    },
    {
      id: '6',
      color: 'teal',
      selected: false,
      position: '' 
    },
    {
      id: '7',
      color: 'orange',
      selected: false,
      position: '' 
    },
    {
      id: '8',
      color: 'grey',
      selected: false,
      position: ''
    }
  ];

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [cards, setCards] = useState(initialCards);

  function randomizeOrder () {
        cards.forEach(card =>
        card.position = Math.random()
        );
        cards.sort(function(a,b) {return a.position - b.position})
  }

  randomizeOrder();

  function handleCardSelection(e){
      randomizeOrder();
      const selectedId = e.target.id;
      let updatedCards = [...cards];
      const index = updatedCards.map(card => card.id).indexOf(selectedId);
      let selectedCard = {...updatedCards[index]};
      if (selectedCard.selected === true){
        setCards(initialCards);
        setScore(0);
      } else {
        /* selectedCard.color = 'white'; */
        selectedCard.selected = true;
        updatedCards[index] = selectedCard;
        setScore(score + 1);
        setCards(updatedCards);
        if (highScore <= score) {
          setHighScore(score + 1);
        }
      }
  }

  return (
    <div className="App">
      {props.children}
      < Instructions />
      <div className="Board">
      {cards.map(function(card, index){
        return < Card 
        key={index}
        id = {card.id}
        color = {card.color} 
        action = {handleCardSelection}/>;
      })}
      </div>
    < Score score = {score} highScore = {highScore}/>
    </div>
  );
}

export default App;

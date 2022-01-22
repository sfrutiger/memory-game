import { useEffect, useState } from 'react';
import Card from './components/Card';
import './styles/App.css';

function App(props) {

  const [cards, setCards] = useState(
    [
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
        color: 'black',
        selected: false,
        position: '' 
      },
      {
        id: '8',
        color: 'grey',
        selected: false,
        position: ''
      }
    ]
  )

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
      selectedCard.color = 'white';
      updatedCards[index] = selectedCard;
      setCards(updatedCards);
      console.log(cards[0].position);
  }

  return (
    <div className="App">
      {props.children}
      {cards.map(function(card, index){
        return < Card 
        key={index}
        id = {card.id}
        color = {card.color} 
        action = {handleCardSelection}/>;
      })}
    </div>
  );
}

export default App;

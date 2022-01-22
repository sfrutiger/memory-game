import { useState } from 'react';
import Card from './components/Card';
import './styles/App.css';

function App(props) {

  const [cards, setCards] = useState(
    [
      {
        id: '0',
        color: 'red',
        selected: false
      },
      {
        id: '1',
        color: 'blue',
        selected: false 
      },
      {
        id: '2',
        color: 'green',
        selected: false 
      },
      {
        id: '3',
        color: 'yellow',
        selected: false 
      },
      {
        id: '4',
        color: 'purple',
        selected: false 
      },
      {
        id: '5',
        color: 'pink',
        selected: false 
      },
      {
        id: '6',
        color: 'teal',
        selected: false 
      },
      {
        id: '7',
        color: 'black',
        selected: false 
      },
      {
        id: '8',
        color: 'grey',
        selected: false 
      }
    ]
  )

  function handleCardSelection(e){
      const selectedId = parseInt(e.target.id);
      let updatedCards = [...cards];
      let selectedCard = {...updatedCards[selectedId]};
      selectedCard.color = 'white';
      updatedCards[selectedId] = selectedCard;
      setCards(updatedCards);
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

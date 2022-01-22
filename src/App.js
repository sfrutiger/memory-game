import { useState } from 'react';
import Card from './components/Card';
import './styles/App.css';

function App(props) {

  const [cards, setCards] = useState(
    [
      {
        id: '1',
        color: 'red'
      },
      {
        id: '2',
        color: 'blue' 
      },
      {
        id: '3',
        color: 'green' 
      },
      {
        id: '4',
        color: 'yellow' 
      },
      {
        id: '5',
        color: 'purple' 
      },
      {
        id: '6',
        color: 'pink' 
      },
      {
        id: '7',
        color: 'teal' 
      },
      {
        id: '8',
        color: 'black' 
      },
      {
        id: '9',
        color: 'grey' 
      }
    ]
  )



  return (
    <div className="App">
      {props.children}
      {cards.map(function(card, index){
        return < Card key={index} name = {card.id} color = {card.color}/>;
      })}
    </div>
  );
}

export default App;

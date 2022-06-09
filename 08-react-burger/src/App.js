import React from 'react';
import Burger from './Burger';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: [
        { id: 1, name: 'Normal Burger', description: 'Un bon burger', image: 'https://foodish-api.herokuapp.com/images/burger/burger42.jpg', price: 8 },
        { id: 2, name: 'King Burger', description: 'Un burger de roi', image: 'https://foodish-api.herokuapp.com/images/burger/burger19.jpg', price: 10 },
        { id: 3, name: 'Double Burger', description: 'Un burger pour les grandes faims', image: 'https://foodish-api.herokuapp.com/images/burger/burger18.jpg', price: 12 }
      ],
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} />)}
      </div>
    );
  }
}

export default App;

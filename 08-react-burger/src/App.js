import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: [
        { name: 'Normal Burger', description: 'Un bon burger', image: 'https://foodish-api.herokuapp.com/images/burger/burger42.jpg', price: 8 },
        { name: 'King Burger', description: 'Un burger de roi', image: 'https://foodish-api.herokuapp.com/images/burger/burger19.jpg', price: 10 },
        { name: 'Double Burger', description: 'Un burger pour les grandes faims', image: 'https://foodish-api.herokuapp.com/images/burger/burger18.jpg', price: 12 }
      ],
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.burgers.map(burger =>
          <div className="burger flex">
            <img src={burger.image} alt={burger.name} />
            <div className="flex text">
              <div>
                <h2>{burger.name}</h2>
                <p>{burger.description}</p>
                <a className="btn" href="#">Voir</a>
              </div>
              <div className="price">{burger.price} €</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

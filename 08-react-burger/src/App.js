import axios from 'axios';
import React from 'react';
import Burger from './Burger';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: [],
      loading: true,
      selectedBurger: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/burgers').then(response => this.setState({ burgers: response.data, loading: false }));
  }

  selectBurger = (id) => {
    axios.get('http://localhost:3001/burgers/' + id).then(response => this.setState({ selectedBurger: response.data }));
  }

  stopBurger = () => { // On masque le burger sélectionné en repassant la valeur du state
    this.setState({ selectedBurger: null });
  }

  render() {
    if (this.state.loading) {
      return <div className="container"><Loader /></div>;
    }

    return (
      <div className="container">
        {this.state.selectedBurger
          ? <Burger burger={this.state.selectedBurger} onClick={this.stopBurger} />
          : this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} onClick={() => this.selectBurger(burger.id)} />)}
        {/*this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} onClick={() => this.selectBurger(burger.id)} />)*/}
      </div>
    );
  }
}

export default App;

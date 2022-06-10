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
      newName: '',
      newDescription: '',
      newPrice: 0,
      newImage: '',
    }
  }

  componentDidMount() {
    this.loadBurgers();
  }

  loadBurgers = () => {
    axios.get('http://localhost:3001/burgers').then(response => this.setState({ burgers: response.data, loading: false }));
  }

  selectBurger = (id) => {
    axios.get('http://localhost:3001/burgers/' + id).then(response => this.setState({ selectedBurger: response.data }));
  }

  stopBurger = () => { // On masque le burger sélectionné en repassant la valeur du state
    this.setState({ selectedBurger: null });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addBurger = () => {
    axios.post('http://localhost:3001/burgers', {
      name: this.state.newName,
      description: this.state.newDescription,
      price: this.state.newPrice,
      image: this.state.newImage,
    }).then(response => {
      this.setState({ newName: '', newDescription: '', newPrice: 0, newImage: '' });
      this.loadBurgers();
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="container"><Loader /></div>;
    }

    return (
      <div className="container">
        {this.state.selectedBurger
          ? <Burger burger={this.state.selectedBurger} onClick={this.stopBurger} selected />
          : this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} onClick={() => this.selectBurger(burger.id)} />)}
        {/*this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} onClick={() => this.selectBurger(burger.id)} />)*/}

        <div className="form">
          <input type="text" name="newName" value={this.state.newName} onChange={this.handleChange} className="input" placeholder="Nom" />
          <textarea name="newDescription" value={this.state.newDescription} onChange={this.handleChange} className="input" placeholder="Description"></textarea>
          <input type="number" name="newPrice" value={this.state.newPrice} onChange={this.handleChange} className="input" placeholder="Prix" />
          <input type="text" name="newImage" value={this.state.newImage} onChange={this.handleChange} className="input" placeholder="Image" />

          <button className="btn" onClick={this.addBurger} disabled={!this.state.newName || !this.state.newDescription || this.state.newPrice <= 0 || !this.state.newImage}>Ajouter</button>
        </div>
      </div>
    );
  }
}

export default App;

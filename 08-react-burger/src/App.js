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
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/burgers').then(response => this.setState({ burgers: response.data, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div className="container"><Loader /></div>;
    }

    return (
      <div className="container">
        {this.state.burgers.map(burger => <Burger burger={burger} key={burger.id} />)}
      </div>
    );
  }
}

export default App;

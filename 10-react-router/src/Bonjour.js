import React from 'react';
import { withRouter } from './index';

class Bonjour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }
  componentDidUpdate(prevProps) {
    console.log('AJAX', prevProps, this.props);
  }

  hello = () => {
    this.props.router.navigate(`/bonjour/${this.state.search}`);
  }

  render() {
    return (
      <div>
        <h1>Bonjour {this.props.router.params.name}</h1>

        <input type="text" value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} />
        <button onClick={this.hello}>Bonjour</button>
      </div>
    );
  } 
}

export default withRouter(Bonjour);

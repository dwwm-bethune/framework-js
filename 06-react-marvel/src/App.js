import DC from './DC';
import Marvel from './Marvel';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { name: 'Tony Stark', hero: 'Iron Man', avatar: 'tony-stark.jpg', avatarHero: 'iron-man.jpg', comics: 'marvel'},
        { name: 'Bruce Wayne', hero: 'Batman', avatar: 'bruce-wayne.jpg', avatarHero: 'batman.jpg', comics: 'dc'},
        { name: 'Peter Parker', hero: 'Spider Man', avatar: 'peter-parker.jpg', avatarHero: 'spider-man.jpg', comics: 'marvel'},
      ],
      name: '',
    };
  }

  handleChange = (event) => {
    if (event.target.value == 'fiorella') {
      event.target.value += ' <3';
    }

    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <h2>Exercice 1 Marvel</h2>
        <Marvel name="Tony Stark"
          hero="Iron Man"
          avatar="tony-stark.jpg"
          avatar-hero="iron-man.jpg" />
        <DC hero={{
          name: 'Bruce Wayne',
          hero: 'Batman',
          avatar: 'bruce-wayne.jpg',
          avatarHero: 'batman.jpg'
        }} />
        <h2>Exercice 2 Marvel Liste</h2>
        <div className="flex">
          {/*<DC hero={this.state.characters[2]} />*/}
          {this.state.characters.filter(character => {
            // On filtre les personnages par rapport à leur comics et au select
            return this.state.name == '' || character.comics == this.state.name
          }).map((character, index) =>
            character.comics == 'dc'
              ? <DC key={index} hero={character} />
              : <Marvel key={index} name={character.name} hero={character.hero} avatar={character.avatar} avatar-hero={character.avatarHero} />
          )}
        </div>
        <h2>Formulaires avec React</h2>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <h1>{this.state.name}</h1>
        <select value={this.state.name} onChange={this.handleChange}>
          <option value="">Sans filtre</option>
          <option value="dc">DC</option>
          <option value="marvel">Marvel</option>
        </select>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default App;

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
    };
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
          {this.state.characters.map((character, index) =>
            character.comics == 'dc'
              ? <DC key={index} hero={character} />
              : <Marvel key={index} name={character.name} hero={character.hero} avatar={character.avatar} avatar-hero={character.avatarHero} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

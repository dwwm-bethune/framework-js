import React from 'react';
import Quizz from './Quizz';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { question: 'Combien font 1 + 1 ?', responses: [2, 4, 5, 10], correct: 0 },
        { question: 'Combien font 2 + 1 ?', responses: [5, 4, 3, 10], correct: 2 },
        { question: 'Combien font 3 + 1 ?', responses: [5, 4, 3, 10], correct: 1 }
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <Quizz questions={this.state.questions} />
      </div>
    );
  }
}

export default App;

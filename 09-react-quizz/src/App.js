import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { question: 'Combien font 1 + 1 ?', responses: [2, 4, 5, 10], correct: 0 },
        { question: 'Combien font 2 + 1 ?', responses: [5, 4, 3, 10], correct: 2 },
        { question: 'Combien font 3 + 1 ?', responses: [5, 4, 3, 10], correct: 1 }
      ],
      currentStep: 0,
    };
  }

  render() {
    let currentQuestion = this.state.questions[this.state.currentStep];

    return (
      <div className="app">
        <div className="quizz">
          <p className="step">Question {this.state.currentStep + 1}/{this.state.questions.length}</p>
          <div className="question">
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.responses.map((response, index) =>
              <button className="response" key={index}>{response}</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Confetti from 'react-confetti';

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
      score: 0,
    };
  }

  nextStep = (response) => {
    let currentQuestion = this.state.questions[this.state.currentStep];
    let newScore = this.state.score;

    if (response == currentQuestion.responses[currentQuestion.correct]) {
      newScore++;
    }

    this.setState({ currentStep: this.state.currentStep + 1, score: newScore });
  }

  retry = () => {
    this.setState({ currentStep: 0, score: 0 });
  }

  render() {
    // Si l'étape actuelle dépasse la taille du tableau, on affiche l'écran du score
    if (this.state.currentStep >= this.state.questions.length) {
      let hasConfetti = (this.state.score * 100 / this.state.questions.length) >= 60;

      return (
        <div className="app">
          <div className="score">
            <h2>Votre score est {this.state.score} / {this.state.questions.length} !</h2>
            <button className="retry" onClick={this.retry}>Recommencer</button>
            {hasConfetti && <Confetti />}
          </div>
        </div>
      );
    }

    let currentQuestion = this.state.questions[this.state.currentStep];

    return (
      <div className="app">
        <div className="quizz">
          <p className="step">Question {this.state.currentStep + 1}/{this.state.questions.length}</p>
          <div className="question">
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.responses.map((response, index) =>
              <button className="response" key={index} onClick={() => this.nextStep(response)}>{response}</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Confetti from 'react-confetti';

class Quizz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentStep: 0,
          score: 0,
        };
    }

    nextStep = (response) => {
        let currentQuestion = this.props.questions[this.state.currentStep];
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
        if (this.state.currentStep >= this.props.questions.length) {
            let hasConfetti = (this.state.score * 100 / this.props.questions.length) >= 60;
    
            return (
                <div className="app">
                    <div className="score">
                        <h2>Votre score est {this.state.score} / {this.props.questions.length} !</h2>
                        <button className="retry" onClick={this.retry}>Recommencer</button>
                        {hasConfetti && <Confetti />}
                    </div>
                </div>
            );
        }

        let currentQuestion = this.props.questions[this.state.currentStep];

        return (
            <div className="quizz">
                <p className="step">Question {this.state.currentStep + 1}/{this.props.questions.length}</p>
                <div className="question">
                    <h2>{currentQuestion.question}</h2>
                    {currentQuestion.responses.map((response, index) =>
                        <button className="response" key={index} onClick={() => this.nextStep(response)}>{response}</button>
                    )}
                </div>
            </div>
        )
    }
}

export default Quizz;

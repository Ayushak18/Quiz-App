import React from 'react';
import '../quiz.css';
import Report from './reportCard';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      questions: '',
      questionNumber: 0,
      answer: '',
      answers: [],
    };
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    let response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${this.props.match.params.id}&difficulty=${this.props.match.params.difficulty}`
    );

    let data = await response.json();
    this.setState({
      questions: data.results,
    });
  };

  checkQuestions = () => {
    if (this.state.questions) {
      return (
        <form>
          <p>Question Number - {this.state.questionNumber + 1}</p>
          <label>
            {this.state.questions[this.state.questionNumber].question}
            <div>
              <label>
                {this.state.questions[this.state.questionNumber].correct_answer}
                <input
                  type="radio"
                  name="selectedAnswer"
                  onClick={this.handleRadioAnswer}
                  value={
                    this.state.questions[this.state.questionNumber]
                      .correct_answer
                  }
                />
              </label>
            </div>
            {this.state.questions[
              this.state.questionNumber
            ].incorrect_answers.map((answers) => {
              return (
                <label>
                  <div>
                    {answers}

                    <input
                      type="radio"
                      onClick={this.handleRadioAnswer}
                      value={answers}
                      name="selectedAnswer"
                    />
                  </div>
                </label>
              );
            })}
          </label>
          {this.state.answer ? (
            <button onClick={this.handleNextQuestion}>Next</button>
          ) : (
            ''
          )}
        </form>
      );
    }
  };

  handleRadioAnswer = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  handleNextQuestion = (event) => {
    event.preventDefault();
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      answers: [...this.state.answers, this.state.answer],
      answer: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Quiz</h1>
        {this.state.questionNumber <= 9 ? (
          this.checkQuestions()
        ) : (
          <Report
            answers={this.state.answers}
            questions={this.state.questions}
          />
        )}
      </div>
    );
  }
}

export default Quiz;

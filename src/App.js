import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: '',
      selectedCategory: '',
      difficulty: '',
      step: 1,
    };
  }
  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => this.setState({ categories: data.trivia_categories }));
  }

  showCategory = () => {
    if (this.state.categories) {
      return (
        <div>
          <h2 className="category-title">Categories</h2>
          {this.state.categories.map((eachCategory, index) => (
            <a
              href="/"
              onClick={this.handleClick}
              className="category-button"
              data-id={eachCategory.id}
            >
              {eachCategory.name}
            </a>
          ))}
        </div>
      );
    } else {
      return <div className="loader"></div>;
    }
  };

  showDifficultyLevel = () => {
    if (this.state.selectedCategory) {
      return (
        <div className="difficulty">
          <h1>Choose Diificulty Level</h1>
          <select onChange={this.handleSelect}>
            <option value="" key="">
              Select Difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium" key="">
              Medium
            </option>
            <option value="hard" key="">
              Hard
            </option>
          </select>
        </div>
      );
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      selectedCategory: event.target.dataset.id,
      step: 2,
    });
  };

  handleSelect = (event) => {
    this.setState({
      difficulty: event.target.value,
      step: 3,
    });
  };

  controlUI = () => {
    if (this.state.step === 1) {
      return this.showCategory();
    } else if (this.state.step === 2) {
      return this.showDifficultyLevel();
    } else if (this.state.step === 3) {
      return (
        <a
          className="start-quiz"
          href={`/quiz/${this.state.difficulty}/${this.state.selectedCategory}`}
        >
          Start Quiz
        </a>
      );
    }
  };

  render() {
    return (
      <div>
        <h1 className="quiz-heading">Quiz Application</h1>
        {this.controlUI()}
      </div>
    );
  }
}

export default App;

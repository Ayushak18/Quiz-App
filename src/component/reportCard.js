import React from 'react';
import '../reportCard.css';

function Report(props) {
  return (
    <div className="data">
      <div className="flex">
        <div className="serial-number">
          <h4>S No.</h4>
          {props.answers.map((answer, index) => {
            return (
              <>
                <p>{index + 1}</p>
              </>
            );
          })}
        </div>

        <div className="questions">
          <h4>Question</h4>
          {props.questions.map((question) => {
            return <p>{question.question}</p>;
          })}
        </div>
        <div className="answers">
          <h4>Answers</h4>
          {props.questions.map((question) => {
            return <p>{question.correct_answer}</p>;
          })}
        </div>
        <div className="user-answer">
          <h4>User Answers</h4>
          {props.answers.map((answer) => {
            return (
              <>
                <p>{answer}</p>
              </>
            );
          })}
        </div>
        <div className="user-answer">
          <h4>User Answers</h4>
          {props.answers.map((answer) => {
            return (
              <>
                <p>{answer}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>

    /* <table>
        <tr>
          <th>S No.</th>
          <th>Question</th>
          <th>Answer</th>
          <th>User Answer</th>
          <th>Right/Wrong</th>
        </tr>
        <tr>
          <td>
            {props.answers.map((answer, index) => {
              return (
                <>
                  <tr>{index + 1}</tr>
                </>
              );
            })}
          </td>
          <td>
            {props.questions.map((question) => {
              return <tr>{question.question}</tr>;
            })}
          </td>
          <td>
            {props.questions.map((question) => {
              return <tr>{question.correct_answer}</tr>;
            })}
          </td>
          <td>
            {props.answers.map((answer) => {
              return (
                <>
                  <tr>{answer}</tr>
                </>
              );
            })}
          </td>
        </tr>
        {/* <tr>
          <th>S No.</th>
          <th>Question</th>
          <th>Answer</th>
          <th>User Answer</th>
          <th>Right/Wrong</th>
        </tr>

        <tr>
          {props.answers.map((answer, index) => {
            return (
              <>
                <td>{index + 1}</td>
              </>
            );
          })}

          {props.answers.map((answer, index) => {
            return (
              <>
                <tr>{answer}</tr>
              </>
            );
          })}
        </tr> */
    /* </table> */
    // </div>
  );
}

export default Report;

import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { quizQuestions } from "../data/quiz.js";

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const score = answers.filter((answer, index) => answer === quizQuestions[index].answer).length;
  const current = quizQuestions[questionIndex];
  const answered = Boolean(selected);

  function handleSelect(option) {
    if (answered) return;
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = option;
    setAnswers(nextAnswers);
    setSelected(option);
  }

  function handleNext() {
    if (!selected) return;
    if (questionIndex === quizQuestions.length - 1) {
      setShowResults(true);
      return;
    }

    const nextIndex = questionIndex + 1;
    setQuestionIndex(nextIndex);
    setSelected(answers[nextIndex] || "");
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelected("");
    setAnswers([]);
    setShowResults(false);
  }

  return (
    <section className="section section-gray" id="quiz">
      <div className="container quiz-container">
        <SectionHeader
          eyebrow="Self-assessment"
          title="Knowledge Check"
          text="Test your understanding of the core principles. Each answer includes a short rationale after the assessment."
        />

        {!showResults ? (
          <article className="quiz-card fade-in">
            <div className="quiz-progress">
              <span>Question {questionIndex + 1} of {quizQuestions.length}</span>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${((questionIndex + 1) / quizQuestions.length) * 100}%` }} />
              </div>
            </div>
            <h3>{current.prompt}</h3>
            <div className="options-grid">
              {current.options.map((option) => (
                <button
                  className={`option-button ${
                    answered && option === current.answer ? "correct" : ""
                  } ${answered && selected === option && option !== current.answer ? "incorrect" : ""} ${
                    !answered && selected === option ? "selected" : ""
                  }`}
                  type="button"
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={answered}
                >
                  {option}
                </button>
              ))}
            </div>
            {answered ? (
              <div className={`instant-feedback ${selected === current.answer ? "correct" : "incorrect"}`}>
                <strong>{selected === current.answer ? "Correct" : "Review"}</strong>
                <p>{current.rationale}</p>
              </div>
            ) : null}
            <button className="primary-button" type="button" onClick={handleNext} disabled={!selected}>
              {questionIndex === quizQuestions.length - 1 ? "View Results" : "Next"}
            </button>
          </article>
        ) : (
          <article className="quiz-card results-card fade-in">
            <div className="quiz-meta">Assessment complete</div>
            <h3>{score} of {quizQuestions.length} correct</h3>
            <p>{score >= 7 ? "Well done" : "Review recommended"}</p>
            <div className="answer-review">
              {quizQuestions.map((question, index) => {
                const correct = answers[index] === question.answer;
                return (
                  <div className={`review-item ${correct ? "correct" : "incorrect"}`} key={question.prompt}>
                    <strong>{correct ? "Correct" : "Review"}</strong>
                    <span>{question.rationale}</span>
                  </div>
                );
              })}
            </div>
            <div className="results-actions">
              <a className="primary-button" href="#modules">Return to Modules</a>
              <button className="secondary-button" type="button" onClick={restartQuiz}>Retake Quiz</button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

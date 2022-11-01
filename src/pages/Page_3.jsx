import React, { useState } from 'react'
import './SCSS/page_3.scss'

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0
  },
  {
    title: 'Компонент - це ... ',
    variants: ['програма', 'частина програми або сторінки', 'те, що я не знаю, що таке'],
    correct: 1
  },
  {
    title: 'Що таке JSX?',
    variants: ['Це простий HTML', 'Це функція', 'Це той же HTML, але з можливістю виконувати JS-код'],
    correct: 2
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви зробили {correct} правильні відповіді з {questions.length}</h2>
      <a href="/#/Page_3">
        <button>Спробувати знову</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round(step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1 style={{ padding: 10 }}>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) =>
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

export default function Page_3() {
  const [step, setStep] = useState(0);        // яке питання відображаеться на сторінці
  const [correct, setCorrect] = useState(0);  // кількість правильно вибраних відповідей
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="page_3-wrapper">
      <div className="Page_3">
        {step !== questions.length ? (
          <Game step={step} question={question} onClickVariant={onClickVariant} />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </div>
  )
}


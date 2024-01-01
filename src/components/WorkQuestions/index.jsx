import { useEffect, useRef } from 'react';
import './styles.css';
import P from 'prop-types';

export const WorkQuestions = ({ questions, responses }) => {

  const question = useRef(null);
  const questionButtons = useRef(null);
  const questionWrapper = useRef(null);
  const responseQuestions = useRef(null);

  useEffect(() => {

    question.current = document.querySelectorAll('.question');
    questionButtons.current = document.querySelectorAll('.question-button');
    questionWrapper.current = document.querySelectorAll('.question-wrapper');
    responseQuestions.current = document.querySelectorAll('.response');

    questionWrapper.current.forEach((elem, index) => {
      elem.addEventListener('mouseover', () => {
        question.current[index].classList.add('color-black');
        questionButtons.current[index].classList.add('bg_border-black');

      })
    })

    questionWrapper.current.forEach((elem, index) => {
      elem.addEventListener('mouseout', () => {
        question.current[index].classList.remove('color-black');
        questionButtons.current[index].classList.remove('bg_border-black');

      })
    })
  }, [])

  const handleClick = (index) => {
    let t = responseQuestions.current[index].classList;
    t.toggle('display-block');
    console.log(index)
  }

  return (
    <section id="questions">
      <div>
        <h2>Perguntas</h2>

        {questions.map((question, index) => {
          return (
            <div className="container-question" key={index}>
              <div className="question-wrapper" onClick={() => handleClick(index)}>
                <div className='question'>
                  <nav>
                    {question}
                  </nav>
                  <nav className='question-button'>
                  </nav>
                </div>
                <div className='response'>
                  {responses[index]}
                </div>
              </div>
            </div>
          )
        })}

        <div className="container-button">
          <button className="button" id='button-questions'>Aqui</button>
        </div>
      </div>

    </section >
  )
}

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Eveniet magni dolorem minima quasi eaque architecto, voluptates consectetur 
eius possimus explicabo fugit laboriosam nesciunt cupiditate deleniti nulla 
officia provident delectus ut.`

WorkQuestions.defaultProps = {
  questions: [
    'Pergunta 1',
    'Pergunta 2',
    'Pergunta 3',
    'Pergunta 4',
  ],
  responses: [
    lorem,
    lorem,
    lorem,
    lorem
  ]
}

WorkQuestions.propTypes = {
  questions: P.array,
  responses: P.array,
}
import { useState } from 'react';
import './styles.css';
import P from 'prop-types';

export const WorkQuestions = ({ questions, responses }) => {

  const [isOpen0, setIsOpen0] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  return (
    // <MagicMotion
    //   transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    // >
    <section id="questions">
      <div>
        <h2>Perguntas</h2>
        <div className="container-question">
          <div className="question-wrapper" onClick={() => setIsOpen0(!isOpen0)}>
            <div className='question'>
              <nav>
                {questions[0]}
              </nav>
              {/* <nav className='question-button'>
                  </nav> */}
              <svg
                key="exclude"
                style={{
                  transform: `rotate(${isOpen0 ? 180 : 0}deg)`,
                  transition: "320ms ease-in-out",
                }}
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10L15.6714 21L27.5 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isOpen0 && (
              <div className='response'>
                {responses[0]}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="container-question">
          <div className="question-wrapper" onClick={() => setIsOpen1(!isOpen1)}>
            <div className='question'>
              <nav>
                {questions[1]}
              </nav>
              {/* <nav className='question-button'>
                  </nav> */}
              <svg
                key="exclude"
                style={{
                  transform: `rotate(${isOpen1 ? 180 : 0}deg)`,
                  transition: "320ms ease-in-out",
                }}
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10L15.6714 21L27.5 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isOpen1 && (
              <div className='response'>
                {responses[1]}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="container-question">
          <div className="question-wrapper" onClick={() => setIsOpen2(!isOpen2)}>
            <div className='question'>
              <nav>
                {questions[2]}
              </nav>
              {/* <nav className='question-button'>
                  </nav> */}
              <svg
                key="exclude"
                style={{
                  transform: `rotate(${isOpen2 ? 180 : 0}deg)`,
                  transition: "320ms ease-in-out",
                }}
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10L15.6714 21L27.5 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isOpen2 && (
              <div className='response'>
                {responses[2]}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="container-question">
          <div className="question-wrapper" onClick={() => setIsOpen3(!isOpen3)}>
            <div className='question'>
              <nav>
                {questions[3]}
              </nav>
              {/* <nav className='question-button'>
                  </nav> */}
              <svg
                key="exclude"
                style={{
                  transform: `rotate(${isOpen3 ? 180 : 0}deg)`,
                  transition: "320ms ease-in-out",
                }}
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10L15.6714 21L27.5 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isOpen3 && (
              <div className='response'>
                {responses[3]}
              </div>
            )}
          </div>
        </div>
        {/*  */}

        <div className="container-button">
          <button className="button" id='button-questions'>
            <a href="https://wa.me/+5519974074929" target='_blank' rel="noreferrer">
              Aqui
            </a>
          </button>
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
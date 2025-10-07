import React from 'react';
import { useState } from 'react'

//always make a different component for different things
//do not complicate things
//first pseudo code, divide components you want to have
//then start building those components

function App() {

  const [quizdata, setQuizData] = useState([{
    question: "Which language runs in a web browser?",
    answer: "Javascript",
    id: 1
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    id: 2
  },
  {
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    id: 3
  },
  {
    question: "What year was JavaScript launched?",
    answer: "1995",
    id: 4
  },
  {
    question: "What does MOC stand for?",
    answer: "Men of culture",
    id: 5
  },
  ]
  )

  const [activeId, setActiveId] = useState(null);

  //every quiz element has gets its quiz id
  //active id is set to be null 
  //when you first time clicks the show answer
  //onclick function runs it sees that ternary operator results in setting activeId since it turns to be false
  //the next time activeId has a value but when you click another one it still results in false
  const quizComponents = quizdata.map(quiz =>
    <QuizComponent
      key={quiz.id} // Add a key for list rendering
      question={quiz.question}
      answer={quiz.answer}
      isOpen={quiz.id === activeId} // Is this component the active one?
      onClick={() => setActiveId(activeId === quiz.id ? null : quiz.id)} // Logic to open/close
    />
  )

  function QuizComponent({ question, answer, isOpen, onClick }) {

    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', maxWidth: '600px', margin: '20px auto' }}>
        <ul>

          <li>{question}</li>
          <button onClick={onClick}>{isOpen ? 'Hide Answer' : 'Show Answer'}</button>

          {isOpen && <p style={{ color: "blue" }}>{answer}</p>}

        </ul>

      </div>
    )
  }

  return (
    <div>
      {quizComponents}
    </div>
  )
}

export default App
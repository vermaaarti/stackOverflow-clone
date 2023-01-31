import React from 'react'
import './HomeMainbar.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate ();

     var questionsList = [{
        _id: 1,
        votes: 3,
        noOfAnswers: 2,
       questionTitle: "what is a function?",
       questionBody: "It meant to be",
       questionTags: ["java", "node js", "react js", "mongodb"],
       userPosted: "mano",
       userId: 1,
       askedOn: "jan 1",
       answer: [{
        answerBody: "Answer", 
        userAnswered: 'kumar',
        answeredOn: "jan 2",
        userId: 2,
        }]
      },
      {
        _id: 2,
        votes: 0,
        noOfAnswers: 0,
       questionTitle: "what is a function?",
       questionBody: "It meant to be",
       questionTags: ["java", "node js", "react js", "mongodb"],
       userPosted: "mano",
       askedOn: "jan 1",
       answer: [{
        answerBody: "Answer", 
        userAnswered: 'kumar',
        answeredOn: "jan 2",
        userId: 2,
        }]
      },
      {
        _id: 3,
        votes: 1,
        noOfAnswers: 0,
       questionTitle: "what is a function?",
       questionBody: "It meant to be",
       questionTags: ["java", "node js", "react js", "mongodb"],
       userPosted: "mano",
       askedOn: "jan 1",
      }]

     const checkAuth = () => {
      if(user === null){
        alert("login or signup to ask a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
     }
   
return (
  <div className='main-bar'>
    <div className='main-bar-header'>
    {
      location.pathname === '/'? <h1>Top Questions</h1> : <h1>All Questions</h1>
    }
    <Link onClick={checkAuth} className='ask-btn'>Ask Questions </Link>
    </div>
  <div className=''>
    {
      questionsList === null ? 
      <h1>Loading...</h1> :
       <>
       <p>{questionsList.length} questions</p>
      <QuestionList questionList={questionsList} /> 
       </>
     
    }
  </div>

    </div>
  )
}


export default HomeMainbar
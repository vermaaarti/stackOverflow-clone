import React from 'react'
import {useParams} from 'react-router-dom'
import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'

const QuestionsDetails = () => {
      
    const {id} = useParams()
           var questionsList = [{
              _id: '1',
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
              _id: '2',
              votes: 0,
              noOfAnswers: 0,
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
              _id: '3',
              votes: 1,
              noOfAnswers: 0,
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
            }]

  return (
    <div className='question-details-page'>
     {
        questionsList === null ?
        <h1>Loading...</h1>:
        <>
        {
         questionsList.filter(question => question._id === id).map(question => (
            <div key={question._id}>
            <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container-2'>
                 <div className='question-votes'>
                    <img src="{upvote}" alt="" />
                   <p>{question.upVotes - question.downVotes}</p>
                   <img src="{downvote}" alt="" />
                 </div>
                </div>
            </section>
            </div>
         ))
        }
        </>
     }
    </div>
  )
    }

export default QuestionsDetails
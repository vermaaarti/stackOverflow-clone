import React from 'react'
import './RightSidebar.css'
import message from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import icon from '../../assets/icon.svg'

const Widget = () => {
  return (
    <div className='widget'>
    <h4>The Overflow blog</h4> 
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
        <img  src={pen} alt="pen" width='18' />
        <p>Observability is key to the future of software (and your DevOps career)</p>
        </div> 
    <div className='right-sidebar-div-2'>
        <img  src={pen} alt="pen" width='18' />
        <p>Podcast 374: How valuable is your screen name?</p>
        </div>         
    </div>

    <h4>Featured on Meta</h4> 
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
        <img  src={message} alt="message" width='18' />
        <p>Review queue workflows - Final release....</p>
        </div> 
    <div className='right-sidebar-div-2'>
        <img  src={message} alt="pen" width='18' />
        <p>Please welcome Valued Associates: </p>
        </div>  
    <div className='right-sidebar-div-2'>
        <img  src={icon} alt="pen" width='18' />
        <p>Outdated Answers: accepted on Stack Overflow</p>
        </div>       
    </div>

    <h4>Hot Meta Posts</h4> 
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
        <img  src={pen} alt="pen" width='18' />
        <p>38</p>
        <p>Why was this span flag declined, yet </p>
        </div> 
    <div className='right-sidebar-div-2'>
        <img  src={pen} alt="pen" width='18' />
        <p>38</p>
        <p>What is the best course of action wh</p>
        </div>  
    <div className='right-sidebar-div-2'>
        <img  src={pen} alt="pen" width='18' />
        <p>38</p>
        <p>Is a link to the "How to ask" help </p>
        </div>       
    </div>


    </div>
  )
}

export default Widget
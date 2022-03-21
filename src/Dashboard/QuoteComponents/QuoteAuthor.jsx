import React from 'react'


export default function QuoteAuthor(props) {
  return (
    <div className='quote-author' style={{color:props.color}}>
       <span id='author'>{props.author} </span> 
    </div>
  )
}

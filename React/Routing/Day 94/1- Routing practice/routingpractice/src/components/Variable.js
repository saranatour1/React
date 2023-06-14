import React from 'react'
import {useParams} from 'react-router-dom';



function Variable() {
  const { pathVariable,color1 ,backGroundColor } = useParams(); 


  return (
    <div style={{backgroundColor:backGroundColor ? backGroundColor : 'white'}}>
      <p style={{color: color1 ? color1 : 'black'}}> {isNaN(pathVariable) ? "The word is :" +"    "+ pathVariable : "the Number is" +"    "+ pathVariable }</p>
    </div>
  )
}

export default Variable;
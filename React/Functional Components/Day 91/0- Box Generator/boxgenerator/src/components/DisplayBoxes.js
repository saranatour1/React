import React  from 'react'

function DisplayBoxes(props) {
  // const style1  = (elem) => {{"width": 50, "height" : 50, "backgroundColor" : elem}};
  // console.log(props.sendColor, "KI am in the display element");
  return (
    <div style={{display : 'flex', margin: 1 ,  flexWrap: 'wrap' }}>
      {props.sendColor.map((elem, idx) => <div key={idx} style={{width: elem[1] +'px', height: elem[1]+'px', backgroundColor: elem[0], flex: '1 0 21%'}}> {elem} </div>)}
    </div>
  )
}

export default DisplayBoxes;


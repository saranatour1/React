import React , {useState} from 'react'

function FormInputs(props) {
  const [color, setColor] = useState("");
  const [myArray, setMyArray] = useState([]);
  const [dim, setDim] = useState(0);

  const fun1 =(e) =>{
    e.preventDefault();
    // props.addColor(color);
    // addElement();
    props.addColor(myArray);

    // setColor("");
    // console.log("this is what I got from the form" , color);
  };


  const addElement = () => {
    const newArray = [...myArray,[color,dim]];
    setMyArray(newArray);
  };

  return (
    <div>
      <form onSubmit= {(e)=>fun1(e)}>
        <input type="text" onChange= {(e)=> {setColor(e.target.value); /*console.log(e.target.value)*/}} value={color} />
        <input type="number"  onChange= {(e)=> {setDim(e.target.value); /*console.log(e.target.value)*/}}/>
        <input type= "submit" onClick={ () => {addElement(); setColor("");} }/>
      </form>
    </div>
  )
}

export default FormInputs;

// const [myArray, setMyArray] = useState([]);
// const box = props.sendColor;
// console.log(box);
// const addElement = () => {
//     // Create a new array by spreading the existing elements and adding the new element
//     const newArray = [...myArray,box];
  
//     // Update the state with the new array
//     setMyArray(newArray);

//   };
    

//   // addElement();

//   console.log(myArray);

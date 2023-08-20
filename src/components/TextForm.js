import { useState } from "react"
import React  from 'react'

export default function (props) {
  const handleUpClick=()=>{
    let newText=text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");

  }
  const handleClClick=()=>{
    let newText=("");
    setText(newText);
  }
  const handleCapitalization=()=>{
    const arr = text.split(" ");

    //loop through each element of the array and capitalize the first letter.
    
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    
    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const str2 = arr.join(" ");
    setText(str2);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has cleared","success");

  }
  const handleOnChange=(event )=>{
    console.log("on chnage ");
    setText(event.target.value)
  }
  const handleLwClick=(event )=>{
    let newText1=text.toLocaleLowerCase();
    setText(newText1);
    props.showAlert("converted to lowwer case","success");
  }
    const [text,setText]=useState('');
  return (
    <>
    <div>
        <div className={ `container mb-3 ${props.txtMode}`}>
        <h2><label id="myBox" className={`}form-label ${props.txtMode}`}>{props.heading}</label></h2>
        <textarea className={`form-control ${props.txtMode} bg-${props.mode} `} onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder="Enter Text Here"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-info mx-2' onClick={handleLwClick}>Convert to LowerCase</button>
        <button className='btn btn-success mx-2' onClick={handleClClick}>Clear</button>
        <button className='btn btn-info mx-2' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        <button className='btn btn-warning mx-2' onClick={handleCapitalization}>Capitalize First Letter</button>



    </div>
    <div className={`container ${props.txtMode}` }>
      <h1 className="margin-top:5px">Your Text Summary</h1>
      <p>{(text.split(" ").length)-1} words and {text.length} charachetrs</p>
      <p>{text.split("").length * .008} minutes for reading</p>
      <p>{text.split(".").length - 1} Sentences</p>
      <h3> Preview</h3>
      <p>{text.length>0?text:"enter something in above textbox to preview it here."}</p>


    </div>
    </>
  )
}

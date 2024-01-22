import React, { useState } from 'react'
import './App.css';

export default function Text(props) {
    const [Text,setText] = useState('');

    const UPclick =()=>{
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to Uppercase","success");
    }

    const DOWNclick =()=>{
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to Lowercase","warning");
    }

    const CLEARclick =()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been Cleared","danger");
    }

    const ONchange =(event)=>{
        setText(event.target.value);
    }

  return (
    <>
    <div className='container'>
      <h1 className='headings'>Text Converter</h1>
      <textarea onChange={ONchange} style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#212529'}} value={Text} placeholder="Enter the Text" className="form-control" rows="8" id="myBox"></textarea>
      <br />
      <button onClick={UPclick} disabled={Text.length===0}className='btn btn-primary mx-2 my-2'>Upper Case</button>
      <button onClick={DOWNclick} disabled={Text.length===0}className='btn btn-primary mx-2 my-2'>Lower Case</button>
      <button onClick={CLEARclick} disabled={Text.length===0}className='btn btn-primary mx-2 my-2'>Clear</button>
      <br />
      <br />
    </div>

    <div className='container'>
      <h1 className='headings'>Details</h1>
      <h3 className='headings'>Total Characters: {Text.length}</h3>
      <h3 className='headings'>Total Words: {Text.split(/\s+/).filter((element)=>{return element.length>0}).length}</h3>
    </div>
    </>
  )
}

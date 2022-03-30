import React, {useState} from 'react'


export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked!"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick=()=>{
        // console.log("Lowercase was clicked!"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("TextArea value changed!")
        setText(event.target.value)
    }
    const handleClearClick=(event)=>{
        let newText=""
        setText(newText)
        props.showAlert("Text cleared!","success");
    }
    const handleCopy=(event)=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}} id="myBox" rows="8" value={text}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {text.split(" ").length * 0.08} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text!"}</p>
        </div>
        </>
  )
}

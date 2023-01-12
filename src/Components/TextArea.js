import React, { useState } from 'react'

const TextArea = (props) => {
    const [text, setText] = useState('')

    const handleOnChange =(e)=>{
        setText(e.target.value)
    }

    const handleUperClick =() =>{
        const newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowerClick =()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleUperEachClick = () =>{
        const lower = text.toLowerCase();
        const lower2 = lower.charAt(0).toUpperCase() + lower.slice(1);
        setText(lower2);
        props.showAlert("Converted to Capitalizeed Each Word", "success")
    }

    const handleExtraSpaceClick =()=>{
        console.log(text)
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces", "success")
    };

    const handleClearClick =()=>{
        const newText = "";
        setText(newText);
        props.showAlert("Clear all text", "success")
    }

    const handleCopy =() =>{
        const text = document.getElementById('text-box');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy all text", "success")
    }

  return (
    <>
        <div className='container' style={{ color : props.mode === 'dark' ? 'white' : '#000'}}>
            <h3 className='text-center' style={{marginTop : 75, fontSize : 38}}><span><b><u>Try Word-Converter</u></b></span> : - <span style={{fontSize : 23, fontWeight : 600}}>Word Counter, Character Counter, Remove Extra Spaces...</span></h3>
            <textarea className='form-control mt-3 text_area' placeholder='Enter text here..' onChange={handleOnChange} value={text} id="text-box" rows="8"></textarea>
            <div className='mt-2'>
                <button disabled={text.length === 0} className='btn btn_changer m-1' onClick={handleUperClick} >Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn_changer m-1' onClick={handleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className='btn btn_changer m-1' onClick={handleUperEachClick}>Capitalize Each Word</button>
                <button disabled={text.length === 0} className='btn btn_changer m-1' onClick={handleExtraSpaceClick}>Remove Extra Space</button>
                <button disabled={text.length === 0} className='btn btn_changer m-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn_changer m-1' onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='pt-3'>
                <h4><b><u>Your text summery</u></b></h4>
                <p>{text.split(/\s+/).filter((e)=>{return e.length !== 0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read.</p>
                <h5><b>Preview</b></h5>
                <p> {text.length > 0 ?  text : "Enter something preview to it"} </p>
            </div>
        </div>
    </>
  )
}

export default TextArea
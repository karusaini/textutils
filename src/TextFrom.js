import React,{useState} from 'react'


export default function TextFrom (props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    // console.log("Lowercase was clicked:" + text);
    let newText ="";
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.selected();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleTitleCaseClick = ()=>{
    // console.log("Lowercase was clicked:" + text);
    // let newText =text."TitleClick";
    // setText(newText)
    // props.showAlert("Show the title!", "success");
  }
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }



  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }



  
  const [text, setText] = useState('');
// text = "new text";  // wrong way to change the state
//setText("new text"); // correct way to change the state 


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#5b586c'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
     color: props.mode==='dark'?'white':'#5b586c'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleTitleCaseClick}>Title Case</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Extra Space</button>
    
    
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#5b586c'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}

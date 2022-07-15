import React,{useState} from 'react'



export default function Textform(props) {
  
    const handleupclick=()=>{
        console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText)
    }
    const handleclearclick=()=>{
      
      let newText = ('');
      settext(newText)
  }

    const handleonchange=(event)=>{
      console.log("On change");
      settext(event.target.value)
    }
    const[text,settext]=useState('enter the text');
  
  
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h1>{props.title}</h1>
            
            <textarea className="form-control" onChange={handleonchange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
            
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>Convert to Upper case </button>
        <button className="btn btn-primary mx-3" onClick={handleclearclick}>clear up the text.</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}} >
      <h1 >Your text summary.</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
    </div>
    </>
  )
}

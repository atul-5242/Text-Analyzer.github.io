import React , {useState} from 'react'
// STATE and HOOKS Concept in video no.7


export default function Textform(props) {
  const handleUpClick=()=>{
    // console.log("Up click is clicked"+text)

    // setText(text.toUpperCase());//not do like this do like this :--->
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnchange=(event)=>{
  console.log("On Change")
  setText(event.target.value)//ye handlUp click or on chnge wala don { const [text, setText] = useState('Enter Text here');      }   upar neche khi par bhi lekhe wo text khi se bhi access ho skata hai.
}
  const [text, setText] = useState('');
  // console.log(setText);
  


  return (
    
    <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" placeholder='Enter Text Here...' value={text} onChange={handleOnchange} id="mybox" rows="6"></textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper-Case</button>
</div>
    
  )
}

import React, { useState } from 'react';

export default function Textform (props){
    const [text, setText] = useState("Enter text here");
    let newText;
    function handelOnClick(){
        console.log("\""+text+"\""+"-- conver it to upper case");
        newText = text.toUpperCase();
        // setText(newText);

        //my way 
        let output = document.getElementById("outputArea");
        output.innerHTML = newText;
    };
    function handelOnChange(event){
        console.log("user is changing something");
        setText(event.target.value);
    };
    return (
        <div>
            <h1>{props.heading}</h1>
            <textarea name="textobx" id="box" cols="30" rows="10" value={text} onChange={handelOnChange}></textarea>
            <button onClick={handelOnClick}>Capitlize</button>
            <div id="outputArea">output will be here</div>
        </div>
    )
}
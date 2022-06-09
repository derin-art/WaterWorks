import React from "react";

export default function option(props){
   
    let style = ""
    if(props.checked){
        if(props.isRightOption){
            style = `text-green-900 font-semibold`
        }
        else{
            style = `text-gray-400`
        }
    }
    return <button 
    check = {props.check}
    no = {props.questionNo}
    id = {props.id}
    data-could = {props.questionNo}
    className= {`mr-4 py-1 px-6
    md:py-0
    ${props.isSelected ? "bg-indigo-200" : "bg-green-300"} border rounded-xl 
    hover:outline hover:outline-indigo-300
    hover-border-none hover:outline-2 mb-2 ${style}`} onClick={(event)=>{props.handleClick(event)}}
    
     data-valuable = {props.Option}
     
     >

    {props.Option.replaceAll("&quot","'").replaceAll("&#039;", "'").replaceAll("&amp", "'")}
    </button>
}
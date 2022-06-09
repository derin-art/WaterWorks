import React from "react";
import { ReactDOM } from "react";
import "../App.css"
import { decode } from "html-entities";



export default function QuestionsRender(props){

    return <div className="flex flex-col border-y p-2 lg:ml-24 text-purple-800 font-bold" key={props.question}>
        <label className="z-30">{props.question.replaceAll("&quot","'").replaceAll("&#039;", "'").replaceAll("&amp", "'")}</label>
        <div className="flex flex-col md:flex-row mt-2 z-30">{decode(props.renderQuestions)}</div>
    </div>
}
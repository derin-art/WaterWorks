import { data } from "autoprefixer";
import React from "react";
import { ReactDOM } from "react";





export default function Data(){
    let  quizQuestion = []
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => {
    const {results} = data
    quizQuestion.push(...results)
    
})

return quizQuestion


}


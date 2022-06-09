import logo from './logo.svg';
import "./maybe.css"
import React from 'react';
import Top from "./quizzical/topSvg.js"
import Bottom from "./quizzical/bottomSvg.js"
import Questions from "./quizzical/questions"
import { data } from 'autoprefixer';
import uniqueId from "react-id-generator"
import { v4 as uuid } from 'uuid'
import Option from "./quizzical/options.js"
import {decode} from "html-entities"








function App() {
 const [Data, setData] = React.useState([])
 const [check, setCheck] =React.useState(false)
 


 function handleClick(event){
  let newData = []
  Data.forEach(item =>{
    let newItem = item
    console.log(`obj ${item.questionNumber} event ${event.target.dataset.could}`)
    if(item.questionNumber == event.target.dataset.could){
      console.log("hey")
      newItem.friday.forEach(obj =>{
        if(event.target.no === obj.questionNo){
          console.log(`event ${event.target.dataset.valuable} obj ${obj.Option}`)
        }
        if(event.target.id === obj.id){
          obj.isSelected = true
        }
        else{
          obj.isSelected = false
        }
      })

    }
   
    newData.push(newItem)
  })
  
  setData(newData)

}



function checkCorrect(){
  let score = 0
  Data.forEach(item =>{
    item.friday.forEach(obj =>{
      if(obj.isSelected && obj.id == item.rightOption.id ){
        score = score + 1
      }
    })
  })
 
  return `Your score is ${score}/5`

}

let multiple = []

let optionComp = []

Data.forEach(item =>{
  let good = []
  const goodNo = Data.indexOf(item)
  item.friday.forEach(opt =>{
    good.push( <Option
      id = {opt.id}
      Option = {opt.Option}
      key = {opt.id}
      handleClick = {handleClick}
      questionNo ={goodNo}
      isSelected = {opt.isSelected}
      checked = {check}
      isRightOption = {opt.isRightOption}
      />)
  })
  optionComp.push(good)
})

/* console.log(optionComp) */








function getWrongsSelected(ApiData){
 
  let genghis = []
  let n = 0
  ApiData.forEach(item => {
    n = n + 1
    let newArr = []
    for(let i=0;i < item.incorrect_answers.length; i++){
      newArr.push({ Option:item.incorrect_answers[i], id: uuid(), isSelected: false, 
        questionNo: n, renderSelected: handleClick, isRightOption : false })
    }
   
    newArr.push({...item.rightOption, isSelected: false, isRightOption : true})
    genghis.push(newArr.sort(()=> Math.random()- 0.5))
  })
  return genghis
  }
  


const majorData = []

async function get(){
  let finalData = []
  const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
  const data = await res.json()
  const {results} = data

  const actualResults = results.map(item =>{
    return {...item, questionNumber :results.indexOf(item), rightOption: {Option: decode(item.correct_answer), id: goodKey()}
      }
  })

  const moreData = getWrongsSelected(actualResults)

  for(let i =0;i < actualResults.length; i++){
    finalData.push({...actualResults[i], friday: moreData[i]})
  }
  setCheck(prev => false)
  setData(finalData)
 
}


React.useState(()=>{
  get()
}, [])





function goodKey(){
  return uuid()
}






  const [startGame, changeStartGame] = React.useState(false)

  


  Data.forEach(item =>{
  
     multiple.push(
      <Questions
        WrongArray = {item.incorrect_answers.map(item =>{
          return {checkOpt: item, key: uuid()}
        })}
        key = {item.question}
        renderQuestions = {optionComp[Data.indexOf(item)]}
        correct = {item.correct_answer} 
        incorrect={item.incorrect_answers}
        question = {item.question}
        isSelected = {item.isSelected}
        allAnswers = {[...item.friday].sort(()=> Math.random()-0.5)}
        allQuestions = {[...item.incorrect_answers, item.correct_answer].sort(()=> Math.random()- 0.5)}
   
      
  
  
        
        />
      )
  })

let addition = []
for(let i= 0; i < multiple.length; i++){

}
console.log(Data)


  function start(){
    changeStartGame(!startGame)
  }


  

  return <main className= {`text-sm bg-purple-200  md:h-screen h-screen flex flex-col justify-between overflow-x-hidden`}>
              <Top />
                  <div className= {`w-full justify-center items-center flex ${startGame && "hidden"}`}>
                      <div className='flex flex-col justify-center items-center'>
                          <h1 className='mb-6 text-6xl text-gray-700'>Quizzical</h1>
                          <p className='text-md mb-4 text-gray-700 capitalize'>a fun quiz game for the family</p>

                          <button className='text-2xl p-4 px-10 text-blue-100 
                          bg-blue-600 rounded-xl font-bold 
                          capitalize hover:bg-blue-800' onClick={start}>start quiz</button>
                      </div>


                  </div>
                  <div className={` ${!startGame && "hidden"} w-screen flex justify-center items-center flex-col mt-12 md:mt-0`}>
                    <div className='w-5/6 text-left'>
                    {multiple}
                   
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                    <button className='capitalize bg-transparent border border-indigo-700 text-indigo-700 
                    font-bold rounded-lg hover:border-indigo-700 hover:bg-indigo-700 hover:text-white 
                    text-center px-6 py-3 mt-6 mr-4' onClick={check ? ()=>{get()} : ()=>{setCheck(check=> !check)} }>{check ? "New Game" : "check answers"}</button>
                     {check && <div className='mt-4 text-lg text-gray-600 font-bold capitalize'>{checkCorrect()}</div>}

                    </div>
                  </div>
                 
              <Bottom />
      </main>

}

export default App;

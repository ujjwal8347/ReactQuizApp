import React, { useState } from "react";

const App = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  let divToDisplay;
  if (questionNo < questions.length) {
    divToDisplay = (
      <div className=" bg-[#252d4a] flex text-white pt-6 px-6 pb-1 w-96 rounded-2xl shadow-2xl w-[550px]">
        <div className="flex-1">
          <h1 className="text-3xl mb-3">
            Question {questionNo + 1}<span className="text-lg">/4</span>
          </h1>
          <p className="text-xl">{questions[questionNo].questionText}</p>
        </div>
        <div className="flex-1">{questions[questionNo].answerOptions.map((obj , idx) => {
            return (
              <div key={idx} className="cursor-pointer border-4 border-[#234668] rounded-xl mb-4 p-1 hover:bg-[#808080]"
              onClick={() => {
                setQuestionNo(questionNo + 1);
                if(obj.isCorrect){
                  setTotalCorrectAnswer(totalCorrectAnswer + 1);
                }
              }}>
                {obj.answerText}
              </div>
            )
        })
          }</div>
      </div>
    );
  }else{
    divToDisplay = <div className=" bg-[#252d4a] flex justify-center items-center text-white pt-6 px-6 pb-1 w-96 rounded-2xl shadow-2xl w-[550px] h-[250px] text-2xl">
      You scored {totalCorrectAnswer} out of 4
    </div>
  }

  return (
    <div className="flex justify-center items-center bg-[#7cc6fe] h-screen">
      {divToDisplay}
    </div>
  );
};
export default App;

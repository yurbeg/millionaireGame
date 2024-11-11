import { useEffect, useState } from "react";
import {
  questions,
  backgroundGragient,
  backgroundGragientHover,
} from "../../core/constants/constants";
import Option from "../option";
import { Button } from "antd";
import { PhoneOutlined } from '@ant-design/icons'
import Points from "../points";
import { fibonacciArr } from "../../core/constants/constants";

import "./index.css";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false); // Состояние для отслеживания использования 50:50
  const [callToFriend, setCallToFriend] = useState(false);
  const [backBtn, setBackBtn] = useState(false);

  const handleClick = (e, i) => {
    e.target.style.background = "orange";
    setIsDisabled(true);
    setTimeout(() => {
      if (questions[index].answer === i) {
        e.target.style.background = "green";
        setTimeout(() => {
          if (index + 1 === questions.length) {
            setWin(true);
            setBackBtn(true)
            setCallToFriend(true)
            setFiftyFiftyUsed(true)
          } else {
            document.getElementById(`${index}`).style.background = "orange";
          }
          e.target.style.background = backgroundGragient;
          setIndex((prev) => prev + 1);
          if (index >= 1) {
            document.getElementById(`${index - 1}`).style.background = "";
          }
        }, 1000);
      } else {
        e.target.style.background = "red";
        setTimeout(() => {
          setLose(true);
          setCallToFriend(true)
          setFiftyFiftyUsed(true)
          setBackBtn(true)
          e.target.style.background = backgroundGragient;
        }, 1000);
      }
      e.target.addEventListener("mouseover", (e) => {
        e.target.style.background = backgroundGragientHover;
      });
      e.target.addEventListener("mouseleave", (e) => {
        e.target.style.background = backgroundGragient;
      });
      setIsDisabled(false);
    }, 1500);
  };

  const handleFiftyFifty = () => {
    if (fiftyFiftyUsed || !questions[index]) return;
    setFiftyFiftyUsed(true);
    const correctAnswer = questions[index].options[questions[index].answer];
    const randomIndexes = [];
    let count = 2;
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(
        Math.random() * questions[index].options.length
      );

      console.log(randomIndex, questions[index].answer);
      if (
        randomIndex !== questions[index].answer &&
        !randomIndexes.includes(randomIndex)
      ) {
        questions[index].options.splice(randomIndex, 1);
        randomIndexes.push(randomIndex);
      } else {
        count++;
      }
    }
    questions[index].answer = questions[index].options.indexOf(correctAnswer);
  };
  const handleCallToFriend = () => {
    alert(
      `Ճիշտ պատասխանն է ${questions[index].options[questions[index].answer]}`
    );
    setCallToFriend(true);
  };
  const handleBackBtn =()=>{
    setIndex(0)
    setCallToFriend(false);
    setFiftyFiftyUsed(false);
    
    setBackBtn(false)
    if(!win && index  !==0 ){
      document.getElementById(`${index - 1}`).style.background = "";
    }
    setWin(false);
    setLose(false);
  }
  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="main_container">
        <div className="question_container">{questions[index]?.question}</div>
        <div className="options_container">
          {!lose &&
            !win &&
            questions[index]?.options.map((answer, i) => (
              <Option
                key={i}
                answer={answer}
                i={i}
                handleClick={handleClick}
                isDisabled={isDisabled}
              />
            ))}
          {lose && (
            <div className="result_container">
              Ձեր շահած գումարի չափը կազմում է{" "}
              {fibonacciArr[index - 1] ? fibonacciArr[index - 1] * 1000 : 0}{" "}
              դրամ
            </div>
          )}
          {win && (
            <div className="result_container">
              Շնորհավորում ենք, դուք հաղթել եք{" "}
              {fibonacciArr[fibonacciArr.length - 1] * 1000} դրամ
            </div>
          )}
        </div>
        <div className="help_elements">
          {!fiftyFiftyUsed && (
            <Button className="fifty_fifty_button" onClick={handleFiftyFifty}>
              50:50
            </Button>
          )}
          {!callToFriend && (
            <Button className="fifty_fifty_button" onClick={handleCallToFriend}>
              <PhoneOutlined />
            </Button>
          )}
            {backBtn && (
            <Button className="fifty_fifty_button" onClick={handleBackBtn}>
              Վերադառնալ
            </Button>
          )}
        </div>
      </div>
      <Points />
    </div>
  );
};

export default Main;

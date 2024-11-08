import { useEffect, useState } from "react";
import { questions,backgroundGragient,backgroundGragientHover} from "../../core/constants/constants";
import Option from "../option";
import { Button } from "antd";
import "./index.css";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false); // Состояние для отслеживания использования 50:50
  const [callToFriend,setCallToFriend] = useState(false)
  const handleClick = (e, i) => {
    e.target.style.background = "orange";
    setIsDisabled(true);
    setTimeout(() => {
      if (questions[index].answer === i) {
        e.target.style.background = "green";
        setTimeout(() => {
          e.target.style.background = backgroundGragient
          setIndex((prev) => prev + 1);
        }, 1000);
      } else {
        e.target.style.background = "red";
        setTimeout(() => {
          e.target.style.background = backgroundGragient;
        }, 1000);
      }
      e.target.addEventListener('mouseover', (e) => {
        e.target.style.background = backgroundGragientHover
      })
      e.target.addEventListener('mouseleave', (e) => {
        e.target.style.background = backgroundGragient; 
      });
      setIsDisabled(false);
    }, 1500);
  };

  const handleFiftyFifty = () => {
    if (fiftyFiftyUsed || !questions[index]) return; 
    setFiftyFiftyUsed(true); 

    const correctAnswer = questions[index].options[questions[index].answer]
    const randomIndexes = []
    let count = 2
    for(let i = 0;i < count;i++){
      const randomIndex = Math.floor(Math.random() * questions[index].options.length);
      
      console.log(randomIndex, questions[index].answer);
      if(randomIndex !== questions[index].answer && !randomIndexes.includes(randomIndex)){
        questions[index].options.splice(randomIndex,1)
        
        randomIndexes.push(randomIndex)
      }
      else {
        count ++
      }
    }
    questions[index].answer =  questions[index].options.indexOf(correctAnswer)
    console.log(correctAnswer);
    

  };

  const handleCallToFriend = () => {
    alert(`Ճիշտ պատասխանն է ${questions[index].options[questions[index].answer]}` )    
    setCallToFriend(true)
  }
  useEffect(() => {}, []);
  return (
    <div className="main_container">
      <div className="question_container">{questions[index]?.question}</div>
      <div className="options_container">
        {questions[index]?.options.map((answer, i) => (
          <Option
            key={i}
            answer={answer}
            i={i}
            handleClick={handleClick}
            isDisabled={isDisabled}
          />
        ))}
      </div>
      <div className="help_elements">
      {!fiftyFiftyUsed && (
        <Button className="fifty_fifty_button" onClick={handleFiftyFifty}>
          50:50
        </Button>
      )}
        {!callToFriend && (
        <Button className="fifty_fifty_button" onClick={handleCallToFriend}>
          Զանգ ընկերոջը
        </Button>
      )}
      </div>
    
    </div>
  );
};

export default Main;

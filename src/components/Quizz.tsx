import { useState } from "react";
import { Link } from "react-router-dom";
import border_template from "../assets/border_template.mp4";

const questions = [
  {
    id: 1,
    title:
      'Frederico DiSanta is known for for his signature all-black clothing style. What color tie was he wearing at his business" meeting?',
    answer: "e",
    choices: [
      {
        title: "Black",
        key: "a",
      },
      {
        title: "White",
        key: "b",
      },
      {
        title: "Red",
        key: "c",
      },
      {
        title: "Blue",
        key: "d",
      },
      {
        title: "Green",
        key: "e",
      },
      {
        title: "Orange",
        key: "f",
      },
    ],
  },
  {
    id: 2,
    title: "What was the name of the restaurant?",
    answer: "d",
    choices: [
      {
        title: "Mario’s",
        key: "a",
      },
      {
        title: "La Taglatella",
        key: "b",
      },
      {
        title: "Donatello’s",
        key: "c",
      },
      {
        title: "Luigi’s",
        key: "d",
      },
      {
        title: "Il Forno",
        key: "e",
      },
      {
        title: "La Mafia",
        key: "f",
      },
    ],
  },
  {
    id: 3,
    title: "What was the country of the flag that the old man was staring at?",
    answer: "d",
    choices: [
      {
        title: "Russia",
        key: "a",
      },
      {
        title: "Italy",
        key: "b",
      },
      {
        title: "Ukraine",
        key: "c",
      },
      {
        title: "Czech Republic",
        key: "d",
      },
      {
        title: "Indonesia",
        key: "e",
      },
      {
        title: "France",
        key: "f",
      },
    ],
  },
  {
    id: 4,
    title: "What time was it?",
    answer: "a",
    choices: [
      {
        title: "9:15",
        key: "a",
      },
      {
        title: "6:00",
        key: "b",
      },
      {
        title: "12:30",
        key: "c",
      },
      {
        title: "5:45",
        key: "d",
      },
      {
        title: "12:45",
        key: "e",
      },
      {
        title: "3:30",
        key: "f",
      },
    ],
  },
  {
    id: 5,
    title:
      "There was an ISA spy keeping an eye on the DiSanta brothers this evening. Who was the spy?",
    answer: "c",
    choices: [
      {
        title: "The Man Holding The Menu",
        key: "a",
      },
      {
        title: "The Pirate",
        key: "b",
      },
      {
        title: "The Xylophone Player",
        key: "c",
      },
      {
        title: "The Gamer Girl",
        key: "d",
      },
      {
        title: "The Guitarist",
        key: "e",
      },
      {
        title: "The Baby",
        key: "f",
      },
    ],
  },
  {
    id: 6,
    title: "How many babies were in the restaurant?",
    answer: "c",
    choices: [
      {
        title: "0",
        key: "a",
      },
      {
        title: "1",
        key: "b",
      },
      {
        title: "2",
        key: "c",
      },
      {
        title: "3",
        key: "d",
      },
      {
        title: "4",
        key: "e",
      },
      {
        title: "5",
        key: "f",
      },
    ],
  },
  {
    id: 7,
    title: "Which character was eating the pizza?",
    answer: "e",
    choices: [
      {
        title: "The Nurse",
        key: "a",
      },
      {
        title: "Frederico DiSanta",
        key: "b",
      },
      {
        title: "The Wizard",
        key: "c",
      },
      {
        title: "The Police Officer",
        key: "d",
      },
      {
        title: "The Pirate",
        key: "e",
      },
      {
        title: "The Sailor",
        key: "f",
      },
    ],
  },
];

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState<any>(0);
  const [wrongSelection, setWrongSelection] = useState(0);
  const [gameDone, setGameDone] = useState(false);

  const level = localStorage.getItem("level");

  const { title, choices, answer } = questions[currentQuestion];
  const totalScores = 7;

  const answerSelected = (selected: string) => {
    var countWrongAnswers = 0;
    if (selected != answer) {
      countWrongAnswers = wrongSelection + 1;
      setWrongSelection(countWrongAnswers);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameDone(true);
    }
    setScore(totalScores - wrongSelection);
  };

  const getMessage = () => {
    let message = "You Lost!";

    if (level === "Easy") {
      if (wrongSelection <= 3) {
        message = "You Won!";
      }
    } else if (level === "Medium") {
      if (wrongSelection <= 2) {
        message = "You Won!";
      }
    } else {
      if (wrongSelection <= 1) {
        message = "You Won!";
      }
    }

    return <h3> {message}</h3>;
  };

  return (
    <div className="main">
      <video src={border_template} autoPlay loop />
      <div className="wrapper">
        {!gameDone ? (
          <>
            <div className="quizz">
              <h4>{title}</h4>
              <ul>
                {choices.map((item: any, index: number) => (
                  <button onClick={() => answerSelected(item.key)} key={index}>
                    {item.key}. {item.title}
                  </button>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="finalPage">
            {gameDone && getMessage()}
            Points: {score}
            <Link to="/" state={{ score: score }}>
              <button className="returnBtn">MENU</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;

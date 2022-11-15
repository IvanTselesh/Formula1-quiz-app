export interface IQuestions {
  id: number
  question: string
  answers: [
    {
      answerText: string
      isCorrect: boolean
    }
  ]
}

export const questions =  [
  {
    id: 1,
    question: 'Who is 7th world champion?',
    answers: [
      {answerText: 'L. Hamilton', isCorrect: true},
      {answerText: 'F. Massa', isCorrect: false},
      {answerText: 'R.Barichelo', isCorrect: false},
      {answerText: 'K. Raikonnen', isCorrect: false}]
  },
  {
    id: 2,
    question: 'What is the team race longer than others?',
    answers: [
      {answerText: 'Alfa Romeo', isCorrect: false},
      {answerText: 'Mclaren', isCorrect: false},
      {answerText: 'Ferrari', isCorrect: true},
      {answerText: 'Mercedes', isCorrect: false},
    ],
  },
  {
    id: 3,
    question: 'Who the champion of 2021 season?',
    answers: [
      {answerText: 'F. Alonso', isCorrect: false},
      {answerText: 'L. Hamilton', isCorrect: false},
      {answerText: 'C. Leclerc', isCorrect: false},
      {answerText: 'M. Verstappen', isCorrect: true},
    ],
  },
  {
    id: 4,
    question: 'What was the engine used in Haas team for 2021 season?',
    answers: [
      {answerText: 'Honda', isCorrect: false},
      {answerText: 'Ferrari', isCorrect: true},
      {answerText: 'Renault', isCorrect: false},
      {answerText: 'Mercedes', isCorrect: false},
    ],
  },
  {
    id: 5,
    question: 'What team member was M.Schumacher for his first world champion title?',
    answers: [
      {answerText: 'Benetton', isCorrect: true},
      {answerText: 'Ferrari', isCorrect: false},
      {answerText: 'Williams', isCorrect: false},
      {answerText: 'Sauber', isCorrect: false},
    ],
  },
  {
    id: 6,
    question: 'What driver did end his career for Formula 1 after crash?',
    answers: [
      {answerText: 'F. Massa', isCorrect: false},
      {answerText: 'M. Schumacher', isCorrect: false},
      {answerText: 'K. Raikonnen', isCorrect: false},
      {answerText: 'R. Grosjean', isCorrect: true},
    ],
  },
  {
    id: 7,
    question: 'What was the track of A. Senna death?',
    answers: [
      {answerText: 'Monaco', isCorrect: false},
      {answerText: 'San-Marino', isCorrect: true},
      {answerText: 'Spa', isCorrect: false},
      {answerText: 'Zaandvoort', isCorrect: false},
    ],
  },
  {
    id: 8,
    question: 'How many titles of constructor`s cup Mercedes-AMG Petronas Formula One Team has?',
    answers: [
      {answerText: '8', isCorrect: true},
      {answerText: '9', isCorrect: false},
      {answerText: '6', isCorrect: false},
      {answerText: '7', isCorrect: false},
    ],
  },
  {
    id: 9,
    question: 'When was the first Formula 1 championship?',
    answers: [
      {answerText: '1962', isCorrect: false},
      {answerText: '1952', isCorrect: false},
      {answerText: '1950', isCorrect: true},
      {answerText: '1948', isCorrect: false},
    ],
  },
  {
    id: 10,
    question: 'How many points do pilots earn for the 1st place?',
    answers: [
      {answerText: '20', isCorrect: false},
      {answerText: '10', isCorrect: false},
      {answerText: '16', isCorrect: false},
      {answerText: '25', isCorrect: true},
    ],
  },
];
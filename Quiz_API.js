const exp=require('express')
const QuizApp=exp.Router()
QuizApp.use(exp.json())
const questions = [
    {
        id:1,
        question: "What is the name of the largest democracy in the world?",
        options: ["India", "Brazil", "South Africa"],
        correctAnswer: "India"
    },
    {   
        id:2,
        question: "Which river is considered the holiest in India?",
        options: ["Ganges", "Yamuna", "Godavari", "Narmada"],
        correctAnswer: "Ganges"
    },
    {
        id:3,
        question: "Who is the father of the Indian Constitution?",
        options: ["B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
        correctAnswer: "B.R. Ambedkar"
    },
    {
        id:4,
        question: "What is the national sport of India?",
        options: ["Cricket", "Hockey", "Football", "Kabaddi"],
        correctAnswer: "Hockey"
    },
    {
        id:5,
        question: "Which is the highest mountain peak in India?",
        options: ["Kangchenjunga", "K2", "Nanga Parbat", "Lhotse"],
        correctAnswer: "Kangchenjunga"
    },
    {
        id:6,
        question: "Who wrote the epic poem ‘Mahabharata’?",
        options: ["Valmiki", "Vyasa", "Kalidasa", "Tulsidas"],
        correctAnswer: "Vyasa"
    },
    {
        id:7,
        question: "What is the capital city of India?",
        options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
        correctAnswer: "New Delhi"
    },
    {
        id:8,
        question: "Which is the largest state in India by area?",
        options: ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra"],
        correctAnswer: "Rajasthan"
    },
    {
        id:9,
        question: "Who is the first Prime Minister of India?",
        options: ["Indira Gandhi", "Rajiv Gandhi", "Jawaharlal Nehru", "Narendra Modi"],
        correctAnswer: "Jawaharlal Nehru"
    },
    {
        id:10,
        question: "What is the national animal of India?",
        options: ["Tiger", "Lion", "Elephant", "Peacock"],
        correctAnswer: "Tiger"
    }
];

//Get one
QuizApp.get('/questions/:id',(req,res)=>{
    const paramId=Number(req.params.id)
    let result=questions.find(question=>question.id==paramId)
    if(result==undefined){
        res.send({message:"Question not found"})
    }else{
        res.send({message:"Question",payload:result})
    }
})

//Post
QuizApp.post('/questions/:id', (req, res) => {
    let que = req.body;
    const paramId = Number(req.params.id);
    let result = questions.find(question => question.id === paramId);
    if (result.correctAnswer === que.ans) {
        res.send({payload:result.question , message:`Submitted Answer: ${que.ans} ------- Correct answer: ${result.correctAnswer}` });
    } else {
        res.send({ payload:result.question ,message:`Submitted Answer: ${que.ans} ------- Wrong answer, correct answer is: ${result.correctAnswer}`});
    }
    
});


module.exports=QuizApp;
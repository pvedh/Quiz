//Create HTTP server
const exp=require('express')
const app=exp()

app.listen(4000,()=>console.log('server on port 4000 ....'))
app.get('/',(req,res)=>{
    res.send('This response from server')
})
app.use(exp.json())

const QuizApp=require('./Quiz_API')
app.use('/quiz-api',QuizApp)

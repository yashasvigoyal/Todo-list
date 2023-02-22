const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('express');
const conn = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/tasks',(req,res)=>{
    const TASK_QUERY = "select * from todoapp.tasks";
    conn.query(TASK_QUERY, (err,response)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(response);
        }
    })

   
})

app.post('/addTask',(req,res)=>{
    const ADD_QUERY = `insert into todoapp.tasks (task) values ('${req.body.task}')`;
    conn.query(ADD_QUERY, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send('task added');
        }
    })
    
    
})

app.delete('/deleteTask/:task_id',(req,res)=>{
    const DELETE_QUERY = `DELETE FROM todoapp.tasks where (task_id=${req.params.task_id})`
    conn.query(DELETE_QUERY, (err,res)=>{
        if(err){
            console.log(err);
        }
       
    })

})



app.listen(4000,()=>{
    console.log("running on port 4000");
})
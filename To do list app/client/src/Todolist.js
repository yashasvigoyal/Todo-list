import './Todolist.css';
import React from 'react';
import axios from 'axios';
class Todolist extends React.Component{
    state = {
        task: "",
        taskList: []  // hold all tasks
    }
    componentDidMount() {
        this.getTaskList();
    }
    getTaskList = () =>{
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => this.setState({taskList: response}));

        
    }

    onDeleteClick = task_id =>{
        axios.delete(`http://localhost:4000/deleteTask/${task_id}`)
        this.getTaskList();
        
    }
    onSubmitClick = () =>{
        axios.post('http://localhost:4000/addTask',{
            task: this.state.task
        });
        this.getTaskList();
        this.setState({task:''});
    }
    render(){
        return(
            <div>
            <h1>To Do List App </h1>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight enter">Enter the task:</div>
                <div className="p-2 bd-highlight"><input type="text" value={this.state.task} onChange={e=>this.setState({
                    task: e.target.value
                })}></input></div>
                <div className="p-2 bd-highlight"><button type="submit" onClick={()=>this.onSubmitClick()}>Add task</button></div>
    
    
            </div>
            {this.state.taskList.map((task) => (      
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 task">{task.task}<button className="X" onClick={()=>this.onDeleteClick(task.task_id)}>X</button></div>
                <div className="col-1"> </div>
                <div className="col-1"></div>
                <div className="col-1"></div>
    
    
            </div>
              ))}

            </div>
    
    
        )
    

    }
}

export default Todolist;
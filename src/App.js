import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTaskBlock from './NewTaskBlock';
import InputAddTask from './InputAddTask';

class App extends Component {

  state = {
    inputValue: '',
    tasks: []
  }

  handleAddTask = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }
  onBtnClickHandler = () => {
    let tasks = this.state.tasks;
    let text = this.state.inputValue;

    if (text) {
      tasks.push({value: this.state.inputValue, done:false});
      this.setState({
        tasks: tasks, 
        inputValue: ''})
    }
  }
  deleteTask = () => {
    console.log('dsgh')
    // let tasks = this.state.tasks;
    // this.setState({
    //   tasks: tasks
    // })
  }
  
  render() {
    return (
      
        <div  className='App-wrap'>
          <InputAddTask 
            handleAddTask={this.handleAddTask}
            value={this.state.inputValue}
            onBtnClick={this.onBtnClickHandler}
          />
          <NewTaskBlock tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        </div>        
      
      
    )
  }
}

export default App;
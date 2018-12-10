import React, { Component } from 'react';
import Article from './Article';

class NewTaskBlock extends Component {

    renderTasks = () => {
      let tasks = this.props.tasks
      let taskTemplate = null

      if (tasks.length) {
        taskTemplate = tasks.map(function(item, index) {
          return <Article key={index} tasks={item}/>
        })
      } else {
        taskTemplate = 'Fields new task'
      }

      return taskTemplate
    }

  render() {
    return (
      <div className="App-task-block">
          <div> {this.renderTasks()}</div>
      </div>
      )
    // return (
    // <div className="App-task-block" >
    //     {this.props.tasks.map(function(item, index) {
    //       return <Article 
    //                   key={index}
    //                   tasks={item} 
    //                   deleteTask = {this.props.deleteTask}
    //               />
    //     })}
    // </div>
    // )
  }
}

export default NewTaskBlock;
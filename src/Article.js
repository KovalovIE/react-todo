import React, { Component } from 'react';

  class Article extends React.Component {

    constructor(props) {
      super(props);
      this.state = {class: 'false'};
      // this.changeStatusTask = this.changeStatusTask.bind(this);
      // this.deleteTask = this.deleteTask.bind(this);
    }
    
    changeStatusTask = () => {
      let className = (this.state.class === "false") ? "done" : "false";
      this.setState({class: className});
    }
    deleteTask = (e) => {
      console.log(e.target)
      // let tasks = this.state.tasks;
      // this.setState({
      //   tasks: tasks
      // })
    }
    

    render() {
      return (
        <div className="task-position">
          <p><input type="checkbox" onClick = {this.changeStatusTask}/></p>
          <p className={this.state.class}> {this.props.tasks.value} </p>
          <p className='delete-task-btn' onClick = {e => this.deleteTask(e)}>x</p>          
        </div>
      )
    }
  }

  export default Article;
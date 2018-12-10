import React, { Component } from 'react';

class InputAddTask extends Component {

  render() {
    return (
    <div className="App-input-block">
        <input
            type='text'
            onChange={e => this.props.handleAddTask(e)}
            className='App-input'
            placeholder='new task'
            value={this.props.value}
          />
        <button onClick={this.props.onBtnClick}>Add Task</button>
    </div>
    )
  }
}

export default InputAddTask;
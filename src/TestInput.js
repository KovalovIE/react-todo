import React, { Component } from 'react';

class TestInput extends React.Component {
    state = {
      myValue: '',
    }
    onChangeHandler = (e) => {
      this.setState({ myValue: e.currentTarget.value })
    }
    onBtnClickHandler = (e) => {
      alert(this.state.myValue);
    }
    render() {
      return (
        <React.Fragment>
          <input
            className='test-input'
            onChange={this.onChangeHandler}
            value={this.state.myValue}
            placeholder='введите значение' />
          <button onClick={this.onBtnClickHandler}>Показать alert</button>
        </React.Fragment>
      )
    }
  }

  export default TestInput;
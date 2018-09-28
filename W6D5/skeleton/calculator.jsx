import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num1: '', num2: ''};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
  }

  setNum2(e) {
  const num2 = e.target.value ? parseInt(e.target.value) : "";
  this.setState({num2});
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1> // replace this with your code
        <input> onChange={this.setNum1} value={num1}</input>
        <input>value = {this.state.num2} value={num2}</input>
      </div>
    );
  }
}

export default Calculator;

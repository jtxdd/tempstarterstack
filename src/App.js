import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnClick = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <button onClick={this.btnClick}>click</button>
      </div>
    );
  }
}

export default App;

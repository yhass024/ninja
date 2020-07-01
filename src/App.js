import React from "react";
import Ninjas from "./ninjas";
import AddNinja from "./AddNinja";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 27, belt: "black", id: 1 },
      { name: "Yoshi", age: 23, belt: "green", id: 2 },
      { name: "Mario", age: 20, belt: "silver", id: 3 },
    ],
  };
  newNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  };

  deleteNinja = (id) => {
    let ninjas1 = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({ ninjas: ninjas1 });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProp, prevState) {
    console.log("component updated");
    console.log(prevProp, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>Ninja Database</h1>
        <p>Active Ninjas</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja newNinja={this.newNinja} />
      </div>
    );
  }
}

export default App;

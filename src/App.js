import React, { Component } from "react";
import Home from "./Home";

class App extends Component {
  state = { count: 0,show:false };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  handleShow=()=>{
    (this.state.show) ? this.setState({show: false}) : this.setState({show:true})
   
  }
  componentDidMount(){
   /*  alert('hello')
    console.log('welcome') */
  }
  componentDidUpdate(){
    /* console.log('update') */
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.increment}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <div >
          <button onClick={this.handleShow}> show</button>
          {this.state.show ?<Home/> :null}
        
        </div>
      </div>
    );
  }
}

export default App;

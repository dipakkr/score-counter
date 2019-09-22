import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
    console.log(`INCREMENT Action Fired !!`);
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
    console.log(`DECREMENT Action Fired !!`);
  };

  render() {
    return (
      <div>
        <h2>Score Counter </h2>
        <div>
          <button onClick={this.increment}> +</button>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>- </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);

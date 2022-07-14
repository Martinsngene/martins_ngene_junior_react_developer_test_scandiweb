import React, { Component } from "react";

class SlideImages extends Component {
  constructor(props) {
    super(props);
    this.num = 0;
    this.state = {
      val: this.num,
    };

    // Binding this keyword
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ val: this.num++ });
    console.log(this.state.val);
  }

  decrement() {
    this.setState({ val: this.num-- });
    console.log(this.state.val);
  }
  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.imagesArray[this.state.val]}
            width={300}
            height={300}
            alt="sample"
          />
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default SlideImages;

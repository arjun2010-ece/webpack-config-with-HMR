import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';

class App extends Component {
    render() {
      const { name } = this.props;
      return (
        <>
          <h1>
            Hello {name}.
            <p>How are you.</p>
            is this amazing or not ?
          </h1>
        </>
      );
    }
  }

  
  export default hot(App);
import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import {Navbar} from "./Navbar";

class App extends Component {
    render() {
      const { name } = this.props;
      return (
        <>
          <h1>
            Hello {name}.
            <p>How are you.</p>
          </h1>
          <Navbar />
        </>
      );
    }
  }

  
  export default hot(App);
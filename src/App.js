import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Companies from "./components/Companies";
import axios from "axios";

class App extends Component {
  state = {
    companies: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.setState({ companies: res.data });
      });
  }

  render() {
    return (
      <div className="App antialiased text-gray-900">
        <div className="bg-gray-200 min-h-screen">
          <Header />
          <Companies companies={this.state.companies} />
          {/* {this.state.companies.map(company => (
            <div>
              <li>{company.title}</li>
              <li>{company.title}</li>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default App;

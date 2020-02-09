import React, { Component } from "react";

export default class CompanyList extends Component {
  render() {
    const { id, title } = this.props.company;
    return (
      <div>
        <div>{title}</div>
        <div>{id}</div>
      </div>
    );
  }
}

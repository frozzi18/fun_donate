import React, { Component } from "react";
import CompanyList from "./CompanyList";
import PropTypes from "prop-types";

export default class Companies extends Component {
  render() {
    return this.props.companies.map(company => (
      <CompanyList key={company.id} company={company} />
      //   <div>{company.title}</div>
    ));
  }
}

//PropTypes
Companies.propTypes = {
  companies: PropTypes.array.isRequired
};

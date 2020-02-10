import React, { Component } from "react";
import CompanyList from "./CompanyList";
import PropTypes from "prop-types";

export default class Companies extends Component {
  render() {
    return (
      <div className="flex flex-wrap mb-4">
        {this.props.companies.map(company => (
          <CompanyList key={company.id} company={company} />
        ))}
      </div>
    );
  }
}

//PropTypes
Companies.propTypes = {
  companies: PropTypes.array.isRequired
};

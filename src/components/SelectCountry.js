import React, { Component } from "react";
import Stats from "./Stats";
import { Form, Col } from "react-bootstrap";
import api from "../services/api";

export default class SelectCountry extends Component {
  state = {
    countries: [],
    countryConfirmed: 0,
    countryDeath: 0,
    countryRecovery: 0,
    selectedCountry: "Brazil"
  };

  async componentDidMount() {
    const response = await api.get("cases_by_country.php");
    const data = response.data;
    this.setState({ countries: data.countries_stat });
    this.mountStats(this.state.selectedCountry);

    this.sortAscending(data.countries_stat);
  }

  remountStats(val) {
    this.mountStats(val);
  }

  mountStats(val) {
    this.state.countries
      .filter(test => test.country_name === val)
      .map(test =>
        this.setState({
          countryConfirmed: test.cases,
          countryDeath: test.deaths,
          countryRecovery: test.total_recovered
        })
      );
  }

  sortAscending = countries => {
    countries.sort((a, b) =>
      a.country_name < b.country_name
        ? -1
        : a.country_name > b.country_name
        ? 1
        : 0
    );
  };

  render() {
    return (
      <>
        <Col md={12}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                value={this.state.selectedCountry}
                as="select"
                onChange={e => {
                  this.setState({ selectedCountry: e.target.value });
                  this.remountStats(e.target.value);
                }}
              >
                {this.state.countries.map(country => (
                  <option
                    key={country.country_name}
                    value={country.country_name}
                  >
                    {country.country_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Stats
          confirmed={this.state.countryConfirmed}
          deaths={this.state.countryDeath}
          recovered={this.state.countryRecovery}
        />
      </>
    );
  }
}

import React, { Component } from "react";
import api from "./services/api";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { GiWorld, GiTransparentTubes } from "react-icons/gi";
import Stats from "./components/Stats";
import SelectCountry from "./components/SelectCountry";

class App extends Component {
  state = {
    confirmed: 0,
    death: 0,
    recovery: 0
  };

  async componentDidMount() {
    const response = await api.get("worldstat.php");
    const data = response.data;
    this.setState({
      confirmed: data.total_cases,
      death: data.total_deaths,
      recovery: data.total_recovered
    });
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col
              xs
              lg="12"
              style={{
                padding: "0"
              }}
            >
              <Jumbotron
                fluid
                style={{
                  backgroundColor: "#a192dc",
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                <h1>
                  Estatísticas Covid-19 <GiTransparentTubes />
                </h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Stats
              confirmed={this.state.confirmed}
              deaths={this.state.death}
              recovered={this.state.recovery}
            />
          </Row>
          <Row>
            <Col xs lg="12">
              <h2>
                <GiWorld /> Selecione o país
              </h2>
            </Col>
            <SelectCountry />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

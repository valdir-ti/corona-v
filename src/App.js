import React, { Component } from 'react';
import api from './services/api';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { GiWorld, GiTransparentTubes } from "react-icons/gi";
import Stats from './components/Stats';
import SelectCountry from './components/SelectCountry';
import { TitleJumbotron } from './AppStyle';

class App extends Component {

  state = {
    confirmed: 0,
    death: 0, 
    recovery: 0
  }

  async componentDidMount() {    
    const response = await api.get("worldstat.php");
    const data = response.data;
    this.setState({ confirmed: data.total_cases, death: data.total_deaths, recovery: data.total_recovered });    
  }

  render(){
    return (
      <>
        <Container fluid style={{padding: "0"}}>
          <Row>
            <Col sm={12}>
            <Jumbotron fluid style={{backgroundColor: "#a192dc", color: "#fff", textAlign: "center"}}>
                <Container>
                  <h1>Estatísticas Covid-19 <GiTransparentTubes /></h1>
                </Container>
            </Jumbotron>
            </Col>
          </Row>
        </Container>
        
        <Container>
          <Row>
            <Col sm={12}>
              <Stats 
                confirmed={this.state.confirmed}
                deaths={this.state.death}
                recovered={this.state.recovery}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h2><GiWorld/> Selecione o país</h2>
              <SelectCountry />
            </Col>
          </Row>        
        </Container>
      </>
    );
  }  
}

export default App;

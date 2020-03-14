import React, { Component } from 'react';
import api from './services/api';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Stats from './components/Stats';
import SelectCountry from './components/SelectCountry';

class App extends Component {

  constructor(props){
    super(props);    
    this.state = {
      confirmed: 0,
      death: 0, 
      recovery: 0
    }
  }

  async componentDidMount() {    
    const response = await api.get("worldstat.php");
    const data = response.data;
    this.setState({ confirmed: data.total_cases, death: data.total_deaths, recovery: data.total_recovered });    
  }

  render(){
    return (
      <Container>
        <Row>
          <Col sm={12}>
          <Jumbotron fluid>
            <Container>
              <h1>Estatísticas Covid-19</h1>
            </Container>
          </Jumbotron>
          </Col>
        </Row>
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
            <h2>Selecione o país</h2>
            <SelectCountry />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>          
          </Col>
        </Row>
      </Container>
    );
  }  
}

export default App;

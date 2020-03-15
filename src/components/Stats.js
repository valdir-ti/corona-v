import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { StatBlock } from './StatStyle';
import { GiThumbUp, GiChart, GiPirateFlag } from "react-icons/gi";

export default class Stats extends Component {  
  render(){
    return (
      <>
        <Row>
          <Col md={4}>
            <StatBlock>
              <h2>Confirmados <GiChart /></h2>
              <span>{this.props.confirmed}</span>
            </StatBlock>
          </Col>
          <Col md={4}>
            <StatBlock>
              <h2>Mortos <GiPirateFlag /></h2>
              <span>{this.props.deaths}</span>
            </StatBlock>
          </Col>
          <Col md={4}>
            <StatBlock>
              <h2>Recuperados <GiThumbUp /></h2>
              <span>{this.props.recovered}</span>
            </StatBlock>
          </Col>
        </Row>
      </>
    )
  }
}

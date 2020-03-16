import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { StatBlock, SVGD, SVGR, SVGC } from "./StatStyle";
import { GiThumbUp, GiChart, GiPirateFlag } from "react-icons/gi";

export default class Stats extends Component {
  render() {
    return (
      <>
        <Col md={4}>
          <StatBlock>
            <h2>
              Confirmados{" "}
              <SVGC>
                <GiChart />
              </SVGC>
            </h2>
            <span>{this.props.confirmed}</span>
          </StatBlock>
        </Col>
        <Col md={4}>
          <StatBlock>
            <h2>
              Mortos{" "}
              <SVGD>
                <GiPirateFlag />
              </SVGD>
            </h2>
            <span>{this.props.deaths}</span>
          </StatBlock>
        </Col>
        <Col md={4}>
          <StatBlock>
            <h2>
              Recuperados{" "}
              <SVGR>
                <GiThumbUp />
              </SVGR>
            </h2>
            <span>{this.props.recovered}</span>
          </StatBlock>
        </Col>
      </>
    );
  }
}

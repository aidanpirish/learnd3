import React, { Component } from 'react';
import * as d3 from 'd3';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './D3Workspace.css';

import BarChart from './projects/BarChart';
// import Smile from './projects/Smile';

// const projects = [BarChart, Smile];

const svgHeight = 500;
const svgWidth = 960;

class D3Workspace extends Component {
  createWorkspace() {
    d3.selectAll('.svg-container').append('svg').attr('width', svgWidth).attr('height', svgHeight);
  }

  render() {
    return (
      <div className="container">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link className="nav-text">Smile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-text">Bar Chart</Nav.Link>
          </Nav.Item>
        </Nav>

        <Jumbotron className="jumbotron">
          <div className="svg-container" />
        </Jumbotron>
        <BarChart
          createWorkspace={this.createWorkspace}
        />
      </div>
    );
  }
}

export default D3Workspace;

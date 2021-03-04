import { Component } from 'react';
import * as d3 from 'd3';
import {
  csv,
  scaleLinear,
  max,
  scaleBand,
} from 'd3';
import csvData from '../../data/populations.csv';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createWorkspace = props.createWorkspace;
  }

  componentDidMount() {
    this.createWorkspace();
    this.playWithD3();
  }

  playWithD3() {
    const svg = d3.select('svg');
    svg.style('background-color', '#d3d3d3');

    csv(csvData).then((data) => {
      data.forEach((d) => {
        d.population = +d.population;
      });
      this.renderRows(data);
    });
  }

  renderRows(data) {
    const svg = d3.select('svg');

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    // value accessors
    const xValue = (d) => d.population;
    const yValue = (d) => d.country;

    const xScale = scaleLinear()
      .domain([0, max((data), (d) => xValue(d))])
      .range([0, width]);

    const yScale = scaleBand()
      .domain(data.map((d) => yValue(d)))
      .range([0, height]);

    const g = svg.append('g');
    // .attr('transform', `translate(${margin.left},${margin.top})`);

    g.selectAll('rect').data(data)
      .enter().append('rect')
      .attr('y', (d) => yScale(yValue(d)))
      .attr('width', (d) => xScale(xValue(d)))
      .attr('height', yScale.bandwidth());
  }

  render() {
    return (null);
  }
}

export default BarChart;

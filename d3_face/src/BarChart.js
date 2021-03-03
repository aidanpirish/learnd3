import {Component} from 'react';
import * as d3 from "d3";
import { select, arc } from 'd3'

class BarChart extends Component {


    componentDidMount() {
        this.playWithD3();
    }

    playWithD3() {

        const svg = d3.select("svg")
        svg.style('background-color', '#f2f3f4')

        const width = +svg.attr('width')
        const height = +svg.attr('height')
        
    }

    render() {
        return(null)
    }
}

export default BarChart;
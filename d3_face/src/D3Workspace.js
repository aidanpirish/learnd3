import {Component} from 'react';
import * as d3 from "d3";

class D3Workspace extends Component {

    componentDidMount() {
        this.playWithD3();
    }

    playWithD3() {
        const svg = d3.select("body").append("svg").attr("width", 960).attr("height", 500)
        svg.style('background-color', '#f2f3f4')
    }

    render() {
        return(null)
    }
}

export default D3Workspace;
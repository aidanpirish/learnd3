import {Component} from 'react';
import * as d3 from "d3";

import Smile from './Smile';
import BarChart from './BarChart';

const svg_height = 500;
const svg_width = 960;



class D3Workspace extends Component {

    createWorkspace() {
        d3.select("body").append("svg").attr("width", svg_width).attr("height", svg_height);
    }

    render() {
        this.createWorkspace();
        return(
            <BarChart />
        )
    }
}

export default D3Workspace;
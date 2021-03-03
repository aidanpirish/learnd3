import {Component} from 'react';
import * as d3 from "d3";
import {arc} from 'd3'

class Smile extends Component {


    componentDidMount() {
        this.playWithD3();
    }

    playWithD3() {

        const svg = d3.select("svg")
        svg.style('background-color', '#f2f3f4')

        const width = +svg.attr('width')
        const height = +svg.attr('height')
        
        

        const g = svg
            .append('g')
                .attr('transform', `translate(${width/2}, ${(height/2)})`)

        const circle = g
            .append('circle')
                .attr('r', height / 2)
                .attr('fill', 'yellow')
                .attr('stroke', 'black')
        
        const eyeRadius = 40
        const eyeSpacing = 100
        const eyeYOffset = -70
        const eyebrowWidth = 50
        const eyebrowHeight = 15
        const eyebrowYOffset = -70
        
        const eyesG = g
            .append('g')
                .attr('transform', `translate(0, ${eyeYOffset})`)

        const leftEye = eyesG.append('circle')
            .attr('r', eyeRadius)
            .attr('cx', -eyeSpacing)
            
        const rightEye = eyesG.append('circle')
            .attr('r', eyeRadius)
            .attr('cx', eyeSpacing)

        const eyebrowsG = eyesG
            .append('g')
                .attr('transform', `translate(0, ${eyebrowYOffset})`)

        eyebrowsG
            .transition().duration(2000)
                .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
            .transition().duration(2000)
                .attr('transform', `translate(0, ${eyebrowYOffset})`)

        const leftEyebrow = eyebrowsG
            .append('rect')
                .attr('x', -eyeSpacing - eyebrowWidth / 2)
                .attr('width', eyebrowWidth)
                .attr('height', eyebrowHeight)
        
        const rightEyebrow = eyebrowsG
            .append('rect')
                .attr('x', eyeSpacing - eyebrowWidth / 2)
                .attr('width', eyebrowWidth)
                .attr('height', eyebrowHeight)
            

        const mouth = g
            .append('path')
                .attr('d', arc()({
                    innerRadius: 120,
                    outerRadius: 130,
                    startAngle: Math.PI/2,
                    endAngle: Math.PI * (3/2)
                }))
    }

    render() {
        return(null)
    }
}

export default Smile;
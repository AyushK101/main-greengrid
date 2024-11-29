import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface GraphLiveProps {
  data: {
    power: number;
    current: number;
  };
}

const GraphLive: React.FC<GraphLiveProps> = ({ data }) => {
  const svgRefPower = useRef<SVGSVGElement | null>(null);
  const svgRefCurrent = useRef<SVGSVGElement | null>(null);

  const powerData = useRef<{ time: number; value: number }[]>([]);
  const currentData = useRef<{ time: number; value: number }[]>([]);

  const maxDuration = 60; // 1 minute

  useEffect(() => {
    // Maintain only the last `maxDuration` data points
    if (powerData.current.length > maxDuration) {
      powerData.current.shift();
    }
    if (currentData.current.length > maxDuration) {
      currentData.current.shift();
    }

    const currentTime = Date.now(); // Use milliseconds for timestamps

    // Push new data points to the arrays
    powerData.current.push({ time: currentTime, value: data.power });
    currentData.current.push({ time: currentTime, value: data.current });

    // Update graphs
    updateGraph(svgRefPower.current, powerData.current, {
      xScale: [currentTime - maxDuration * 1000, currentTime], // Dynamic time range in milliseconds
      yScale: [0, 100], // Power in kW
    });

    updateGraph(svgRefCurrent.current, currentData.current, {
      xScale: [currentTime - maxDuration * 1000, currentTime], // Dynamic time range in milliseconds
      yScale: [0, 10], // Current in Amps
    });
  }, [data]);

  function updateGraph(
    svgElement: SVGSVGElement | null,
    graphData: { time: number; value: number }[],
    scales: { xScale: [number, number]; yScale: [number, number] }
  ) {
    if (!svgElement) return;

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 }; // Increased bottom margin for x-axis labels

    const x = d3
      .scaleTime()
      .domain(scales.xScale.map((ms) => new Date(ms))) // Convert milliseconds to Date objects
      .range([0, width]);

    const y = d3.scaleLinear().domain(scales.yScale).range([height, 0]);

    const line = d3
      .line<{ time: number; value: number }>()
      .x((d) => x(new Date(d.time))) // Convert timestamp to Date
      .y((d) => y(d.value))
      .defined((d) => d.value !== null); // Ignore null values to break the line

    const svg = d3.select(svgElement);
    svg.selectAll('*').remove(); // Clear the SVG before rendering

    // Main SVG group with margins applied
    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw the line
    g.append('path')
      .datum(graphData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // X-Axis with time formatting
    const timeFormat = d3.timeFormat('%H:%M:%S'); // Format as "HH:mm:ss"
    g.append('g')
      .attr('transform', `translate(0,${height})`) // Position at the bottom of the chart
      .call(
        d3
          .axisBottom(x)
          .ticks(10)
          .tickFormat((d) => timeFormat(d as Date)) // Apply time formatting
      )
      .selectAll('text') // Rotate text for better visibility if needed
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    // Y-Axis
    g.append('g').call(d3.axisLeft(y).ticks(5));
  }

  return (
    <div className="pt-20 predict:pt-5">
      <div className='border-2 h-auto py-3 rounded-xl flex justify-center mx-5 items-center gap-3 bg-slate-200'>
      <h2>Power (kW)</h2>
        <svg ref={svgRefPower}></svg>
      </div>
      <div className='border-2 h-auto py-3 rounded-xl flex justify-center mx-5 items-center gap-3 my-5 bg-slate-200'>
      <h2>Current (A)</h2>
        <svg ref={svgRefCurrent}></svg>
      </div>  

    </div>
  );
};

export default GraphLive;

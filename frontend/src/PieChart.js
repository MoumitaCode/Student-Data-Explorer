
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["White", "Hispanic/Latino", "Black", "Asian", "Two or more races"],
        datasets: [
          {
            data: [6.5, 76.5, 4.3, 10.6, 0.7],
            backgroundColor: ["blue", "red", "yellow", "purple", "orange"],
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default PieChart;

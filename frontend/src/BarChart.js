import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["California", "Texas", "Florida", "New York"],
        datasets: [
          {
            label: "ELL Students",
            data: [1090375, 954145, 290057, 241791],
            backgroundColor: "skyblue",
          },
          {
            label: "Number of Schools",
            data: [10121, 8758, 3976, 4873],
            backgroundColor: "green",
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;

import React, { useState } from 'react';

// Sample data for the doughnut chart
const chartData = {
  labels: ['Metric 1', 'Metric 2', 'Metric 3'],
  datasets: [
    {
      data: [30, 20, 50],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const metricData = {
  Metric1: [
    { property1: 'Value1', property2: 'Value2' },
    // Add more data as needed
  ],
  Metric2: [
    { property1: 'Value3', property2: 'Value4' },
    // Add more data as needed
  ],
  Metric3: [
    { property1: 'Value5', property2: 'Value6' },
    // Add more data as needed
  ],
};

function App() {
  const [showChart, setShowChart] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('Metric1');

  const handleMetricChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl mb-4">Ads Insights</h1>

      <div className="mb-4">
        <label className="block">Select Metric</label>
        <select
          value={selectedMetric}
          onChange={handleMetricChange}
          className="bg-white border border-gray-300 p-2 rounded-md w-48"
        >
          <option value="Metric1">Metric 1</option>
          <option value="Metric2">Metric 2</option>
          <option value="Metric3">Metric 3</option>
        </select>
      </div>

      <button
        onClick={() => setShowChart(!showChart)}
        className="bg-blue-500 text-white p-2 rounded-md mb-4"
      >
        {showChart ? 'Show Table' : 'Show Doughnut Chart'}
      </button>

      {showChart ? (
        <div className="bg-white p-4 rounded-md">
          {/* Render the Doughnut Chart here */}
          <canvas id="doughnutChart" width="400" height="400"></canvas>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-md">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border p-2">Table Header 1</th>
                <th className="border p-2">Table Header 2</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {/* Render table rows for the selected metric data */}
              {metricData[selectedMetric].map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.property1}</td>
                  <td className="border p-2">{item.property2}</td>
                  {/* Add more table data cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;

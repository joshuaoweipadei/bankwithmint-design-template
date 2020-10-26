import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Orders',
      data: [12, 18, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgba(69, 161, 7, 0.5)',
      borderColor: 'rgba(69, 161, 7, 1)',
      borderWidth: 1,
    },
    {
      label: 'Reconcilled',
      data: [9, 13, 4, 12, 6, 20],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Pending',
      data: [8, 4, 7, 2, 16, 1],
      fill: false,
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const ChartGraph = () => (
  <>
    <Line data={data} options={options} />
  </>
)

export default ChartGraph
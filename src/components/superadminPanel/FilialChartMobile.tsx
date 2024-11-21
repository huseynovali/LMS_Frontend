import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Gənclik',
    telebe: 200,
    muellim: 20,
  },
  {
    name: '28 May',
    telebe: 100,
    muellim: 10,
  },
  {
    name: 'Gənclik',
    telebe: 200,
    muellim: 20,
  },
  {
    name: '28 May',
    telebe: 100,
    muellim: 10,
  },
  {
    name: 'Gənclik',
    telebe: 200,
    muellim: 20,
  },
  {
    name: '28 May',
    telebe: 100,
    muellim: 10,
  },
  {
    name: 'Nərimanov',
    telebe: 234,
    muellim: 5,
  },
  {
    name: 'Azadlıq',
    telebe: 130,
    muellim: 3,
  },
  {
    name: '20 Yanvar',
    telebe: 220,
    muellim: 10,
  },
];

function FilialChartMobile() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="telebe" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="muellim" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FilialChartMobile;

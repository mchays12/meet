import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const EventsGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  //declare genre array
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular']

  const getData = () => {
    const newData = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      }
    });
    setData(newData);
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]}${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };
  useEffect(() => {
    getData();
  }, [events]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventsGenresChart;

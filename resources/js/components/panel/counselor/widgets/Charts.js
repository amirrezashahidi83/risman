import { useState,useEffect } from 'react';
import { Pie,PieChart,Line,LineChart,XAxis,YAxis } from 'recharts';

export const LineChartWrapper = ({data}) => {

	return(
	  <LineChart width={500} height={300} data={data}>
	    <XAxis dataKey="name"/>
	    <YAxis/>
	    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
	    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
	  </LineChart>
  	)
}

export const PieChartWrapper = ({data}) => {

	return(
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
	)
}

export const ProgressChart = ({data}) => {
  return(
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  )
}

export const LessonsChart = ({data}) => {

  return(
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>

  )
}
 
export const SingleLessonChart = ({data}) => {

  return(
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>

  )
}
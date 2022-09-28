import { useState,useEffect } from 'react';
import { Pie,PieChart,Line,LineChart,XAxis,YAxis } from 'recharts';
import {compareType,compareLessons,compareSum,compareDetails,compareWeeks} from './ClassifyData';

export const ProgressChart = ({week1,week2}) => {
  let dataPoints = compareWeeks(week1,week2);
  return(
    <LineChart width={500} height={300} data={dataPoints}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  )
}

export const LessonsChart = ({data,value}) => {

  let dataPoints = [];

  if(value == 1){
    dataPoints = compareType(data,value);
  }else if(value == 2){
    dataPoints = compareLessons(data,value);
  }else if(value == 3){
    dataPoints = compareLessons(data,value);
  }else if(value == 4){
    dataPoints = compareSum(data,value);
  }else if(value == 5){
    dataPoints = compareSum(data,value);  
  }

  return(
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={dataPoints}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>

  )
}
 
export const SingleLessonChart = ({data,lesson_id}) => {

  let dataPoints = compareDetails(data,lesson_id);

  return(
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={360}
        endAngle={0}
        data={dataPoints}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>

  )
}
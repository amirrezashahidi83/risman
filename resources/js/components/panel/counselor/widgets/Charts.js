import { useState,useEffect } from 'react';
import { Pie,PieChart } from 'recharts';

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

export const ProgressChart = ({student_id}) => {
  const [weeks,setWeeks] = useState([]);
  useEffect( () => {
    
  });  
  return(
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  )
}

export const LessonsChart = ({student_id}) => {
  const [data,setData] = useState([]);
  
  useEffect( () => {
    axios.get("/api/student/report/lessons/"+student_id)
    .then(function(response){
  
      setData(response.data);
  
    });
  
  },[]);

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
 
export const SingleLessonChart = ({student_id,lesson_id}) => {
  
  const [data,setData] = useState([]);
  
  useEffect( () => {
    axios.get("/api/student/report/"+student_id+"/"+lesson_id)
    .then(function(response){
  
      setData(response.data);
  
    });
  
  },[]);

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
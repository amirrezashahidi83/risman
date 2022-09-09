import CanvasJSReact from './charts/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
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

}

export const LessonsChart = ({student_id}) => {

}
 
export const SingleLessonChart = ({student_id}) => {
  return(

  )
}
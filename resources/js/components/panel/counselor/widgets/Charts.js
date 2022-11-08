import { useState,useEffect } from 'react';
import {CCard,CCardBody,CCardHeader,CFormSelect} from '@coreui/react';
import { Pie,PieChart,Line,LineChart,XAxis,YAxis } from 'recharts';
import {compareType,compareLessons,compareSum,compareDetails,compareWeeks} from './ClassifyData';

export const ProgressChart = ({currentWeek,previousWeek}) => {
  const [dataPoints,setDataPoints] = useState([]);

  useEffect( () => {
    setDataPoints( compareWeeks([currentWeek,previousWeek]) );
    console.log(dataPoints);
  },[]);

  return(
    <CCard>
      <CCardHeader>
      </CCardHeader>

      <CCardBody>
        <LineChart width={500} height={300} data={dataPoints}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </CCardBody>
    </CCard>
  )
}

export const LessonsChart = ({data}) => {

  const [dataPoints,setDataPoints] = useState([]);
  const [type,setType] = useState(1);

  useEffect( () => {
    if(type == 1){
      setDataPoints(compareType(data));
    }else if(type == 2){
      setDataPoints(compareLessons(data,type));
    }else if(type == 3){
      setDataPoints(compareLessons(data,type));
    }else if(type == 4){
      setDataPoints(compareSum(data,type));
    }else if(type == 5){
      setDataPoints(compareSum(data,type));  
    }
  },[type]);

  return(
    <CCard>
      <CCardHeader>
        <CFormSelect onChange={(e) => setType(e.target.value)}>
          <option value='1'>عمومی و اختصاصی </option>
          <option value='2'>همه دروس اختصاصی</option>
          <option value='3'>همه دروس عمومی</option>
          <option value='4'>ساعت تست و مطالعه دروس تخصصی</option>
          <option value='5'>ساعت تست و مطالعه دروس عمومی</option>
        </CFormSelect>
      </CCardHeader>

      <CCardBody>
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
      </CCardBody>
    </CCard>


  )
}
 
export const SingleLessonChart = ({data,lessons}) => {

  const [lesson,setLesson] = useState(-1);
  const [dataPoints,setDataPoints] = useState([]);
  
  useEffect( () => {
      setDataPoints(compareDetails(data,lesson));
  },[lesson]);

  return(
    <CCard>
      <CCardHeader>
        <CFormSelect onChange={(e) => setLesson(e.target.value)}>
          {lessons.map((lesson) => 
            <option key={lesson.id} value={lesson.id} >{lesson.title}</option>
          )}
        </CFormSelect>
      </CCardHeader>

      <CCardBody>
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
       </CCardBody>
    </CCard>


  )
}
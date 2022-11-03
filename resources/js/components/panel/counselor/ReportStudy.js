import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {CCard,CCardBody,CCardHeader,CRow,CCol,CFormSelect} from '@coreui/react';
import {ProgressChart,LessonsChart,SingleLessonChart} from './widgets/Charts';
import {useAuthState} from '../../../Context/auth';
import SumStudyTable from './tables/SumStudyTable';

const ReportStudy = () => {
	
	let {student_id} = useParams();
	let {userDetails,token} = useAuthState();
	const [student,setStudent] = useState([]);
	const [previousWeek,setPreviousWeek] = useState([]);
	const [currentWeek,setCurrentWeek] = useState([]);
	const [lessons,setLessons] = useState([]);

	useEffect( async () => {
		
		const {data} = await axios.get('/api/student/'+student_id+'?token='+token);

		axios.get('/api/student/'+student_id+'/studyplans?token='+token)
		.then(function(response){
			setCurrentWeek(response.data.currentWeek);
			setPreviousWeek(response.data.previousWeek);
		})
		axios.get('/api/lessons/'+data.grade+'/'+data.major+'?token='+token)
		.then(function(response){
			setLessons(response.data.secondary);
		})
	},[]);

	return(
		<>
			{student.name}
			<CRow>
				<CCol>
					<LessonsChart data={currentWeek} />
				</CCol>

				<CCol>
					<SingleLessonChart data={currentWeek} lessons={lessons} />
				</CCol>
			</CRow>
			<CRow>
				<CCol>
					<ProgressChart currentWeek={currentWeek} previousWeek={previousWeek} />
				</CCol>

				<CCol>
					<CCard>
						<CCardHeader>
						</CCardHeader>
						
						<CCardBody>
							<SumStudyTable student={student} lessons={lessons} />
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</>
	)
}
export default ReportStudy;
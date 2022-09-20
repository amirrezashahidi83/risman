import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {CCard,CCardBody,CCardHeader,CRow,CCol,CFormSelect} from '@coreui/react';
import {ProgressChart,LessonsChart,SingleLessonChart} from './widgets/Charts';
import {useAuthState} from '../../../Context';

const ReportStudy = () => {
	
	let {id} = useParams();
	let token = useAuthState().token;
	const [studentData,setStudentData] = useState({});
	const [studyData,setStudyData] = useState([]);
	const [lessons,setLessons] = useState([]);

	useEffect( async () => {
		
		const getStudent = async () =>{
			return await axios.get('/api/student/'+id+'?token='+token);
		}
		let data = (await getStudent()).data;
		
		setStudentData(data);

		axios.get('/api/student/studyplans/'+id+'/1'+'?token='+token)
		.then(function(response){
			setStudyData(response.data);
		})

		axios.get('/api/lessons/'+data.grade+'/'+data.major+'?token='+token)
		.then(function(response){
			setLessons(response.data);
		})
	},[]);

	return(
		<>
			{studentData.name}
			<CRow>
				<CCol>
					<CCard>
						<CCardHeader>
							<CFormSelect>
								<option value='1'>عمومی و اختصاصی </option>
								<option value='2'>همه دروس اختصاصی</option>
								<option value='3'>همه دروس عمومی</option>
								<option value='4'>ساعت تست و مطالعه دروس تخصصی</option>
								<option value='5'>ساعت تست و مطالعه دروس عمومی</option>
							</CFormSelect>
						</CCardHeader>

						<CCardBody>
							<LessonsChart user_id={studentData.id} />
						</CCardBody>
					</CCard>
				</CCol>

				<CCol>
					<CCard>
						<CCardHeader>
							<CFormSelect>
								{lessons.map((lesson) => 
									<option key={lesson.id} >{lesson.name}</option>
								)}
							</CFormSelect>
						</CCardHeader>

						<CCardBody>
							<SingleLessonChart user_id={studentData.id} />
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>

			<CCard>
				<CCardHeader>
				</CCardHeader>

				<CCardBody>
					<ProgressChart user_id={studentData.id} />
				</CCardBody>
			</CCard>
		</>
	)
}
export default ReportStudy;
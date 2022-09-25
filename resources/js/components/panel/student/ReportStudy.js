import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CForm,CInputGroup
	,CFormLabel,CFormInput,CFormText,CFormSelect,CRow,CCol,CButton} from '@coreui/react';
import Select from 'react-select';
import StudyTable from './tables/StudyTable';
import {useAuthState} from '../../../Context/auth';

const ReportStudy = () => {

	const user = useAuthState().userDetails;
	const token = useAuthState().token;
	const [lessons,setLessons] = useState([]);
	const [topics,setTopics] = useState([]);
	const [data,setData] = useState({});
	
	useEffect(() => {
		axios
		.get("/api/lessons/"+user.special.grade+"/"+user.special.major
			+"?token="+token)
		.then(function(response){
			setLessons(response.data);
		});
	},[]);

	const handleSubmit = (e) => {
		
		for(let i =0;i<e.target.length;i++)
			alert(e.target[i].name);
		/*for(let i = 0;i<5;i++){
			setData(...data,
				lesson= {
					'study_time': StudyTime,
					'test_time': TestTime,
					'test_count': TestCount
				}
			)
		}
		axios.post('/api/student/report',
		{data: data,student_id: user.userDetails.id,token: user.token})
		.then(function(response){

		});*/
	}

	return(
		<CRow>
			<CCol>
				<CCard className='p-2'>
					<CCardBody>
						<CForm>
							<CRow>
								<CCol>
									<CFormLabel>درس</CFormLabel>
								</CCol>

								<CCol>
									<CFormSelect>
										{lessons.map((lesson,id)=>
											<option key={id}>{lesson.title}</option>
										)}
									</CFormSelect>
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>مبحث</CFormLabel>
								</CCol>
								<CCol>
									<Select options={topics} />
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>ساعت مطالعه</CFormLabel>
								</CCol>
								<CCol>
									<CInputGroup>
										<CRow>
										<CCol>
											<CFormInput type='number' />
										</CCol>
										:
										<CCol>
											<CFormInput type='number' />
										</CCol>
										</CRow>
									</CInputGroup>
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>ساعت تست</CFormLabel>
								</CCol>
								<CCol>
									<CInputGroup>
										<CRow>
										<CCol>
											<CFormInput type='number' />
										</CCol>
										:
										<CCol>
											<CFormInput type='number' />
										</CCol>
										</CRow>
									</CInputGroup>
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>تعداد تست</CFormLabel>
								</CCol>
								<CCol>
									<CFormInput type='number' />
								</CCol>
							</CRow>
						</CForm>
						<CButton className='w-100'>ثبت</CButton>
					</CCardBody>
				</CCard>
			</CCol>
			<CCol>
				<CCard>
					<CCardBody>
						<CForm onSubmit={handleSubmit} >
							<StudyTable user={user} lessons={lessons} />
							<CButton type='submit' >
								ثبت برنامه
							</CButton>
						</CForm>

					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	)
}
export default ReportStudy;
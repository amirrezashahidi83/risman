import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCardHeader,CRow,CCol,CFormCheck,
	CFormInput,CFormLabel,CCardFooter,CFormSelect,CButton} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';
import TimePicker from './TimePicker';

const AdvancedStudy = () => {
	
	const {userDetails,token} = useAuthState();
	const [lessons,setLessons] = useState([]);
	const [data,setData] = useState([]);
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه'];

	useEffect( () => {
		axios.get("/api/lessons/"+userDetails.special.grade+"/"+
			userDetails.special.major+"?token="+token)
			.then(function(response){
				setLessons(response.data.primary.concat(response.data.secondary));
			});
	},[]);

	const handleOnChange = (e) => {
		e.PreventDefault();
		let root = e.target.parentNode.parentNode;
		let pre_study = root[1].value;
		let deep_study = root[2].value;
		let practice = root[3].value;
		let summary = root[4].value;
		let review = root[5].value;
		let learning_test = root[6].value;
		let tutorial = root[7].value;

		if(pre_study == '' && deep_study == '' && practice == '' && summary == ''
			&& review == '' && learning_test == '' && tutorial == '')
			return;
		
		setData([...data,
			{
				'': {
					'pre_study' : pre_study,
					'deep_study' : deep_study,
					'practice' : practice,
					'summary' : summary,
					'review' : review,
					'learning_test': learning_test,
					'tutorial': tutorial
				}
			}
		]);
	}

	const handleOnSubmit = (e) => {
		e.PreventDefault();
		axios.post("/api/student/studyplans/new",
			{student_id : userDetails.special.id ,data: data,token : token})
			.then(function(response){

			});
	}

	return(
		<CCard>
			<CCardHeader>
				<CRow name='lesson' onChange={handleOnChange}>
						{lessons.map((lesson,idx) =>
							<CCol key={idx} >
								<CFormCheck 
									inline
									id={'options-'+idx}
									name='options-outlined'
									type='radio'
									button={{ color: 'primary', variant: 'outline' }}
									value={lesson.id}
									label={lesson.title}
								/>
							</CCol>
						)}
				</CRow>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol>
						<CFormLabel>پیش مطالعه</CFormLabel>
					</CCol>

					<CCol>
						<TimePicker name='pre_study' />
					</CCol>
				</CRow>

				<CRow>
					<CCol>
						<CFormLabel>مطالعه عمیق</CFormLabel>
					</CCol>

					<CCol>
						<TimePicker name='deep_study' />
					</CCol>
				</CRow>
		
				<CRow>
					<CCol>
						<CFormLabel>حل تمرین</CFormLabel>
					</CCol>

					<CCol>
						<TimePicker name='practice' />
					</CCol>
				</CRow>

				<CRow>
					<CCol>
						<CFormLabel>خلاصه برداری</CFormLabel>
					</CCol>

					<CCol>
						<TimePicker name='summary' />
					</CCol>
				</CRow>

				<CRow>
					<CCol>
						<CFormLabel>خلاصه خوانی یا مرور</CFormLabel>
					</CCol>

					<CCol>
						<TimePicker name='review' />
					</CCol>
				</CRow>

				<CRow>
					<CCol className='col-md-5'>
						<CFormLabel>تست آموزشی و سنجشی</CFormLabel>
					</CCol>

					<CCol>
						<CRow>
							<CCol>
								<TimePicker name='learning_test' />
							</CCol>
							<CCol>
								<CFormInput type='number' />	
							</CCol>
						</CRow>
					</CCol>
				</CRow>

				<CRow>
					<CCol>
						<CFormLabel>فیلم آموزشی</CFormLabel>
					</CCol>

					<CCol>
						<TimePicker name='tutorial' />
					</CCol>
				</CRow>


			</CCardBody>

			<CCardFooter>
				<CRow>
					<CCol>
						<CFormSelect>
							{daysName.map( (day,idx) => 
								<option key={idx} >{day}</option>
							)}
						</CFormSelect>
					</CCol>

					<CCol>
						<CButton>ارسال برنامه</CButton>
					</CCol>
				</CRow>
			</CCardFooter>
		</CCard>
	)
}

export default AdvancedStudy;
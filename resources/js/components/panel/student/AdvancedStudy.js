import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCardHeader,CRow,CCol,CFormCheck,CFormInput} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';

const AdvancedStudy = () => {
	
	const [userDetails,token] = useAuthState();
	const [lessons,setLessons] = useState([]);
	const [data,setData] = useState([]);

	useEffect( () => {
		axios.get("/api/lessons/"+userDetails.special.grade+"/"+
			userDetails.special.major+"?token="+token)
			.then(function(response){
				setLessons(response.data);
			});
	},[]);

	const handleOnChange = (e) => {
		let root = e.target.parentNode.parentNode;
		let pre_study = root[1].value;
		let deep_study = root[2].value;
		let practice = root[3].value;
		let summary = root[4].value;
		let review = root[5].value;
		
		if(pre_study == '' && deep_study == '' && practice == '' && summary == ''
			&& review == '')
			return;
		
		setData({...data,
			root[0].value:{
				'pre_study' : pre_study,
				'deep_study' : deep_study,
				'practice' : practice,
				'summary' : summary,
				'review' : review
			}
		});
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
				<CRow onChange={handleOnChange} name='lesson'>
					{lessons.map((lesson,idx) =>
						<CCol key={idx} >
							<CFormCheck 
								inline
								type='radio'
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

					</CCol>

					<CCol>
						<CFormInput name='pre_study' />
					</CCol>
				</CRow>

				<CRow>
					<CCol>
					</CCol>

					<CCol>
						<CFormInput name='deep_study' />
					</CCol>
				</CRow>
		
				<CRow>
					<CCol>
					</CCol>

					<CCol>
						<CFormInput name='practice' />
					</CCol>
				</CRow>

				<CRow>
					<CCol>
					</CCol>

					<CCol>
						<CFormInput name='summary' />
					</CCol>
				</CRow>

				<CRow>
					<CCol>
					</CCol>

					<CCol>
						<CFormInput name='review' />
					</CCol>
				</CRow>


			</CCardBody>
		</CCard>
	)
}

export default AdvancedStudy;
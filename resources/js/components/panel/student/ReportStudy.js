import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CForm,CInputGroup
	,CCardTitle
	,CFormLabel,CFormInput,CFormText,CFormSelect,CRow,CCol,CButton
	,CAccordion,CAccordionItem,CAccordionHeader,CAccordionBody} from '@coreui/react';
import Select from 'react-select';
import StudyTable from './tables/StudyTable';
import {useAuthState} from '../../../Context/auth';
import TimePicker from './TimePicker';

const ReportStudy = () => {

	const {userDetails,token} = useAuthState();
	const [lessons,setLessons] = useState([]);
	const [topics,setTopics] = useState([]);
	const [data,setData] = useState({});
	const [day,setDay] = useState(1);
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'];
	
	useEffect(() => {
		axios
		.get("/api/lessons/"+userDetails.special.grade+"/"+userDetails.special.major
			+"?token="+token)
		.then(function(response){
			setLessons(response.data);
		});
	},[]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let result = {};
		for(let i = 0;i < e.target.length;i++){
			let name = e.target[i].name;
			let value = e.target[i].value;

			if(name == 'lesson_id'){
				result[value] = {};
				result[value]['topic'] = e.target[i+1].value;
				result[value]['study_time'] = e.target[i+2].value; 
				result[value]['test_time'] = e.target[i+4].value; 
				result[value]['test_count'] = e.target[i+6].value; 

			}

		}

		let formData = {
			student_id: userDetails.special.id,
			day: day,
			data: result,
			token: token
		}

		axios.post("/api/student/studyplans/",formData)
		.then(function(response){

		});

	}

	return(

		<CForm onSubmit={handleSubmit}>
			<CCard>
				<CCardHeader>
					<CRow>
						<CCol>
							<CCardTitle>دفتر برنامه ریزی</CCardTitle>
						</CCol>
						<CCol>			
							<CFormSelect onChange={() => setDay(e.target.value)}>
								{daysName.map((name,idx) =>
									<option key={idx} value={idx+1}>{daysName[idx]}</option>
								)}
							</CFormSelect>
						</CCol>
					</CRow>
				</CCardHeader>
				<CCardBody>
					<CCard className='mt-3'>
						<CAccordion activeItemKey={2}>
							<CAccordionItem itemKey={1}>
						    	<CAccordionHeader>دروس ۱ </CAccordionHeader>
								<CAccordionBody>
						    		<StudyTable lessons={lessons.primary} />
							   	</CAccordionBody>
						  	</CAccordionItem>

							<CAccordionItem itemKey={2} className='mt-2'>
							    <CAccordionHeader>دروس ۲</CAccordionHeader>
								<CAccordionBody>
							    	<StudyTable lessons={lessons.secondary} />
								</CAccordionBody>
						    </CAccordionItem>
						</CAccordion>					
					</CCard>
					<div className='mt-3'>
						<CButton type='submit' >
							ثبت برنامه
						</CButton>
					</div>
				</CCardBody>
			</CCard>
		</CForm>

	)
}
export default ReportStudy;
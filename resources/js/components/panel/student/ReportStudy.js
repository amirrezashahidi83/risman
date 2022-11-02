import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CForm,CInputGroup
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
				result[value]['study_time'] = e.target[i+1].value; 
				result[value]['test_time'] = e.target[i+2].value; 
				result[value]['test_count'] = e.target[i+3].value; 

			}

		}

	}

	return(

		<CRow>
			<CCol>
				<CCard>
					<CCardBody>
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

						<CForm className='mt-3' onSubmit={handleSubmit} >
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
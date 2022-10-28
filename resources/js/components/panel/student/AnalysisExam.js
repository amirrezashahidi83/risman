import {CCard,CCardBody,CForm,CFormInput,CFormLabel,CRow,
CCol,CFormTextarea,CButton} from '@coreui/react';
import Select from 'react-select';
import useAnalysisTable from './tables/useAnalysisTable';
import {useAuthState} from '../../../Context/auth';

const AnalysisExam = () => {

	const [AnalysisTable,addItems] = useAnalysisTable();
	const {userDetails,token} = useAuthState();

	const sendAnalysis = (e) => {
		e.preventDefault();
		
		let data = [];
		let exam_balance = 0;
		let exam_id = 0;

		for(let i = 0;i<e.target.length;i++){
			const item = e.target[i];

			if(item.name == 'exam_id')
				exam_id = item.value;
			else if(item.name == 'exam_balance')
				exam_balance = item.value;
			else if(item.name == 'question_number'){
				
				let row = item.parentNode.parentNode.children;
				let question_number = item.value;
				let status = row[1].lastChild.value;
				let lesson = row[2].lastChild.value;
				let topic = row[3].lastChild.value;
				let cause = row[4].lastChild.value;
				let desicion = row[5].lastChild.value;

				data.push(
					{
						'question_number' : question_number,
						'status' : status,
						'lesson' : lesson,
						'topic' : topic,
						'cause' : cause,
						'desicion' : desicion
					}
				);
			}
		}
		let formData = {
			balance: balance,
			data: data,
			exam_id: exam_id,
			student_id: userDetails.special.id
		};

		axios.post("/api/analysises/add",formData)
		.then(function(response){
			
		});
	}

	return(
		<CForm onSubmit={sendAnalysis} >
			<CRow>
				<CCol>
					<CFormInput type='number' />
				</CCol>
				<CCol>
					<CButton onClick={() => addItems(10)}>اضافه کردن </CButton>
				</CCol>
			</CRow>
			<CCard className='mt-4'>
				<CCardBody>
					{AnalysisTable}
					<CRow>
						<CButton type='submit'>ارسال جدول</CButton>
					</CRow>
				</CCardBody>
			</CCard>
		</CForm>
	)
}
export default AnalysisExam;
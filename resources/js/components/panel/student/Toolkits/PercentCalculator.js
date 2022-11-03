import {useState} from 'react';
import {CCard,CCardBody,CForm,CFormInput,CRow,CCol,CButton} from '@coreui/react';

const PercentCalculator = () => {

	const [percent,setPercent] = useState(0);
	const [message,setMessage] = useState("");

	const handleOnSubmit = (e) => {
		
		let all_questions = e.target[0].value;
		let right_questions = e.target[1].value;
		let wrong_questions = e.target[2].value;
		let newPercent = 0;
		setPercent(newPercent);

		setMessage("aaa");
	}

	return(
		<CCard>
			<CCardBody>
				<CForm onSubmit={handleOnSubmit} >
					<CRow>
						<CCol>
							<CFormInput name='all_questions' type='number' />
						</CCol>

						<CCol>
							<CFormInput name='right_questions' type='number' />
						</CCol>

						<CCol>
							<CFormInput name='wrong_questions' type='number' />
						</CCol>
					</CRow>

					<CRow>
						<CButton type='submit'>محاسبه</CButton>
					</CRow>
				</CForm>
				<span>{percent}</span>
				<span>{message}</span>
			</CCardBody>
		</CCard>
	)
}
export default PercentCalculator;
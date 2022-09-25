import {CCard,CCardBody,CForm,CFormInput,CFormLabel,CRow,
CCol,CFormTextarea,CButton} from '@coreui/react';
import Select from 'react-select';
import {useAuthState} from '../../../Context/auth';

const AnalysisExam = ()=>{
	const [userDetails,token] = useAuthState();
	return(
		<>
			<CCard>
				<CCardBody>
					<CRow>
						<CCol>
							<Select />
						</CCol>

						<CCol>
							<CFormInput type='number' placeholder='تراز آزمون'/>
						</CCol>

						<CCol>
							<CFormInput type='number' placeholder='شماره سوال'/>
						</CCol>

						<CCol>
							<Select />
						</CCol>
					</CRow>

					<CRow className='mt-3'>
						<CCol>
							<Select />
						</CCol>

						<CCol>
							<Select />
						</CCol>

												<CCol>
							<Select />
						</CCol>

						<CCol>
							<Select />
						</CCol>
					</CRow>
					<CRow className='mt-3 ps-2 pe-2'>
						<CFormTextarea rows='3' placeholder='توضیحات'></CFormTextarea>
					</CRow>
					<CRow className='ps-2 pe-2'>
						<CButton className='mt-2'>افزودن سوال</CButton>
					</CRow>
				</CCardBody>
			</CCard>

			<CCard className='mt-4'>
				<CCardBody>
					<CRow>
						<CButton>ارسال جدول</CButton>
					</CRow>
				</CCardBody>
			</CCard>
		</>
	)
}
export default AnalysisExam;
import {CCard,CCardBody,CForm,CFormInput,CFormLabel,CRow,
CCol,CFormTextarea,CButton} from '@coreui/react';
import Select from 'react-select';
import AnalysisTable from './tables/AnalysisTable';
import {useAuthState} from '../../../Context/auth';

const AnalysisExam = () => {

	const [userDetails,token] = useAuthState();
	
	return(
		<>
			<CCard>
				<CCardBody>
					<CRow>
						<CCol>

						</CCol>

						<CCol>
							<CFormInput />
						</CCol>
					</CRow>
				</CCardBody>
			</CCard>

			<CCard className='mt-4'>
				<CCardBody>
					<AnalysisTable user={user} />
					<CRow>
						<CButton>ارسال جدول</CButton>
					</CRow>
				</CCardBody>
			</CCard>
		</>
	)
}
export default AnalysisExam;
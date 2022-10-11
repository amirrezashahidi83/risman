import {CCard,CCardBody,CForm,CFormInput,CFormLabel,CRow,
CCol,CFormTextarea,CButton} from '@coreui/react';
import Select from 'react-select';
import useAnalysisTable from './tables/useAnalysisTable';
import {useAuthState} from '../../../Context/auth';

const AnalysisExam = () => {

	const [userDetails,token] = useAuthState();
	const [AnalysisTable,addItems] = useAnalysisTable(user);

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
					<AnalysisTable />
					<CRow>
						<CButton>ارسال جدول</CButton>
					</CRow>
				</CCardBody>
			</CCard>
		</>
	)
}
export default AnalysisExam;
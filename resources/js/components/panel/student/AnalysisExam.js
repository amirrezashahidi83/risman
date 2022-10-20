import {CCard,CCardBody,CForm,CFormInput,CFormLabel,CRow,
CCol,CFormTextarea,CButton} from '@coreui/react';
import Select from 'react-select';
import useAnalysisTable from './tables/useAnalysisTable';
import {useAuthState} from '../../../Context/auth';

const AnalysisExam = () => {

	const {userDetails,token} = useAuthState();
	const [AnalysisTable,addItems] = useAnalysisTable(userDetails);

	return(
		<>
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
						<CButton>ارسال جدول</CButton>
					</CRow>
				</CCardBody>
			</CCard>
		</>
	)
}
export default AnalysisExam;
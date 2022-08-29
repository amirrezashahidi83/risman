import {useState} from 'react';
import {CCard,CCardBody,CForm,CFormInput,CRow,CCol,CButton} from "@coreui/react";
import Select from 'react-select';

const CounselorsList = ()=>{

	const [counselors,setCounselors] = useState([]);

	return (
		<>
			<CCard>
				<CCardBody>
					<CRow>
						<CCol>
							<CFormInput placeholder='کلمه کلیدی'/>
						</CCol>
						<CCol>
							<Select />
						</CCol>
					</CRow>
					<CRow>
						<CCol>
							<Select />
						</CCol>
						<CCol>
							<Select />
						</CCol>
					</CRow>
					<CRow>
						<CButton>کلمه کلیدی</CButton>
					</CRow>
				</CCardBody>
			</CCard>
			<CCard>
				<CCardBody>

				</CCardBody>
			</CCard>
		</>
	)
}
export default CounselorsList;
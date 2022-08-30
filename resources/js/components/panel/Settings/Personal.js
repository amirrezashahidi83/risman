import {CCard,CCardBody,CFormInput,CRow,CCol,CInputGroup,CFormLabel
	} from '@coreui/react';
import Avatar from 'react-avatar';

const Personal = ()=>{
	return(
		<>
			<CRow>
				<CCol>
					<Avatar round={true}/>
				</CCol>

				<CCol>
					<CInputGroup>
						<CFormInput name='name' placeholder=''/>
					</CInputGroup>
				</CCol>
			</CRow>
		</>
	)
}
export default Personal;
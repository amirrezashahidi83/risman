import {CCard,CCardBody,CFormInput,CRow,CCol,CInputGroup,CFormLabel
	} from '@coreui/react';
import Avatar from 'react-avatar';

const Personal = () => {

	const handleSubmit = () => {
		axios.post('/user/settings/update')
		.then(function(response){

		});
	}

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
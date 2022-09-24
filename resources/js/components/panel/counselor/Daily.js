import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCol,CRow,CButton,CFormInput,CInputGroup,CFormTextarea,CFormLabel
	,CForm} from '@coreui/react';
import DailiesTable from './tables/DailiesTable';
import {useAuthState} from '../../../Context';

const Daily = () => {

	const user = useAuthState().userDetails;
	const token = useAuthState().token;
	
	const [dailies,setDailies] = useState([]);

	useEffect( () => {
		
		axios.get('/api/counselor/'+user.special.id+'/dailies?token='+token)
			.then(function(response){
				setDailies(response.data);
			});

	},[]);

	const handleNewMessage = (event) => {
		    event.preventDefault();
		let message = event.target.message.value;
		axios.post("/api/counselor/dailies/newMessage",
			{counselor_id:user.special.id,text:message,token:token,type:1})
			.then(function(response){
				window.location.reload();
			});
	}

	const handleNewPicture = (event) => {
		
		let picture = event.target.picture.value;
		axios.post("/api/counselor/dailies/newPicture",
			{counselor_id:user.userDetails.id,picture:picture,token:token})
			.then(function(response){
				window.location.reload();
			});
	}

	return(
		<>	
			<CRow>
				<CCol>
					<CCard>
						<CForm onSubmit={handleNewPicture}>
							<CCardBody>
								<CFormInput type='file' />
								<CButton className='w-100 mt-3'>افزودن</CButton>
							</CCardBody>
						</CForm>
					</CCard>
				</CCol>
				<CCol>
					<CCard onSubmit={handleNewMessage}>
						<CForm>
							<CCardBody>
								<CInputGroup>
									<CFormInput name='message' />
								</CInputGroup>
								<CButton className='w-100 mt-3' type='submit'>افزودن</CButton>
							</CCardBody>
						</CForm>
					</CCard>
				</CCol>
			</CRow>
			<CCard>
				<CCardBody>
					<DailiesTable user={user} dailies={dailies} />
				</CCardBody>
			</CCard>
		</>
	)
}
export default Daily;
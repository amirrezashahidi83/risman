import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCol,CRow,CButton,CFormInput,CInputGroup,CFormTextarea,CFormLabel
	,CForm} from '@coreui/react';
import DailiesTable from './tables/DailiesTable';
import {useAuthState} from '../../../Context';

const Daily = () => {
	const user = useAuthState();	
	const [messages,setMessages] = useState([]);
	const [pictures,setPictures] = useState([]);

	useEffect(()=>{
		axios.get('/api/counselor/dailies/'+'')
			.then(function(response){
				setMessages(response.data.messages);
				setPictures(response.data.pictures);
			});
	},[]);

	const handleNewMessage = (event) => {
		let message = event.target.message.value;
		axios.post("/api/counselor/dailies/newMessage",{counselor_id:user.id,message:message})
			.then(function(response){
				window.location.reload();
			});
	}

	const handleNewPicture = (event) => {
		let picture = event.target.picture.value;
		axios.post("/api/counselor/dailies/newPicture",{counselor_id:user.id,picture:picture})
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
									<CFormInput />
								</CInputGroup>
								<CButton className='w-100 mt-3'>افزودن</CButton>
							</CCardBody>
						</CForm>
					</CCard>
				</CCol>
			</CRow>
			<CCard>
				<CCardBody>
					<DailiesTable user={user} />
				</CCardBody>
			</CCard>
		</>
	)
}
export default Daily;
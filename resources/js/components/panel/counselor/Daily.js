import {useState,useEffect} from 'react';
import {CCard,CCardBody,CCol,CRow,CButton,CFormInput,CInputGroup,CFormTextarea,CFormLabel
	} from '@coreui/react';
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

	const addNew = (event) =>{
		axios.post("/api/counselor/dailies/new")
			.then(function(response){
				window.location.reload();
			});
	}
	return(
		<>	
			<CRow>
				<CCol>
					<CCard>
						<CCardBody>
							<CFormInput type='file' />
							<CButton className='w-100 mt-3'>افزودن</CButton>
						</CCardBody>
					</CCard>
				</CCol>
				<CCol>
					<CCard>
						<CCardBody>
							<CInputGroup>
								<CFormInput />
							</CInputGroup>
							<CButton className='w-100 mt-3'>افزودن</CButton>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
			<CCard>
				<CCardBody>
					<DailiesTable />
				</CCardBody>
			</CCard>
		</>
	)
}
export default Daily;
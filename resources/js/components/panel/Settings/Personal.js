import {useState,useEffect} from 'react';
import {CCard,CCardBody,CFormInput,CRow,CCol,CInputGroup,CFormLabel
	} from '@coreui/react';
import Avatar from 'react-avatar';
import {useAuthState} from '../../../Context/auth';
import useImageCropper from './modals/useImageCropper';

const Personal = () => {

	const [token,user] = useAuthState();
	const [states,setStates] = useState([]);
	const [cities,setCities] = useState([]);
	const [ModalComponent,setSource] = useImageCropper();

	useEffect( () => {
		
		axios.get("https://iran-locations-api.vercel.app/api/v1/states")
		.then(function(response){
			setStates(response.data);
		});

	},[]);


	const onStateChanged = (e) => {
		let state = e.target.value;
		axios.get("https://iran-locations-api.vercel.app/api/v1/states?id="+state)
		.then(function(response){
			setCities(response.data);
		});
	}

	const handleSubmit = (e) => {
		let name = e.target[0].value;
		let phoneNumber = e.target[1].value;
		let nationalCode = e.target[2].value;
		let state = e.target[3].value;
		let city = e.target[4].value;
		let password = e.target[5].value;

		let formData = {name: name,phoneNumber: phoneNumber, nationalCode: nationalCode,
			state: state, city: city ,password : password}
		axios.post('/user/'+user.id+'/settings/update?token='+token
			,formData)
		.then(function(response){

		});
	}

	return(
		<>
			<ModalComponent />
			<CRow>
				<CCol>
					<Avatar round={true} src={user.profilePic} onClick/>
				</CCol>

				<CCol>
					<CRow>
						<CCol>
							<CFormInput name='name' value={user.name} />
						</CCol>
					</CRow>
					<CRow>
						<CCol>
							<CFormInput name='phoneNumber' value={user.phoneNumber} />
						</CCol>
					</CRow>
				</CCol>
			</CRow>
			
			<CRow>
				<CCol>
					<CFormInput name='nationalCode' value={user.nationalCode} />
				</CCol>

				<CCol>
					<CFormSelect>
						 {states.map( (state) => 
						 	<option key={state.id} value={state.id}>{state.name} </option>
						 )}
					</CFormSelect>
				</CCol>

				<CCol>
					<CFormSelect>
						 {cities.map( (city) => 
						 	<option key={city.id} value={city.id} >{city.name} </option>
						 )}
					</CFormSelect>
				</CCol>
			</CRow>

			<CRow>
				<CCol>
					<CFormInput name='password' type='password' />
				</CCol>

				<CCol>
					<CFormInput name='again_password' type='password' />
				</CCol>
			</CRow>
		</>
	)
}
export default Personal;
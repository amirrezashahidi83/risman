import {useState,useEffect} from 'react';
import {CCard,CCardBody,CFormInput,CRow,CCol,CInputGroup,CFormLabel,CFormSelect,CButton
	} from '@coreui/react';
import Avatar from 'react-avatar';
import {useAuthState} from '../../../Context/auth';
import useImageCropper from './modals/useImageCropper';

const Personal = () => {

	const {token,userDetails} = useAuthState();
	const [states,setStates] = useState([]);
	const [selectedState,setSelectedState] = useState('آذربايجان شرقی');
	const [cities,setCities] = useState([]);

	useEffect(() => {
		fetch('https://iran-locations-api.vercel.app/api/v1/states')
		.then((response) => response.json())   
		.then((data) => setStates(data) );
	},[]);

	useEffect( () => {
		fetch("https://iran-locations-api.vercel.app/api/v1/cities?state="+selectedState)
		.then((response) => response.json())
		.then((data) => setCities(data.cities));

	},[selectedState])

	const selectState = (e) => {
		let state = e.target.value;
		console.log(state);
	}
	const handleSubmit = (e) => {
		let name = e.target[0].value;
		let phoneNumber = e.target[1].value;
		let nationalCode = e.target[2].value;
		let state = e.target[3].value;
		let city = e.target[4].value;
		let password = e.target[5].value;

		let formData = {
			name: name,
			phoneNumber: phoneNumber, 
			nationalCode: nationalCode,
			state: state, 
			city: city ,
			password: password,
			token: token
		}

		axios.post('/user/'+userDetails.id+'/settings/update'
			,formData)
		.then(function(response){

		});
	}

	return(
		<>
			<CRow>
				<CCol>
					<Avatar src={userDetails.profilePic} />
				</CCol>

				<CCol className='col-md-9'>
					<CRow>
						<CCol>
							<CFormInput name='name' value={userDetails.name} />
						</CCol>
						<CCol>
							<CFormInput name='phoneNumber' value={userDetails.phoneNumber} />
						</CCol>
					</CRow>
					<CRow className='mt-2'>
						<CCol>
							<CFormSelect onChange={selectState} >
								 {states.map( (state) => 
								 	<option key={state.id} value={state.name}>{state.name} </option>
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
					<CRow className='mt-2'>
						<CCol>
							<CFormInput name='nationalCode' value={userDetails.nationalCode} />
						</CCol>

						<CCol>
							<CFormInput name='specialities' value={''} />
						</CCol>
					</CRow>

				</CCol>

			</CRow>
			
			<CRow className='mt-3'>
				<CCol>
					<CFormInput name='password' type='password' />
				</CCol>

				<CCol>
					<CFormInput name='again_password' type='password' />
				</CCol>
			</CRow>

			<CRow className='mt-3'>
				<CCol>
					<CButton>ذخیره</CButton>
				</CCol>
			</CRow>
		</>
	)
}
export default Personal;
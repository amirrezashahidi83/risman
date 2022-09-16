import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CCol} from '@coreui/react';
import {useAuthState} from '../../../Context';

const AutomaticDaily = () => { 
	const [dailies,setDailies] = useState([]);
	const user = useAuthState();

	useEffect( () => {
		axios.get("/api/counselor/dailies/"+user.id)
		.then(function(response){
			setDailies(response.data);
		});
	});

	return(
		<CCard>
			<CCardBody>
				{dailies.map((daily,idx) => 
					<CCard key={idx} >
						<CCardBody>
							<CRow>
								<CCol>
									{daily.message}
								</CCol>

								<CCol>
									{daily.times}
								</CCol>
							</CRow>
						</CCardBody>
					</CCard>
				)}
			</CCardBody>
		</CCard>
	)
	
}
export default AutomaticDaily;
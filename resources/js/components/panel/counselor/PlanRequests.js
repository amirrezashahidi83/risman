import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CButton} from '@coreui/react';
import {useAuthState} from '../../../Context';

const PlanRequests = () => {
	const [requests,setRequests] = useState([]);
	const user = useAuthState();

	useEffect( () => {
		axios.get("/api/counselor/requests/"+user.id)
		.then(function(response){
			setRequests(response.data);
		});
	},[]);

	const sendPlan = (e) => {
		axios.post("/api/counselor/"+user.id+"/requests/accept/"+)
		.then(function(response){

		});
	}
	
	return(
		<CRow>
			<CButton></CButton>
			<CButton></CButton>
		</CRow>
		<CCard>
			<CCardBody>
				{requests.map((request,id) => 
					<CCard key={id}>
						<CCardBody>

						</CCardBody>
					</CCard>
				)}
			</CCardBody>
		</CCard>
	)
}

export default PlanRequests;
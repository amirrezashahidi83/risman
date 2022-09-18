import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CButton} from '@coreui/react';
import {useAuthState} from '../../../Context';

const PlanRequests = () => {
	const [requests,setRequests] = useState([]);
	const user = useAuthState();

	useEffect( () => {
		axios.get("/api/student/requests/"+user.id)
		.then(function(response){
			setRequests(response.data);
		});
	},[]);

	const ExamRequest = () => {
		axios.post("/api/student/requests/exam/"+user.id)
		.then(function(response){

		});
	}

	const addNew = () => {
		axios.post("/api/student/requests/new/"+user.id)
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
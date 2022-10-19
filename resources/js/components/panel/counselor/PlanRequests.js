import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CButton,CModal,CModalBody,CModalHeader} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';

const PlanRequests = () => {
	const [requests,setRequests] = useState([]);
	const {userDetails,token} = useAuthState();
	const [visible,setVisible] = useState(false);
	const [selectedPlan,setSelectedPlan] = useState({});

	useEffect( () => {
		axios.get("/api/counselor/requests/"+userDetails.id)
		.then(function(response){
			setRequests(response.data);
		});
	},[]);

	const sendPlan = (e) => {
		axios.post("/api/counselor/"+userDetails.id+"/requests/accept/")
		.then(function(response){

		});
	}

	const showDetails = (plan) => {
		setSelectedPlan(plan);
		setVisible(true);

	}
	
	return(
		<>
			<CModal show={visible} >

				<CModalHeader onClose={ () => setVisible(false) } >
				</CModalHeader>
			
				<CModalBody>
				{selectedPlan.id}
				</CModalBody>
			</CModal>

			<CRow>
				<CButton onClick={sendPlan} ></CButton>
			</CRow>
			<CCard>
				<CCardBody>
					{requests.map((request,id) => 
						<CCard key={id}>
							<CCardBody>
								<CRow>
									<CCol>

									</CCol>

									<CCol>
										<CButton onClick={showDetails}> </CButton>
									</CCol>
									
									<CCol>
										<CButton onClick={sendPlan} ></CButton>
									</CCol>
								</CRow>

							</CCardBody>
						</CCard>
					)}
				</CCardBody>
			</CCard>
		</>
	)
}

export default PlanRequests;
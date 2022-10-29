import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CCol,CButton,CModal,CModalBody,CModalHeader} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';

const PlanRequests = () => {
	const [requests,setRequests] = useState([]);
	const {userDetails,token} = useAuthState();
	const [visible,setVisible] = useState(false);
	const [selectedPlan,setSelectedPlan] = useState({});

	useEffect( () => {
		axios.get("/api/counselor/"+userDetails.id+"/requests?token="+token)
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
			<CCard>
				<CCardBody>
					{requests.map((request,id) => 
						<CCard key={id}>
							<CCardBody>
								<CRow>
									<CCol>

									</CCol>

									<CCol>
										<CButton onClick={showDetails}>مشاهده جزئیات</CButton>
									</CCol>
									
									<CCol>
										<CButton onClick={sendPlan} >ارسال برنامه</CButton>
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
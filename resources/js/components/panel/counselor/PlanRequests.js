import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CCol,CButton,CModal,CModalBody,CModalHeader} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';
import {useNavigate} from 'react-router-dom';

const PlanRequests = () => {
	
	const [requests,setRequests] = useState([]);
	const {userDetails,token} = useAuthState();
	const [visible,setVisible] = useState(false);
	const [selectedPlan,setSelectedPlan] = useState({});

	const navigate = useNavigate();

	useEffect( () => {
		axios.get("/api/counselor/"+userDetails.id+"/requests?token="+token)
		.then(function(response){
			setRequests(response.data);
		});
	},[]);

	const sendPlan = (request_id) => {

		let formData = {
			request_id: request_id,
			token: token
		}

		axios.post("/api/counselor/requests/accept/",formData)
		.then(function(response){
			let student_id = response.data;
			navigate('/counselor/sendplan/'+student_id);
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
										{request.id}
									</CCol>

									<CCol>
										<CButton onClick={showDetails}>مشاهده جزئیات</CButton>
									</CCol>
									
									<CCol>
										<CButton onClick={() => sendPlan(request.id)} >ارسال برنامه</CButton>
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
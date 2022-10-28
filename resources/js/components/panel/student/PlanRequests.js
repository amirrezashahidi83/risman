import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CCol,CButton} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';

const PlanRequests = () => {

	const [requests,setRequests] = useState([]);
	const {userDetails,token} = useAuthState();

	useEffect( () => {
		axios.get("/api/student/"+userDetails.special.id+"/plan/requests?token="+token)
		.then(function(response){
			setRequests(response.data);
		});
	},[]);

	const ExamRequest = () => {
		axios.post("/api/student/requests/new/exam/"+user.id)
		.then(function(response){

		});
	}

	const addNew = () => {
		axios.post("/api/student/requests/new/"+user.id)
		.then(function(response){

		});
	}
	
	return(
		<>
			<CRow>
				<CCol>
					<CButton onClick={addNew} >درخواست جدید</CButton>
				</CCol>
				<CCol>
					<CButton onClick={ExamRequest} >در خواست برنامه امتحانات</CButton>
				</CCol>
			</CRow>

			<CCard className='mt-2'>
				<CCardBody>
					{requests.map((request,id) => 
						<CCard key={id} className={request.status == 1 ? 'border border-success' : 'border border-danger'}>
							<CCardBody>
								{id + 1} درخواست
							</CCardBody>
						</CCard>
					)}
				</CCardBody>
			</CCard>
		</>
	)
}

export default PlanRequests;
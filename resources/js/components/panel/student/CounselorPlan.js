import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CCard,CCardBody,CButton,CRow,CCol} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';
import PlanTable from './tables/PlanTable';

const CounselorPlan = () => {
	
	const {userDetails,token} = useAuthState();
	const plan_id = userDetails.special.plan_id;
	const {navigate} = useNavigate();

	const navigateToRequests = () => {
		navigate('/plan/requests');
	}

	return(
		<>
			{plan_id != undefined ?
				<PlanTable />
				:
				<div className='text-center'>
					<div>شما برنامه ای ندارید</div>
					<center>
						<CButton onClick={navigateToRequests} >
						درخواست برنامه جدید
						</CButton>
					</center>
				</div>
			}
		</>
	)
}
export default CounselorPlan;
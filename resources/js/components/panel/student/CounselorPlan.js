import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CCard,CCardBody,CButton} from '@coreui/react';
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
		<CCard>
			<CCardBody>
			{plan_id != undefined ?
				<PlanTable />
				:
				<>
					<span>شما برنامه ای ندارید</span>
					<CButton onClick={navigateToRequests} >
					درخواست برنامه جدید
					</CButton>
				</>
			}
			</CCardBody>
		</CCard>
	)
}
export default CounselorPlan;
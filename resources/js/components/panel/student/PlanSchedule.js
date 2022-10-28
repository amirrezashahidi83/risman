import {useState,useEffect} from 'react';
import ScheduleTable from './tables/ScheduleTable';
import {CCard,CCardBody,CForm} from '@coreui/react';
import {useAuthState} from '../../../Context/auth';

const PlanSchedule = () => {

	const {token,userDetails} = useAuthState();
	const student_id = userDetails.special.id;

	const saveSchedule = (e) => {
		e.preventDefault();
		let result = [];
		let items = e.target;
		for(let i = 0;i<items.length;i++){
			let item = items[i];
			if(item.name == "t0"){
				let lastIndex = result.push([]) - 1;
				for(let j = 1;j<7;j++)
					result[lastIndex].push(items[i+j].value);
			}
		}
		console.log(result);
		axios.post("/api/student/schedule/new",
			{ 
				token: token, 
				student_id: student_id, 
				schedule: result

			}
		)
		.then(function(response){

		});
	}
	return(
		<CCard>
			<CCardBody>
				<CForm onSubmit={saveSchedule} >
					<ScheduleTable />
				</CForm>
			</CCardBody>
		</CCard>
	)
}
export default PlanSchedule;
import {useState} from 'react';
import {CCard,CCardBody} from '@coreui/react';
import ScheduleTable from './tables/ScheduleTable';
const Schedule = () => {

	const handleSubmit = () => {
		let data = [];

		for(let i = 0;i< 7;i++){
			data = {...data,
			[
				'day':day,
				'part':part,
				'lesson_id':lesson_id
			]};
		}

		axios.post("/api/student/schedule/update",{data:data})
		.then(function(response){

		});
	}

	return(
		<CCard>
			<CCardBody>
				<ScheduleTable />
			</CCardBody>
		</CCard>
	)

}
export Schedule;
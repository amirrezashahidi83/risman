import ScheduleTable from './tables/ScheduleTable';
import {CCard,CCardBody} from '@coreui/react';

const PlanSchedule = () => {
	return(
		<CCard>
			<CCardBody>
				<ScheduleTable />
			</CCardBody>
		</CCard>
	)
}
export default PlanSchedule;
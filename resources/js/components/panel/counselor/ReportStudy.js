import {useState} from 'react';
import {CCard,CCardBody,CCardHeader,CRow,CCol} from '@coreui/react';
import {ProgressChart,LessonsChart,SingleLessonChart} from './Charts';
import {useAuthState} from '../../../Context';

const ReportStudy = () => {
	
	const user = useAuthState();
	let user_id = user.id;
	return(
		<>
			<CRow>
				<CCol>
					<CCard>
						<CCardHeader>
						</CCardHeader>

						<CCardBody>
							<LessonsChart user_id={user_id} />
						</CCardBody>
					</CCard>
				</CCol>

				<CCol>
					<CCard>
						<CCardHeader>
						</CCardHeader>

						<CCardBody>
							<SingleLessonChart user_id={user_id} />
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>

			<CCard>
				<CCardHeader>
				</CCardHeader>

				<CCardBody>
					<ProgressChart user_id={user_id} />
				</CCardBody>
			</CCard>
		</>
	)
}
export default ReportStudy;
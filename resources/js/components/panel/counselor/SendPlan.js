import {useState} from 'react';
import {CCard,CCardBody,CForm,CTable,CTableCaption,CTableBody,CTableRow
	,CTableHeaderCell,CTableDataCell} from '@coreui/react';
import useLessonChooser from './modals/useLessonChooser';
const SendPlan = () => {
	
	const [modalData,selectedLesson,selectedTopic,description,
		studyTime,testTime,testCount] = useLessonChooser('');
	
	const [plan,setPlan] = useState([]);

	const handleClick = () => {
		setPlan((plan) => [
			...plan,
			[
				selectedLesson,
				selectedTopic,
				description,
				studyTime,
				testTime,
				testCount
			]
		]);
	}

	return(
		<>
			<CCard>
				<CCardBody>
					<ScheduleTable />
				</CCardBody>
			</CCard>

			<CCard>
				<CForm>
					<CCardBody>
						<CTable>
							<CTableCaption>
							</CTableCaption>
							<CTableHead>
								<CTableRow>
									<CTableHeaderCell>روز</CTableHeaderCell>
									<CTableHeaderCell>تایم اول</CTableHeaderCell>
									<CTableHeaderCell>تیام دوم</CTableHeaderCell>
									<CTableHeaderCell>تایم سوم</CTableHeaderCell>
									<CTableHeaderCell>تایم چهارم</CTableHeaderCell>
									<CTableHeaderCell>تایم پنجم</CTableHeaderCell>
									<CTableHeaderCell>تایم ششم</CTableHeaderCell>
								</CTableRow>
							</CTableHead>
							<CTableBody>
								{[...Array(7)].map((i) => 
									<CTableRow key={i}>
										<CTableDataCell></CTableDataCell>
										<CTableDataCell></CTableDataCell>
										<CTableDataCell></CTableDataCell>
										<CTableDataCell></CTableDataCell>
										<CTableDataCell></CTableDataCell>
										<CTableDataCell></CTableDataCell>
										<CTableDataCell></CTableDataCell>
									</CTableRow>
								)}
							</CTableBody>
						</CTable>						
					</CCardBody>
				</CForm>
			</CCard>
		</>
	)
}
export default SendPlan;
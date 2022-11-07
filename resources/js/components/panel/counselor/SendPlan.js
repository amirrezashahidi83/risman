import {useState} from 'react';
import {CCard,CCardBody,CForm,CTable,CTableCaption,CTableBody,CTableRow
	,CTableHeaderCell,CTableDataCell,CTableHead} from '@coreui/react';
import useLessonChooser from './modals/useLessonChooser';
import ScheduleTable from './tables/ScheduleTable';
import {useParams} from 'react-router-dom';

const SendPlan = () => {
	
	const {student_id} = useParams();

	const {modalData,setShow,selectedData} = useLessonChooser(student_id);
	
	const [plan,setPlan] = useState([]);
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه'];

	const handleClick = (e) => {
		setShow(true);
		setPlan([
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
		e.target.value = selectedLesson;
	}

	return(
		<>
			<CCard>
				<CCardBody>
					<ScheduleTable student={student_id} />
				</CCardBody>
			</CCard>
			{modalData}
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
										<CTableDataCell>{daysName[i]}</CTableDataCell>
										{[...Array(6).map( (j) => 
											<CTableDataCell>
											</CTableDataCell>
										)]}
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
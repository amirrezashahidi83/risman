import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableFoot,CButton,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormInput,CFormSelect} from '@coreui/react';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {useAuthState} from '../../../../Context/auth';

const ScheduleTable = () => {
	
	const [lessons,setLessons] = useState([]);
	const [schedule,setSchedule] = useState([]);
	const [editMode,setEditMode] = useState(false);
	const {token,userDetails} = useAuthState();
	const student_id = userDetails.special.id;
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه'];

	useEffect(() => {
			axios.get("/api/lessons/"+userDetails.special.grade+"/"+userDetails.special.major
				+"?token="+token)
				.then(function(response){
					setLessons(response.data);
				});

			axios.get("/api/student/schedule/"+userDetails.special.id+"?token="+token)
			.then(function(response){
				setSchedule(JSON.parse(response.data.plan));

			});
		

	},[]);

	const selectLesson = (e) => {
		let child_id = e.target.key;
		let parent_id = e.target.parentNode.key;
		//let newSchedule = schedule;
		newSchedule[parent_id][child_id] = lesson_id;

		//setSchedule(newSchedule);

	}
	
	return(
		<CTable caption='top'>
			<CTableCaption>
				{!editMode ? 
					<CButton onClick={() => setEditMode(true) } shape='rounded' variant='outline'>
						<EditIcon />
					</CButton>
					:
					<></>
				}
				{editMode ?
					<CButton type='submit' shape='rounded' variant='outline'>
						<SaveIcon />
					</CButton>
					:
					<></>
				}
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">روز</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تایم اول</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تایم دوم</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تایم سوم</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تایم چهارم</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تایم پنجم</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تایم ششم</CTableHeaderCell>

    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{schedule.map( (day,idx) => 
					<CTableRow key={idx} >
						{day.map( (time,idy) => {
							return(
								<>
									{idy == 0 ? <CTableDataCell>{daysName[idx]}</CTableDataCell> : <></>}
									<CTableDataCell key={idy} >
										<CFormSelect name={"t"+idx} onChange={selectLesson} selected={day[idy]}>
											{lessons.map( (lesson) => 
												<option key={lesson.id} value={lesson.id} >{lesson.title}</option>
											)}
										</CFormSelect>
									</CTableDataCell>
								</>
							)
						})}
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default ScheduleTable;
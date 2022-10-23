import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormInput} from '@coreui/react';
import Select from 'react-select';
import {useAuthState} from '../../../../Context/auth';

const ScheduleTable = () => {
	
	const [lessons,setLessons] = useState([]);
	const [schedule,setSchedule] = useState([]);
	const {token,userDetails} = useAuthState();
	const student_id = userDetails.special.id;

	useEffect(() => {
		axios.get("/api/lessons/"+userDetails.special.grade+"/"+userDetails.special.major
			+"?token="+token)
			.then(function(response){
				setLessons(response.data);
			});

		axios.get("/api/student/schedule/"+userDetails.special.id+"?token="+token)
		.then(function(response){

		});

	},[]);

	const saveSchedule = () => {
		axios.post("/api/student/schedule/new",
			{ token: token, student_id: student_id, schedule: schedule}
			)
		.then(function(response){

		});
	}

	const selectLesson = (e) => {
		let child_id = e.target.key;
		let parent_id = e.target.parentNode.key;
		let newSchedule = schedule;
		newSchedule[parent_id][child_id] = lesson_id;

		setSchedule(newSchedule);

	}
	
	return(
		<CTable>
			<CTableCaption>
				<Select options={daysName} onChange={onSelectChange} />
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
						{day.map( (time,idy) => 
							<CTableDataCell onClick={selectLesson} key={idy} >
								{day[idy]}
							</CTableDataCell>
						)}
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default ScheduleTable;
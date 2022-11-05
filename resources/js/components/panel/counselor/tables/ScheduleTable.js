import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableFoot,CButton,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormInput,CFormSelect} from '@coreui/react';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {useAuthState} from '../../../../Context/auth';

const ScheduleTable = ({student}) => {

	const {userDetails,token} = useAuthState();	
	const [schedule,setSchedule] = useState([]);
	const [lessons,setLessons] = useState([]);
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه'];

	useEffect(() => {

			if(student != undefined){
				axios.get("/api/student/"+student.id+"?token="+token)
				.then(function(response){

				});

				axios.get("/api/lessons/"+userDetails.special.grade+"/"+userDetails.special.major
					+"?token="+token)
					.then(function(response){
						setLessons(response.data.primary.concat(response.data.secondary));
					});

				axios.get("/api/student/schedule/"+userDetails.special.id+"?token="+token)
				.then(function(response){
					setSchedule(JSON.parse(response.data.plan));

				});
			}
		

	},[]);
	
	return(
		<CTable caption='top'>
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
										<span>{time}</span>
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
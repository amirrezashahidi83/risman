import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormInput} from '@coreui/react';
import Select from 'react-select';
import {useAuthState} from '../../../Context/auth';

const ScheduleTable = () => {
	
	const [lessons,setLessons] = useState([]);
	const [token,user] = use 
	useEffect(() => {
		axios.get("/api/lessons/")
			.then(function(response){
				setLessons(response.data);
			});

	});

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
				<CTableRow key={lesson.id} >
					<CTableHeaderCell scope='row'>{lesson.name}</CTableHeaderCell>
					<CTableDataCell>{lesson.grade}</CTableDataCell>
					<CTableDataCell><CFormInput /></CTableDataCell>
					<CTableDataCell><CFormInput /></CTableDataCell>
					<CTableDataCell><CFormInput /></CTableDataCell>
				</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default ScheduleTable;
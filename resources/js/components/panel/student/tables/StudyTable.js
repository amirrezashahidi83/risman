import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormInput} from '@coreui/react';
import Select from 'react-select';

const StudyTable = ()=>{
	
	const [lessons,setLessons] = useState([]);

	useEffect(() =>{
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
      				<CTableHeaderCell scope="col">درس</CTableHeaderCell>
      				<CTableHeaderCell scope="col">پایه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت مطالعه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تعداد تست</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{lessons.map((lesson) => 
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
export default StudyTable;
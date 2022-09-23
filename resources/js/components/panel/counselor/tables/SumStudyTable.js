import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormSelect,CRow,CCol} from '@coreui/react';
import Select from 'react-select';

const SumStudyTable = ({user,student})=>{
	
	let counselor_id = user.userDetails.special.id;
	const [compares,setCompares] = useState([]);
	const [lessons,setLessons] = useState([]);
	
	useEffect(() =>{
		
		axios.get("/api/counselor/"+student.id+"/compareplan?token="+user.token)
		.then(function(response){
			setCompares(response.data);
		});

		axios.get("/api/lessons/"+student.grade+"/"+student.major)
		.then(function(response){
			setLessons(lessons);
		});

	},[]);

	return(
		<CTable>
			<CTableCaption>
				<CRow>
					<CCol>
						<CFormSelect>
							{lessons.map((lesson) => 
								<option key={lesson.id} value={lesson.id} >{lesson.name}</option>
							)}
						</CFormSelect>
					</CCol>
					<CCol>
					</CCol>
				</CRow>
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">درس</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت مطالعه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تعداد تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">وضعیت</CTableHeaderCell>
      				<CTableHeaderCell scope="col">توضیحات</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{compares.map((row,idx) =>
					<CTableRow key={idx}>
						<CTableHeaderCell scope='row'>{row[0]}</CTableHeaderCell>
						<CTableDataCell>{row[1]}</CTableDataCell>
						<CTableDataCell>{row[2]}</CTableDataCell>
						<CTableDataCell>{row[3]}</CTableDataCell>
						<CTableDataCell>{row[4]}</CTableDataCell>
						<CTableDataCell>{row.study_count}</CTableDataCell>
						<CTableDataCell>{row.status}</CTableDataCell>
						<CTableDataCell>{row.description}</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default SumStudyTable;
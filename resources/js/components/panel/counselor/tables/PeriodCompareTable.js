import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormSelect,CRow,CCol} from '@coreui/react';
import Select from 'react-select';

const PeriodCompareTable = ({counselor_id})=>{
	
	const [compares,setCompares] = useState([]);
	const [lessons,setLessons] = useState([]);
	
	useEffect(() =>{
		
		axios.get("/api/counselor/compareperiod/"+counselor_id)
		.then(function(response){
			setCompares(response.data);
		});

		axios.get("/api/lessons/")
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
      				<CTableHeaderCell scope="col">دانش آموز</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت مطالعه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تعداد تست</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{compares.map((row,idx) =>
					<CTableRow key={idx}>
						<CTableHeaderCell scope='row'>{row[0]}</CTableHeaderCell>
						<CTableDataCell>{row[1]}</CTableDataCell>
						<CTableDataCell>{row[2]}</CTableDataCell>
						<CTableDataCell>{row[3]}</CTableDataCell>
						<CTableDataCell>{row.topic}</CTableDataCell>
						<CTableDataCell>{row.cause}</CTableDataCell>
						<CTableDataCell>{row.desicion}</CTableDataCell>
						<CTableDataCell>{row.description}</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default PeriodCompareTable;
import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption} from '@coreui/react';
import Select from 'react-select';

const PeriodCompareTable = ()=>{
	
	const [compares,setCompares] = useState([]);

	useEffect(() =>{
		
		axios.get("/api/counselor/compareperiod/"+user_id)
		.then(function(response){
			setCompares(response.data);
		});

	});

	return(
		<CTable>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">دانش آموز</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت مطالعه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تعداد تست</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{exams[selected].map((row,idx) =>
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
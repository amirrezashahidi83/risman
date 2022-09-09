import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption} from '@coreui/react';
import Select from 'react-select';

const WeeksCompareTable = ()=>{
	
	const [compares,setCompares] = useState([]);
	
	useEffect(() =>{
		
		axios.get("/api/counselor/compare2weeks/")
		.then(function(response){
			setCompares(response.data);
		});

	});

	return(
		<CTable>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">دانش آموز</CTableHeaderCell>
      				<CTableHeaderCell scope="col">هفته اول</CTableHeaderCell>
      				<CTableHeaderCell scope="col">هفته دوم</CTableHeaderCell>
      				<CTableHeaderCell scope="col">میزان رشد</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{compares.map((row,idx) =>
					<CTableRow key={idx}>
						<CTableHeaderCell scope='row'>{row[0]}</CTableHeaderCell>
						<CTableDataCell>{row[1]}</CTableDataCell>
						<CTableDataCell>{row[2]}</CTableDataCell>
						<CTableDataCell>{row[3]}</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default WeeksCompareTable;
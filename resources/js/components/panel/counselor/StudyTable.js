import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption} from '@coreui/react';
import Select from 'react-select';

const StudyTable = ()=>{
	
	const [rows,setRows] = useState([]);
	const [day,setDay] = useState(1);
	const daysName = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'];
	
	useEffect(() =>{
		
		axios.get("/api/counselor/studyplans/"+user_id,function(response){
			setData(response.data);
		});

	});

	const onSelectChange = (event) => {
		setDay(event.target.id);
	}

	return(
		<CTable>
			<CTableCaption>
				<Select options={daysName} onChange={onSelectChange} />
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">درس</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت مطالعه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تعداد تست</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{rows[day].map((row) =>
					<CTableRow key={row.id + 1}>
						<CTableHeaderCell scope='row'>{row.id + 1}</CTableHeaderCell>
						<CTableDataCell>{row.amount}</CTableDataCell>
						<CTableDataCell>{row.expire}</CTableDataCell>
						<CTableDataCell>{row.code}</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default StudyTable;
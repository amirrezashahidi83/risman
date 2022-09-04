import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption} from '@coreui/react';
import Select from 'react-select';

const AnalysisTable = ()=>{
	
	const [exams,setExams] = useState([]);
	const [selected,setSelected] = useState(1);
	useEffect(() =>{
		
		axios.get("/api/counselor/analysises/"+user_id)
		.then(function(response){
			setExams(response.data);
		});

	});

	const onSelectChange = (event) => {
		setSelected(event.target.id);
	}

	return(
		<CTable>
			<CTableCaption>
				<Select options={exams} onChange={onSelectChange} />
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">شماره سوال</CTableHeaderCell>
      				<CTableHeaderCell scope="col">وضعیت</CTableHeaderCell>
      				<CTableHeaderCell scope="col">درس</CTableHeaderCell>
      				<CTableHeaderCell scope="col">موضوع</CTableHeaderCell>
      				<CTableHeaderCell scope="col">علت</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تصمیم اجرایی</CTableHeaderCell>
      				<CTableHeaderCell scope="col">توضیحات</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{exams[selected].map((row) =>
					<CTableRow key={row.id + 1}>
						<CTableHeaderCell scope='row'>{row.id + 1}</CTableHeaderCell>
						<CTableDataCell>{row.qnumber}</CTableDataCell>
						<CTableDataCell>{row.status}</CTableDataCell>
						<CTableDataCell>{row.lesson}</CTableDataCell>
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
export default AnalysisTable;
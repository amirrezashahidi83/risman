import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CButton} from '@coreui/react';
import Select from 'react-select';

const DailiesTable = (user)=>{
	
	let user_id = user.id;

	const [dailies,setDailies] = useState([]);
	useEffect(() =>{
		
		axios.get("/api/counselor/dailies/"+user_id)
		.then(function(response){
			setDailies(response.data);
		});

	});

	const onSelectChange = (event) => {
		setSelected(event.target.id);
	}

	return(
		<CTable>
			<CTableCaption>
				<Select options={dailies} onChange={onSelectChange} />
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">شماره</CTableHeaderCell>
      				<CTableHeaderCell scope="col">نوع</CTableHeaderCell>
      				<CTableHeaderCell scope="col">جمله</CTableHeaderCell>
      				<CTableHeaderCell scope="col">عکس</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{dailies.map((row) =>
					<CTableRow key={row.id + 1}>
						<CTableHeaderCell scope='row'>{row.id + 1}</CTableHeaderCell>
						<CTableDataCell>{row.type}</CTableDataCell>
						<CTableDataCell>{row.text == null ? '-' : row.text}</CTableDataCell>
						<CTableDataCell>
							<CButton><a href={row.picture}></a></CButton>
						</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default DailiesTable;
import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CButton,CFormSelect} from '@coreui/react';
import {useAuthState} from '../../../../Context/auth';

const DailiesTable = ({dailies})=>{
	
	const {userDetails,token} = useAuthState();

	const onSelectChange = (event) => {
		setSelected(event.target.id);
	}

	return(
		<CTable>

			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">شماره</CTableHeaderCell>
      				<CTableHeaderCell scope="col">نوع</CTableHeaderCell>
      				<CTableHeaderCell scope="col">جمله</CTableHeaderCell>
      				<CTableHeaderCell scope="col">عکس</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت شروع</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت پایان</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{dailies.map((row) =>
					<CTableRow key={row.id + 1}>
						<CTableHeaderCell scope='row'>{row.id + 1}</CTableHeaderCell>
						<CTableDataCell>{row.type}</CTableDataCell>
						<CTableDataCell>{row.text == null ? '-' : row.text}</CTableDataCell>
						<CTableDataCell>
							{row.picture ? 
								<CButton><a href={row.picture}></a></CButton>
								:
								'-'
							}
						</CTableDataCell>
						<CTableDataCell>{row.start_time}</CTableDataCell>
						<CTableDataCell>{row.end_time}</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default DailiesTable;
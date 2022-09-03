import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell} from '@coreui/react';

const TransactionsTable = ()=>{
	
	const [rows,setRows] = useState([]);
	useEffect(() =>{
		
		axios.get("/api/transactions/"+user_id,function(response){
			setRows(response.data);
		});

	});
	return(
		<CTable>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">شماره</CTableHeaderCell>
      				<CTableHeaderCell scope="col">مبلغ</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تاریخ انقضا</CTableHeaderCell>
      				<CTableHeaderCell scope="col">شناسه پرداخت</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{rows.map((row) =>
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
export default TransactionsTable;
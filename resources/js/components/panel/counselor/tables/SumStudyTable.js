import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormSelect,CRow,CCol} from '@coreui/react';
import Select from 'react-select';
import {useAuthState} from '../../../../Context/auth';

const SumStudyTable = ({student,lessons})=>{
	
	const {userDetails,token} = useAuthState();
	const [compares,setCompares] = useState([]);
	let counselor_id = userDetails.special.id;

	useEffect(() => {
		if(student.length != 0){
			console.log(student);
			axios.get("/api/counselor/compare/plan/"+student.id+"?token="+token)
			.then(function(response){
				setCompares(response.data);
			});
		}
	},[]);

	return(
		<CTable caption='top'>
			<CTableCaption>
				<CRow>
					<CCol>
						<CFormSelect>
							{lessons.map((lesson) => 
								<option key={lesson.id} value={lesson.id} >{lesson.title}</option>
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
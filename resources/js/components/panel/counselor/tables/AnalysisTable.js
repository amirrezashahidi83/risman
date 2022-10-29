import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormSelect} from '@coreui/react';
import {useAuthState} from '../../../../Context/auth';

const AnalysisTable = ({student}) => {
	
	const {userDetails,token} = useAuthState();
	const [exams,setExams] = useState([]);
	const [analysis,setAnalysis] = useState([]);
	
	useEffect(() => {
		if(student.id != undefined){
			axios.get("/api/exams/"+student.grade+"/"+student.major+"?token="+token)
			.then(function(response){
				setExams(response.data);
			});
		}

	},[]);

	const onSelectChange = (event) => {
		let exam_id = event.target.value;
		setAnalysis(event.target.value);
		axios.get("/api/student/"+student.id+"/analysis/"+exam_id+"?token="+token)
		.then(function(response){
			setAnalysis(response.data);
		});
	
	}

	return(
		<CTable caption='top'>
			<CTableCaption>
				<CFormSelect onChange={onSelectChange} >
					<option default>انتخاب آزمون</option>
					{exams.map( (exam,idx) => 
						<option key={exam.id} value={exam.id}>{exam.title}</option>
					)}
				</CFormSelect>
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
				{analysis.data != undefined ?
						JSON.parse(analysis.data).map((row) =>
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
						)
					:
					<></>
				}
				
			</CTableBody>
		</CTable>
	)
}
export default AnalysisTable;
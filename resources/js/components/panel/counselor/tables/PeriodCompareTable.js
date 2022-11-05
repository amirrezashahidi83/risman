import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormSelect,CRow,CCol} from '@coreui/react';
import { DateRangePicker } from "react-advance-jalaali-datepicker";
import useStudentChooser from '../modals/useStudentChooser';
import {useAuthState} from '../../../../Context/auth';

const PeriodCompareTable = ({setData}) => {
	
	const {token,userDetails} = useAuthState();
	const counselor_id = userDetails.special.id;
	const {ModalComponent,selectedStudent} = useStudentChooser(counselor_id);
	const [compares,setCompares] = useState([]);
	const [lessons,setLessons] = useState([]);
	const [fromDate,setFromDate] = useState(0);
	const [toDate,setToDate] = useState(0);

	const getCompares = () => {
		
		let formData = {
			token: token,
			counselor_id: counselor_id,
			from_date: fromDate,
			to_date: toDate
		}

		axios.post("/api/counselor/compare/periods",formData)
		.then(function(response){
			setCompares(response.data);
		});
	}

	const changeStartDate = (unix,formatted) => {
		setFromDate(unix);
	}
	
	const changeEndDate = (unix,formatted) => {
		setToDate(unix);
	}

	useEffect(() => {
		console.log(selectedStudent);
		if(selectedStudent.id != undefined){
			axios.get("/api/lessons/"+selectedStudent.grade+"/"+
				selectedStudent.major+"?token="+token)
			.then(function(response){
				setLessons(response.data.secondary);
			});
		}

	},[selectedStudent]);

	useEffect( () => {
		if(lessons.length > 0)
			getCompares();
	},[fromDate,toDate]);

	useEffect( () => {
		setData(compares);
	},[compares]);
	
	return(
		<>
		{ModalComponent}
		<CTable caption='top'>
			<CTableCaption>
				<CRow>
					<CCol>
					    <DateRangePicker
				          placeholderStart="تاریخ شروع"
				          placeholderEnd="تاریخ پایان"
				          format="jYYYY/jMM/jDD"
				          onChangeStart={changeStartDate}
          				  onChangeEnd={changeEndDate}
				          idStart="rangePickerStart"
				          idEnd="rangePickerEnd"
        				/>
					</CCol>

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
		</>
	)
}
export default PeriodCompareTable;
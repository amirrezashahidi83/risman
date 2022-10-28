import {useState,useEffect} from 'react';
import {CTable,CTableCaption,CTableRow,CTableHead,CTableDataCell,CFormLabel,CInputGroup,
	CFormInput,CFormSelect,CTableHeaderCell,CTableBody,CRow,CCol} from '@coreui/react';
import {useAuthState} from '../../../../Context/auth';

const useAnalysisTable = () => {

	const columns = [];
	const [exams,setExams] = useState([]);
	const [items,setItems] = useState([]);
	const [lessons,setLessons] = useState([]);
	const {userDetails,token} = useAuthState();

	useEffect(() => {
			axios.get("/api/student/"+userDetails.special.id+"?token="+token)
			.then(function(response){

			});

			axios.get("/api/exams/"+userDetails.special.grade+"/"+userDetails.special.major
				+"?token="+token)
			.then(function(response){
				setExams(response.data);
			});

			axios.get("/api/lessons/"+userDetails.special.grade+"/"+userDetails.special.major
				+"?token="+token)
			.then(function(response){
				setLessons(response.data);
			});
		
		

	},[]);

	const addItems = (number) => {
		let newItems = [];

		for(let i = 0;i < number; i++)
			newItems.push(				{
					number: '',
					status: '',
					lesson: '',
					topic: '',
					cause: '',
					desicion: '',
					_cellProps: {id: {scope: 'row'}}
		
			});

		setItems(newItems);
	}

	const handleOnChange = (e) => {
		let exam = e.target.value;

		axios.get("/api/student/"+user+"/analysises/"+exam+"?token="+token)
			.then(function(response){

				let questions = response.data.questions;

				questions.map( (question,idx) => {
					setItems( items => [...items, {
						number: question.number,
						status: question.status,
						lesson: question.lesson,
						topic: question.topic,
						cause: question.cause,
						desicion: question.desicion,
						_cellProps: {id: {scope: 'row'}}
					}
					]);
				});

		});
	}
	return [(
			<CTable caption='top' bordered={true} striped={true} >
				<CTableCaption>
					<CRow>
						<CCol>
							<CFormLabel>تراز آزمون</CFormLabel>
						</CCol>
						<CCol>
							<CFormInput name='exam_balance' />
						</CCol>

						<CCol>
							<CFormLabel>نام آزمون</CFormLabel>
						</CCol>

						<CCol>
							<CFormSelect name='exam_id' onChange={handleOnChange} >
								{exams.map((exam) => 
									<option key={exam.id} value={exam.id} >{exam.title} </option>
								)}
							</CFormSelect>
						</CCol>
					</CRow>
				</CTableCaption>
				<CTableHead>
					<CTableHeaderCell>شماره سوال</CTableHeaderCell>
					<CTableHeaderCell>وضعیت</CTableHeaderCell>
					<CTableHeaderCell>درس</CTableHeaderCell>
					<CTableHeaderCell>مبحث</CTableHeaderCell>					
					<CTableHeaderCell>دلیل</CTableHeaderCell>
					<CTableHeaderCell>تصمیمات اجرایی</CTableHeaderCell>
					<CTableHeaderCell>توضیحات</CTableHeaderCell>
				</CTableHead>
				<CTableBody>
					{items.map( (item,idx) => 
						<CTableRow key={idx} >
							<CTableDataCell >
								<CFormInput name='question_number' /> 
							</CTableDataCell>
							<CTableDataCell>
								<CFormSelect name='status' selected={item.status} >
 									<option value='1'>غلط</option>
									<option value='2'>نزده</option>
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell>
								<CFormSelect name='lesson' selected={item.lesson}>
									{lessons.map( (lesson,idx) =>
										<option key={idx} >{lesson.title}</option>
									)}
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell>
								<CFormInput  />
							</CTableDataCell>
							<CTableDataCell>
								<CFormSelect name='cause' selected={item.cause}>
									<option></option>
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell>
								<CFormSelect name='desicion' selected={item.desicion}>
									<option value='1'></option>
									<option value='2'></option>
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell><textarea value={item.comment} multiline/></CTableDataCell>
						</CTableRow>
					)}
				</CTableBody>
			</CTable>
		),addItems];

}
export default useAnalysisTable;
import {useState,useEffect} from 'react';
import {CTable,CTableCaption,CTableRow,CTableHead,CTableDataCell,
	CFormInput,CFormSelect,CTableHeaderCell,CTableBody,CRow,CCol} from '@coreui/react';

const useAnalysisTable = ({user}) => {
	const columns = [];
	const [exams,setExams] = useState([]);
	const [items,setItems] = useState([]);
	const [lessons,setLessons] = useState([]);

	useEffect(() => {
		if(user != undefined){
			axios.get("/api/student/"+user.userDetails.special.id+"?token="+user.token)
			.then(function(response){

			});

			axios.get("/api/lessons")
			.then(function(response){
				setLessons(response.data);
			});
		
		}

	},[user]);

	const addItems = (number) => {
		let newItems = [];

		for(let i = 0;i < number; i++)
			newItems.push(				{
					number: <CFormInput name='number' />,
					status: <CFormInput name='status' />,
					lesson: <CFormInput name='lesson' />,
					topic: <CFormInput name='topic'   />,
					cause: <CFormInput name='cause'   />,
					desicion: <CFormInput name='desicion' />,
					_cellProps: {id: {scope: 'row'}}
		
			});

		setItems(newItems);
	}

	const handleOnChange = (e) => {
		let exam = e.target.value;

		axios.get("/api/student/"+user.user+"/analysises/"+exam+"?token="+user.token)
			.then(function(response){

				let questions = response.data.questions;

				questions.map( (question,idx) => {
					setItems( items => [...items, {
						number: <CFormInput name='number' value={question.number} />,
						status: <CFormInput name='status' value={question.status} />,
						lesson: <CFormInput name='lesson' value={question.lesson} />,
						topic: <CFormInput name='topic' value={question.topic} />,
						cause: <CFormInput name='cause' value={question.cause} />,
						desicion: <CFormInput name='desicion' value={question.desicion} />,
						_cellProps: {id: {scope: 'row'}}
					}
					]);
				});

		});
	}

	const renderItems = () => {
		return(
			<CTable columns={columns} items={items} >
				<CTableCaption>
					<CRow>
						
						<CCol>
							<CFormInput name='exam_balance' />
						</CCol>
						<CCol>
							<CFormSelect onChange={handleOnChange} >
								{exams.map((exam) => 
									<option key={exam.id} value={exam.id} >{exam.name} </option>
								)}
							</CFormSelect>
						</CCol>
					</CRow>
				</CTableCaption>
			</CTable>
		)
	}

	return [(
			<CTable caption='top' bordered={true} striped={true} >
				<CTableCaption>
					<CRow>
						
						<CCol>
							<CFormInput name='exam_balance' />
						</CCol>
						<CCol>
							<CFormSelect onChange={handleOnChange} >
								{exams.map((exam) => 
									<option key={exam.id} value={exam.id} >{exam.name} </option>
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
							<CTableDataCell>{item.number}</CTableDataCell>
							<CTableDataCell>
								<CFormSelect selected={item.status} >
 									<option value='1'>غلط</option>
									<option value='2'>نزده</option>
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell>
								<CFormSelect selected={item.lesson}>
									{lessons.map( (lesson,idx) =>
										<option key={idx} >{lesson.name}</option>
									)}
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell>{item.topic}</CTableDataCell>
							<CTableDataCell>
								<CFormSelect selected={item.cause}>
									<option></option>
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell>
								<CFormSelect selected={item.desicion}>
									<option value='1'></option>
									<option value='2'></option>
								</CFormSelect>
							</CTableDataCell>
							<CTableDataCell><CFormInput value={item.comment} /></CTableDataCell>
						</CTableRow>
					)}
				</CTableBody>
			</CTable>
		),addItems];

}
export default useAnalysisTable;
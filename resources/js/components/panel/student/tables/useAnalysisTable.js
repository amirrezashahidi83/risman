import {useState,useEffect} from 'react';
import {CTable,CTableCaption,CFormInput,CFormSelect} from '@coreui/react';

const useAnalysisTable = ({user}) => {
	const columns = [];
	const [exams,setExams] = useState([]);
	const [items,setItems] = useState([]);

	useEffect(() => {
		if(user != undefined)
			axios.get("/api/student/"+user.userDetails.special.id+"?token="+user.token)
			.then(function(response){

			});

	},[user]);

	const addItems = (number) => {
		
		for(let i = 0;i < number; i++)
			setItems( items => [...items, 
				{
					number: <CFormInput name='number' />,
					status: <CFormInput name='status' />,
					lesson: <CFormInput name='lesson' />,
					topic: <CFormInput name='topic'   />,
					cause: <CFormInput name='cause'   />,
					desicion: <CFormInput name='desicion' />,
					_cellProps: {id: {scope: 'row'}}
		
				}
			]);
	}

	const handleOnChange = (e) => {
		let exam = e.target.value;
		axios.get("/api/student/"+user.userDetails+"/analysises/"+exam+"?token="+user.token)
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
		<CTable columns={columns} items={items} >
			<CTableCaption>
				<CFormSelect onChange={handleOnChange} >
					{exams.map((exam) => 
						<option key={exam.id} value={exam.id} >{exam.name} </option>
					)}
				</CFormSelect>
			</CTableCaption>
		</CTable>
	}

	return [renderItems,addItems];

}
export default useAnalysisTable;
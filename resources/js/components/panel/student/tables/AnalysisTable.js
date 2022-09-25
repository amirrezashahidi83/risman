import {useState,useEffect} from 'react';
import {CTable,CTableCaption,CFormInput,CFormSelect} from '@coreui/react';

const AnalysisTable = ({user}) => {
	const columns = [];
	const [exams,setExams] = useState([]);
	const [items,setItems] = useState([]);

	useEffect(() => {
		if(user != undefined)
			axios.get("/api/student/"+user.userDetails.special.id+"?token="+user.token)
			.then(function(response){

			});

	},[user]);

	const handleOnChange = (e) => {
		axios.get("/api/student/"+user.userDetails+"/analysises?token="+user.token)
			.then(function(response){
				let questions = response.data.questions;
				setItems(new Array(questions.length));

				questions.map( (question,idx) => {
					items[idx] = {
						number: <CFormInput name='number' value={question.number} />,
						status: <CFormInput name='status' value={question.status} />,
						lesson: <CFormInput name='lesson' value={question.lesson} />,
						topic: <CFormInput name='topic' value={question.topic} />,
						cause: <CFormInput name='cause' value={question.cause} />,
						desicion: <CFormInput name='desicion' value={question.desicion} />,
						_cellProps: {id: {scope: 'row'}}
					};
				});
		});
	}

	return(
		<CTable columns={columns} items={items} >
			<CTableCaption>
				<CFormSelect onChange={handleOnChange} >
					{exams.map((exam) => 
						<option key={exam.id} value={exam.id} >{exam.name} </option>
					)}
				</CFormSelect>
			</CTableCaption>
		</CTable>
	)

}
export default AnalysisTable;
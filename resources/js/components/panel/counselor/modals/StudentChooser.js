import {useEffect,useState} from 'react';
import {Modal,Image,Button,Card} from 'react-bootstrap';
import Select from 'react-select';

const useStudentChooser = ()=>{

	const [students,setStudents] = useState([]);
	const [show,setShow] = useState(true);
	const [selectedId,setSelectedId] = useState(0);
	
	useEffect(() => {
		axios.get('/api/counselor/students')
		.then(function(response){
			setStudents(response.data);
		});
	},[]);

	const selectStudent = (id) => {
		setSelectedId(id);
		setShow(false);
	}

	const ModalData = 
		<Modal show={show}>
			<Modal.Body>
				{students.map((student) =>
					<Card key={student.id} onClick={() => selectStudent(student.id)}>
						<Card.Body>

						</Card.Body>
					</Card>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={()=>selectStudent(3)}>
				انتخاب
				</Button>
			</Modal.Footer>
		</Modal>
		;
	
	return[
		ModalData,
		selectedId
	]
}
export default useStudentChooser;
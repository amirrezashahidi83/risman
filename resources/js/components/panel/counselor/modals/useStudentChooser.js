import {useEffect,useState} from 'react';
import {Modal,Image,Button,Card} from 'react-bootstrap';
import Select from 'react-select';
import {useAuthState} from '../../../../Context/auth';

const useStudentChooser = (counselor_id) => {

	const {userDetails,token} = useAuthState();
	const [students,setStudents] = useState([]);
	const [show,setShow] = useState(true);
	const [selectedStudent,setSelectedStudent] = useState([]);

	useEffect(() => {
		if(counselor_id != undefined){
			axios.get('/api/counselor/'+counselor_id+'/students?token='+token)
			.then(function(response){
				setStudents(response.data);
			});
		}
	},[]);

	const selectStudent = (student) => {
		setSelectedStudent(student);
	}

 	const ModalComponent = 
		<Modal show={show}>
			<Modal.Body>
				{students.map((student) =>
					<Card key={student.id} onClick={() => selectStudent(student)} >
						<Card.Body>
							{student.id}
						</Card.Body>
					</Card>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => setShow(false)} disabled={selectedStudent.id == undefined} >
				انتخاب
				</Button>
			</Modal.Footer>
		</Modal>
		;
	
	return{
		ModalComponent,
		selectedStudent
	}
}
export default useStudentChooser;
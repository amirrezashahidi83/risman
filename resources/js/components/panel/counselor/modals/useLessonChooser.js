import {useEffect,useState} from 'react';
import {Modal,Image,Button,Card} from 'react-bootstrap';
import Select from 'react-select';

const useLessonChooser = ({student})=>{

	const [show,setShow] = useState(true);
	const [lessons,setStudents] = useState([]);
	const [topic,setTopics] = useState([]);
	const [selectedLesson,setSelectedLesson] = useState(0);
	const [selectedTopic,setSelectedTopic] = useState(0);
	const [description,setDescription] = useState("");
	const [studyTime,setStudyTime] = useState("");
	const [testTime,setTestTime] = useState("");
	const [testCount,setTestCount] = useState(0);

	useEffect(() => {
		axios.get('/api/lessons')
		.then(function(response){
			setStudents(response.data);
		});
	},[]);

	const handleLessonSelected = () => {
		axios.get('/api/topics')
		.then(function(response){
			setTopics(response.data);
		});
	}

	const ModalData = 
		<Modal show={show}>
			<Modal.Body>
				<Select
				/>
				<Select />

			</Modal.Body>
			<Modal.Footer>
				<Button onClick={()=>selectStudent(3)}>
				انتخاب
				</Button>
			</Modal.Footer>
		</Modal>
		;
	
	return [
	ModalData,
	setShow,
	selectedLesson,
	selectedTopic,
	description,
	studyTime,
	testTime,
	testCount
	];
}
export default useLessonChooser;
import {useEffect,useState} from 'react';
import {Modal,Image,Button,Card,Row,Col,Form,InputGroup} from 'react-bootstrap';
import {useAuthState} from '../../../../Context/auth';

const useLessonChooser = ({student_id})=>{

	const [show,setShow] = useState(true);
	const [student,setStudent] = useState([]);
	const [lessons,setLessons] = useState([]);
	const [topics,setTopics] = useState([]);
	const [selectedData,setSelectedData] = useState({});
	const {token,userDetails} = useAuthState();

	useEffect(() => {

		if(student_id != undefined){
			axios.get("/api/student/"+student_id+"?token="+token)
			.then(function(response){
				setStudent(response.data);
			});

			axios.get('/api/lessons/'+student.special.grade+'/'+student.special.major+'?token='+token)
			.then(function(response){
				setLessons(response.data);
			});
		}
	},[]);

	const selectData = (e) => {

		e.PreventDefault();
		let lesson = e.target[0].value;
		let topic = e.target[1].value;
		let studyTime = e.target[2].value;
		let testTime = e.target[3].value;
		let testCount = e.target[4].value;
		let description = e.target[5].value;

		setSelectedData({
			'lesson': lesson,
			'topic': topic,
			'description': description,
			'studyTime': studyTime,
			'testTime': testTime,
			'testCount': testCount
		});

		setShow(false);
	}

	const handleLessonSelected = (e) => {
		let lesson_id = e.target.value;
		setTopics(JSON.parse(lessons[lesson_id]));
	}

	const renderModal = () => {
	
		return(
			<Modal show={show}>
				<Form onSubmit={selectData} >
					<Modal.Body>
						<Row>
							<Col>
								<InputGroup>
									<Form.Label for='select_lesson'>درس</Form.Label>
									<Form.Select id='select_lesson' name='select_lesson'
										onChange={handleLessonSelected} >
										{lessons.map( (lesson,idx) => 
											<option key={idx} value={lesson.id}>
												{lesson.title}
											</option>
										)}
									</Form.Select>
								</InputGroup>
							</Col>

							<Col>
								<InputGroup>
									<Form.Label></Form.Label>
									<Form.Select name='select_topic'>
										{topics.map( (topic,idx) => 
											<option key={idx} value={idx} >
												{topic}
											</option>
										)}
									</Form.Select>
								</InputGroup>
							</Col>
						</Row>

						<Row>
							<Col>
								<InputGroup>
									<Form.Label>ساعت مطالعه</Form.Label>
									<TimePicker name='studyTime' />
								</InputGroup>
							</Col>

							<Col>
								<InputGroup>
									<Form.Label>ساعت تست</Form.Label>
									<TimePicker name='testTime' />
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<Form.Label>تعداد تست</Form.Label>
									<Form.Control name='testCount' type='number' />
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<textarea name='description'></textarea>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button type='submit'>
						انتخاب
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		)
	}
	
	return {
		renderModal,
		setShow,
		selectedData
	};
}
export default useLessonChooser;
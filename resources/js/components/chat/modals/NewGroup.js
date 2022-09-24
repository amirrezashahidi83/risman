import {useState,useEffect} from 'react';
import {Modal,Card,Form,Button} from 'react-bootstrap';
import ProfileHeader from './ProfileHeader';

const NewGroup = ({user}) => {

	const [students,setStudents] = useState([]);
	const [selected,setSelected] = useState([]);
	const [show,setShow] = useState(true);

	useEffect(() => {
		axios.get("/api/counselor/"+user.userDetails.id+"/students?token="+user.token)
		.then(function(response){
			setStudents(response.data);
		});
	},[]);

	const handleSubmit = (e) => {
		axios.post("/api/chat/new",
		{token:token,title:title,members:members})
		.then(function(response){

		});
	}

	const handleSelect = (e) => {
		let selected_id = e.target.value;

		if(selected.includes(selected_id))
			setSelected(selected.filter((id) => id != selected_id ));
		else{
			setSelected({selected,
				[id]
			});
		}
	}

	return(
		<Modal show={show} >
			<Form onSubmit={handleSubmit}>
			    <Modal.Header closeButton>
			    <div></div>
	        	</Modal.Header>
		        <Modal.Body>

		        	<Form.Group>
		        		<Form.Control name='title' />
		        	</Form.Group>
		        	{students.map((student,idx) => 
		        		<Card key={idx} >
		        			<Card.Body>
		        				<Form.Check 
		        					label={student.name}
		        					value={student.id}
		        				/>
		        					{student.name}
		        			</Card.Body>
		        		</Card>
		        	)}
		        </Modal.Body>
		        <Modal.Footer className='d-flex justify-content-start'>
		        	<Button variant="primary" type='submit'>
		            	ثبت کد
		        	</Button>
		        </Modal.Footer>
			</Form>
		</Modal>
	)
}
export default NewGroup;
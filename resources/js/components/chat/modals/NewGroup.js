import {useState,useEffect} from 'react';

const NewGroup = () => {

	const [students,setStudents] = useState([]);
	const [show,setShow] = useState(true);
	useEffect(() => {
		axios.get("/api/counselor/students")
		.then(function(response){
			setStudents(response.data);
		});
	});

	return(
		<Modal show={show} >
			<Form onSubmit={acceptCode}>
			    <Modal.Header closeButton>
			    <div></div>
	        	</Modal.Header>
		        <Modal.Body>

		        	<div className='text-end'>
		        		    <Card.Text>
	کد ارسال شده لطفا تلفن همراه خود را چک کنید.
		        			</Card.Text>
		        	</div>
		        </Modal.Body>
		        <Modal.Footer className='d-flex justify-content-start'>
		        	<Button variant="primary" >
		            	ثبت کد
		        	</Button>
		        </Modal.Footer>
			</Form>
		</Modal>
	)
}
export default NewGroup;
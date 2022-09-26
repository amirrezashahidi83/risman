import {useState,useEffect} from 'react';
import {Form,Modal} from 'react-bootstrap';

const useForgetPassword = () => {
	const [show,setShow] = useState(false);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		let phoneNumber = e.target[0].value;

		axios.get("/api/forgetpassword/"+phoneNumber)
		.then(function(response){

		});
	}

	return(
		<Modal show={show} >
			<Form onSubmit={handleOnSubmit}>
			    <Modal.Header closeButton>
			    <div></div>
	        	</Modal.Header>
		        <Modal.Body>
		        	<Form.Control name='phone' />
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
export default useForgetPassword;
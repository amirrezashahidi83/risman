import {useState,useEffect} from 'react';

const useForgetPassword = () => {
	const [show,setShow] = useState(false);

	useEffect(() =>{
		axios.get("/api/user/forgetpassword")
		.then(function(response){

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
export default useForgetPassword;
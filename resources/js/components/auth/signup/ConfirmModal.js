import {useState,useEffect} from 'react';
import {Modal,Form,Card,Button} from 'react-bootstrap';

const useConfirmModal = (phone)=>{
	const [show,setShow] = useState(false);
	const [sentCode,setSentCode] = useState('');

	let navigate = useNavigate();

	useEffect( () => {
		axios.get("/api/sendCode/"+phone)
			.then(function(response){
				sendCode(response.data);
		});
	},[show]);

	const refresh = () =>{
		setShow(false);
		setShow(true);
	}
	const acceptCode = (e) => {
		let writtenCode = e.target.cinput.value;
		if(writtenCode == sentCode)
			axios.get("/api/acceptCode/"+phone)
				.then(function(response){

					setShow(false);
					navigate('/register');
			});
	}
	const ConfimModal = 
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
		        			<Form.Control name='cinput' placeholder="کد تایید"/>
		        			<Card.Link onClick={refresh}>
		        			<small>ارسال مجدد کد</small>
		        			</Card.Link>
		        	</div>
		        </Modal.Body>
		        <Modal.Footer className='d-flex justify-content-start'>
		        	<Button variant="primary" >
		            	ثبت کد
		        	</Button>
		        </Modal.Footer>
			</Form>
		</Modal>
		

	return(
		[show
		,setShow
		,ConfimModal]
		)
}
export default useConfirmModal;
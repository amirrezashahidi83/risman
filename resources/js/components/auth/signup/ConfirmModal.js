import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Modal,Form,Card,Button} from 'react-bootstrap';
import {useAuthDispatch} from '../../../Context/auth';
import {register} from '../../../Context/auth';

const useConfirmModal = (phone)=>{

	const [show,setShow] = useState(false);
	const [sentCode,setSentCode] = useState('');

	const dispatch = useAuthDispatch();

	let navigate = useNavigate();

	const sendCode = () => {
		axios.get("/api/sendCode/"+phone)
			.then(function(response){
				setSentCode(response.data);
				setShow(true);
		});	
	}

	const acceptCode = async (e) => {
		let writtenCode = e.target.parentNode.parentNode[1].value;

		if(writtenCode == sentCode){
			let result = await register(dispatch,phone);
			if(result){
				navigate("/register");
			}			
		}	
	}
	const ConfimModal = 
		<Modal show={show} >
			<Form>
			    <Modal.Header closeButton>
			    <div></div>
	        	</Modal.Header>
		        <Modal.Body>

		        	<div className='text-end'>
		        		    <Card.Text>
	کد ارسال شده لطفا تلفن همراه خود را چک کنید.
		        			</Card.Text>
		        			<Form.Control name='cinput' placeholder="کد تایید"/>
		        			<Card.Link className='btn' onClick={sendCode}>
		        			<small>ارسال مجدد کد</small>
		        			</Card.Link>
		        	</div>
		        </Modal.Body>
		        <Modal.Footer className='d-flex justify-content-start'>
		        	<Button variant="primary" onClick={acceptCode} >
		            	ثبت کد
		        	</Button>
		        </Modal.Footer>
			</Form>
		</Modal>
		

	return(
		[show
		,sendCode
		,ConfimModal]
		)
}
export default useConfirmModal;
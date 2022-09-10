import {useState} from 'react';
import {Modal,Form,Card,Button} from 'react-bootstrap';

const useConfirmModal = ()=>{
	const [show,setShow] = useState(false);

	let navigate = useNavigate();

	const acceptCode = () => {
		axios.get("/api/acceptCode/"+phone)
			.then(function(response){
				navigate('/register');
		});
	}
	const ConfimModal = 
		<Modal show={show} >
		    <Modal.Header closeButton>
		    <div></div>
        	</Modal.Header>
	        <Modal.Body>

	        	<div className='text-end'>
	        		    <Card.Text>
کد ارسال شده لطفا تلفن همراه خود را چک کنید.
	        			</Card.Text>
	        			<Form.Control placeholder="کد تایید"/>
	        			<Card.Link>
	        			<small>ارسال مجدد کد</small>
	        			</Card.Link>
	        	</div>
	        </Modal.Body>
	        <Modal.Footer className='d-flex justify-content-start'>
	          <Button variant="primary" onClick={()=>setShow(false)}>
	            ثبت کد
	          </Button>
	        </Modal.Footer>
		</Modal>
		

	return(
		[show
		,setShow
		,ConfimModal]
		)
}
export default useConfirmModal;
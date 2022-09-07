import {useState,useEffect} from 'react';
import {Modal,Image,Button} from 'react-bootstrap';

const CheckPaid = ()=>{

	const [show,setShow] = useState(false);

	useEffect(()=>{
		axios.get('/api/student/checkpaid'+student_id,
			function(response){
				if(response.data == 0)
					setShow(true);
		});
	},[]);

	const requestAccept = ()=>{
		axios.post('/api/student/requestAccept',{student_id},
			function(response){

			});
	}

	return(
		<Modal show={show} >
			<Modal.Body>
				<Button onClick={requestPaid}>
				btn
				</Button>
			</Modal.Body>
		</Modal>
	)
}
export default CheckPaid;
import {useState,useEffect} from 'react';
import {Modal,Image,Button} from 'react-bootstrap';

const CheckPaid = ({user}) => {

	const [show,setShow] = useState(false);
	let student_id = user.userDetails.special.id;

	useEffect(()=>{
		axios.get('/api/student/'+student_id+'checkpaid?token='+user.token,
			function(response){
				if(response.data == 0)
					setShow(true);
		});
	},[]);

	const requestAccept = ()=>{
		axios.post('/api/student/'+student_id+'requestAccept?token='+user.token,
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
import {useState,useEffect} from 'react';
import {Modal,Image,Button} from 'react-bootstrap';
import {useAuthState} from '../../../../Context/auth';

const CheckPaid = () => {

	const [show,setShow] = useState(false);
	const {userDetails,token} = useAuthState();
	let student_id = userDetails.special.id;

	useEffect(()=>{
		axios.get('/api/student/'+student_id+'/checkpaid?token='+token)
		.then(function(response){
			if(response.data == 0)
				setShow(true);
		});

	},[]);

	const requestAccept = ()=>{
		axios.get('/api/student/'+student_id+'/requestAccept?token='+token)
		.then(function(response){
			if(response.data != '' && response.data != true)
				window.location.href = "https://www.zarinpal.com/pg/StartPay/" +response.data;		
		});
	}

	return(
		<Modal show={show} >
			<Modal.Body>
				شما نرم افزار را خریداری نکرده اید.
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={requestAccept}>
					خرید نرم افزار
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
export default CheckPaid;
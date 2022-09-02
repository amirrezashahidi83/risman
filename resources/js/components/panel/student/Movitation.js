import {useState,useEffect} from 'react';
import {Modal,Image,Button} from 'react-bootstrap';

const Movitation = ({counselor_id})=>{

	const [show,setShow] = useState(true);
	const [image,setImage] = useState("")

	useEffect(()=>{
		axios.get('/api/student/getDailyPicture'+counselor_id,function(response){
			setImage(response.data.picture);
		});
	},[]);

	return(
		<>
		<Modal show={show}>
			<Modal.Body>
					<Image
						src={image}
						fluid={true}
					/>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={()=>setShow(false)}>
				بستن
				</Button>
			</Modal.Footer>
		</Modal>
		</>
	)
}
export default Movitation;
import {useState,useEffect} from 'react';
import {Modal,Image,Button} from 'react-bootstrap';

const Movitation = ()=>{

	const [show,setShow] = useState(true);
	const [image,setImage] = useState("")

	useEffect(()=>{
		setImage("/images/1592061084.jpg");
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
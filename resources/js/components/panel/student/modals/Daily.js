import {useState,useEffect} from 'react';
import {Modal,Image,Button,Carousel} from 'react-bootstrap';

const Daily = ({token,userDetails})=>{

	const [show,setShow] = useState(true);
	const [isAutomatic,setIsAutomatic] = useState(false);
	const [images,setImages] = useState([]);
	const [texts,setTexts] = useState([]);

	let counselor_id = userDetails.special.id;

	useEffect(() => {
		if(token == undefined)
			return;

		let hours = (new Date()).getHours;

		axios.get("/api/counselor/"+counselor_id+"?token="+token)
		.then(function(response){
			setIsAutomatic(response.data.automatic_message);
		});

		let url = '/api/student/daily/'+counselor_id+'/getAll?token='+token;
		if(isAutomatic)
			url = '/api/student/daily/'+counselor_id+'/time/'+hours+"?token="+token;
		
		axios.get(url)
		.then(function(response){
			setImages(response.data.images);
			setTexts(response.data.texts);
		});
		
	},[]);

	return(
		<>
		<Modal show={show}>
			<Modal.Body>
				<Carousel controls={false} indicators={false}>
					{texts.map((text,idx) => 
						<Carousel.Item key={idx}>
							<p className='text-center'>{text.text}</p>
						</Carousel.Item>
					)}
				</Carousel>
				<Carousel controls={false} indicators={false} >
					{images.map((image,idx) => 
						<Carousel.Item key={idx}>
							<Image
								src={image.picture}
							
							fluid />
						</Carousel.Item>
					)}
				</Carousel>
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
export default Daily;
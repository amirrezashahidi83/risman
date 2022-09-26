import {useState,useEffect} from 'react';
import {Modal,Image,Button,Carousel} from 'react-bootstrap';

const Daily = ({token,counselor_id})=>{

	const [show,setShow] = useState(true);
	const [isAutomatic,setIsAutomatic] = useState(false);
	const [images,setImages] = useState([]);
	const [texts,setTexts] = useState([]);

	useEffect(() => {
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
				<Carousel>
					{texts.map((text,idx) => 
						<Carousel.Item key={idx}>
							<Carousel.Caption>
								{text.text}
							</Carousel.Caption>
						</Carousel.Item>
					)}
				</Carousel>
				<Carousel>
					{images.map((image,idx) => 
						<Carousel.Item key={idx}>
							<Image
								src={image.src}
							/>
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
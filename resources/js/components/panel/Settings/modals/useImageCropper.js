import {useState,useEffect} from 'react';
import {Modal,Image,Button,Card} from 'react-bootstrap';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const useImageCropper = () => {
	const [crop,setCrop] = useState(0);
	const [source,setSource] = useState("");

	const renderCropper = () => {
		return(
		<Modal show={source == ""}>
			<Modal.Body>
			    <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
      				<Image src={source} />
    			</ReactCrop>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={ () => setSource("") }>
					ثبت
				</Button>
			</Modal.Footer>
		</Modal>

		)
	}

	return{
		renderCropper,
		setSource
	}
}

export default useImageCropper;
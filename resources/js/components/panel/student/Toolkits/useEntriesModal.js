import {useState} from 'react';
import {Modal,Image,Button,Card,Row,Col,Form} from 'react-bootstrap';

const useEntriesModal = () => {
	
	const [show,setShow] = useState(true);
	const [number,setNumber] = useState(0);

	const handleOnSubmit = (e) => {
		e.PreventDefault();
		let number = e.target[0];
	}

	const renderModal = () => {
		return(
			<Modal show={show} >
				<Modal.Body>
					<Form onSubmit={handleOnSubmit} >
						<Row>
							<Col>
								<Form.Label>تعداد سوالات</Form.Label>
							</Col>
							<Col>
								<Form.Control type='number' />
							</Col>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button type='submit' onClick={() => setShow(false)}>انتخاب</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	return{
		renderModal,
		number
	}
}

export default useEntriesModal;
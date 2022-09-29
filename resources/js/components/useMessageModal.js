import {useState} from 'react';
import {Modal,Button,Image} from '@coreui/react';

const useMessageModal = () => {
	
	const [message,setMessage] = useState("");
	const [show,setShow] = useState(true);

	const handleExit = (callback) => {
		callback();
	}

	const showErrorModal = (message) => {
		setMessage(message);
	}

	const showSuccessModal = (message) => {
		setMessage(message);

	}

	const hideModal = () => {
		setShow(false);
	}

	const renderModal = () => {
		
		return(
			<Modal show={show}>
				<Modal.Body>
				</Modal.Body>

				<Modal.Footer>

				</Modal.Footer>
			</Modal>
		)
	}

	return {showModal,hideModal,handleExit};
}
export default useMessageModal;
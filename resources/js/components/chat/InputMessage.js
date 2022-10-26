import {useState} from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import {Input,Button} from 'react-chat-elements';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import VoiceRecorder from './VoiceRecorder';
import { useAuthState } from '../../Context/auth';

const InputMessage = ({chat}) => {

	const [text,setText] = useState("");
	const user = useAuthState().userDetails;
	const token = useAuthState().token;

	const sendMessage = (e) => {

		e.preventdefault();
		let message = e.target.message;

		axios.post("/api/message/new",
			{message: message,chat_id: chat_id,token: token})
		.then(function(response){

		});
	}
	const sendVoice = () => {
		axios.post("/api/message/voice")
		.then(function(response){

		});
	}

	const attachFile = () => {
		axios.post("/api/message/file")
		.then(function(response){

		});
	}

	const attachMedia = () => {
		axios.post("/api/message/media")
		.then(function(response){

		});
	}

	return(
		<Row className='w-100'>
			<Col md={11} >
				<Input />
			</Col>
			<Col>
				<Button className='w-100' text={"ارسال"} onClick={sendMessage} />
			</Col>
		</Row>
	)
}

export default InputMessage;
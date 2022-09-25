import {useState} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { Input,Button } from "react-chat-elements";
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
			{message:message,token:token})
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
		<>
			<Input 
				onChange={(e) => setText(e.target.value)}
				multiline={true}
			/>
			<Button 

			/>
			
			<VoiceRecorder
				record={true}
			/>

			<Button
			/>
		</>
	)
}

export default InputMessage;
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { Input,Button } from "react-chat-elements";
import VoiceRecorder from './VoiceRecorder';
const InputMessage = () => {

	const sendMessage = () =>{
		axios.post("/api/message/new")
		.then(function(response){

		});
	}
	const sendVoice = () => {
		axios.post("/api/message/newVoice")
		.then(function(response){

		});
	}

	const AttachFile = () => {
		axios.post("/api/message/attachFile")
		.then(function(response){

		});
	}

	return(
		<>
			<Input 
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
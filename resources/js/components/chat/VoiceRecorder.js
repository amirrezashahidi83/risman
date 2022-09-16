import {Recorder} from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';

const VoiceRecorder = () => {
	return(
		<Recorder
			record={true}
		/>
	)
}
export default VoiceRecorder;
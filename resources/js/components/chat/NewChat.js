import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NewGroup from './modals/NewGroup';
import {useAuthState} from '../../../Context/auth';
import {useNewGroup} from './modals/useNewGroup';

const NewChat = () => {
	const [userDetails,token] = useAuthState();


	return(
		<Fab onClick>
			<AddIcon />
		</Fab>
	)
}
export default NewChat;
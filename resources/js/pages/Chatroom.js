import {Card,Row,Col} from 'react-bootstrap';
import Chatbox from '../components/chat/Chatbox';
import Sidebar from '../components/chat/Sidebar';

const Chatroom = () => {
	return(
		<Card>
			<Row>
				<Col>
					<ChatBox />
				</Col>

				<Col>
					<Sidebar />
				</Col>
			</Row>
		</Card>
	)
}
export default Chatroom;
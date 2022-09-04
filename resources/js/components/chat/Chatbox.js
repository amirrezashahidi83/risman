import {useState,useEffect} from 'react';
import { MessageList,Navbar,Avatar } from "react-chat-elements";

const Chatbox = () => {

	const [messages,setMessages] = useState([]);
	
	useEffect(() => {
		axios.get("/api/chat/getmessages/"+chat_id)
			.then(function(response){
				setMessages(response.data);
			});
	},[]);

	const dateItem = (message){
		
		position = message.sender_id == user_id ? 'right' : 'left';
		title = '';
		text = '';
		reply = '';
		let type = 'text';
		
		if(message.photo != null)
			type = 'photo'
		else if(message.video != null)
			type = 'video';
		else if(message.audio != null)
			type = 'audio';
		else if(message.attachment != null)
			type = 'file';

		return {

		};
	}

	let dataSource = messages.map();
	return(		
		<Navbar 
			left=<Row>
				<Col>
					<Avatar />
				</Col>
				<Col>

				</Col>
			</Row>

			right=
		/>

		<MessageList
		    className='message-list'
		    lockable={true}
		    toBottomHeight={'100%'}
		    dataSource={[
		    {
		      position:"left",
		      type:"text",
		      title:"Kursat",
		      text:"Give me a message list example !",
		    },
		    {
		      position:"right",
		      type:"text",
		      title:"Emre",
		      text:"That's all.",
		    },
		    ]}
		/>
	)
}

export default Chatbox;

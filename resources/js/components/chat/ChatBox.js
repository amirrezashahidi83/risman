import {useState,useEffect} from 'react';
import {CDropdownMenu,CDropdownItem} from '@coreui/react';
import {MessageBox,MessageList,Navbar} from 'react-chat-elements';
import "react-chat-elements/dist/main.css";
import {useAuthState} from '../../Context/auth';
const ChatBox = ({chat}) => {

	const [selectedMessage,SetSelectedMessage] = useState(0);
	const [showMenu,setShowMenu] = useState(false);
	const [messages,setMessages] = useState([]);
	const user = useAuthState().userDetails;
	const token = useAuthState().token;

	useEffect( () => {
		if(chat != undefined)
			axios.get("/api/chat/messages")
			.then(function(response){
				setMessages(response.data);
			});
	},[]);
	const readMessage = (messages) => {
		axios.post("/api/message/read",
		{token:token,messages:messages,chat_id:chat.id})
		.then(function(response){

		});
	}
	
	const onScrollHandle = (e) => {
		
		let result = [];
		for(let i = 0;i < e.target.length;i++){
			var element = e.target[i];
		    var rect = element.getBoundingClientRect();
		    var elemTop = rect.top;
		    var elemBottom = rect.bottom;

		    // Only completely visible elements return true:
		    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
		    var isRead = element.status == 'read';
		    // Partially visible elements return true:
		    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		    if(isVisible && isRead)
		    	result.push(element.value);
	    }
	    return result;
   	}

	const Forward = () => {
		axios.post('/api/message/forward')
		.then(function(response){

		});
	}

	const Reply = () => {
		axios.post('/api/message/reply')
		.then(function(response){

		});
	}

	const Delete = () => {
		axios.post('/api/message/delete')
		.then(function(response){

		});
	}

	return(
		<MessageList 
    	 className='message-list'
    	 lockable={true}
    	 dataSource={
    	 	messages.map( (message) => {
    	 		let sender = message.sender_id;

    	 		return {
    	 			title: sender,
    	 			position: (message.sender_id == user_id ? 'right' : 'left'),
    	 			text: message.title,
    	 			type: message.type
    	 		}
    	 	})
    	 }
    	 toBottomHeight={'100%'}
		 onScroll={onScrollHandle} >
    	</MessageList>

	)
}
export default ChatBox;
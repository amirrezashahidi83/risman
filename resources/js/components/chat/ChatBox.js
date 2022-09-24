import {useState} from 'react';
import {MessageBox,MessageList} from 'react-chat-elements';

const ChatBox = ({user}) => {

	const [selectedMessage,SetSelectedMessage] = useState(0);
	const [showMenu,setShowMenu] = useState(false);
	const token = user.token;

	const readMessage = (messages) => {
		axios.post("/api/message/read",
		{token:token,messages:messages,chat_id:chat_id})
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
	      toBottomHeight={'100%'}
	      onScroll={onScrollHandle} >
	      	<CDropdownMenu visible={showMenu} >
	            <CDropdownItem onClick={Reply} >Reply</CDropdownItem>
	            <CDropdownItem onClick={Forward} >Forward</CDropdownItem>
	            {message.sender_id == user_id ?
	            	<CDropdownItem onClick={Delete} >Delete</CDropdownItem>
	            	:
	                <div></div>
	            }
	        </CDropdownMenu>

	        {messages.map( (message) =>
	          <MessageBox
	            key={message.id}
	            position={message.sender_id == user_id ? 'right' : 'left'}
	            title={message.title}
	            type={message.type}>
          </MessageBox>
        )}
    	</MessageList>

	)
}
export default MessageBox;
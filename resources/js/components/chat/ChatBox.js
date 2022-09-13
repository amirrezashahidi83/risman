import {useState} from 'react';
import {MessageBox,MessageList} from 'react-chat-elements';
const ChatBox = () => {
	const [selectedMessage,SetSelectedMessage] = useState(0);
	const [showMenu,setShowMenu] = useState(false);
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
	      toBottomHeight={'100%'}>
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
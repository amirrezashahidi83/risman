import {useState,useEffect} from 'react';
import { ChatList } from "react-chat-elements";

const Sidebar = () => {

	const [chats,setChats] = useState([]);

	useEffect( () =>{
		axios.get('/api/getChats/'+user_id)
			.then(function(response){
				setChats(response.data);
		});
	},[]);

	const chatItem = (chat) => {
		
	}

	let dataSource = chats.map(chatItem);
	
	return(		
		<ChatList
		  className='chat-list'
		  dataSource={[
		    {
		      avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
		      alt: 'kursat_avatar',
		      title: 'Kursat',
		      subtitle: "Why don't we go to the No Way Home movie this weekend ?",
		      date: new Date(),
		      unread: 3,
		    }
		]} 
		/>
	)
}
export default Sidebar;
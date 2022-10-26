import React,{useState,useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ChatList,ChatItem } from "react-chat-elements"
import "react-chat-elements/dist/main.css"
import SearchBox from 'react-search-box';
import {useAuthState} from '../../Context/auth';
import {useChatState,useChatDispatch,setChat,enterGhost} from '../../Context/chat';
import useHoldEvent from './HoldEvent';
import useNewGroup from './modals/useNewGroup';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const AppSidebar = () => {

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [onHoldHandler,onHoldLeaveHandler] = useHoldEvent('chatlist');
  const [renderModal,setShow] = useNewGroup();
  const [member,setMember] = useState({});
  const [items,setItems] = useState([]);
  const {userDetails,token} = useAuthState();

  useEffect(() => {
    axios.get("/api/member/"+userDetails.id+"&token="+token)
    .then(function(response){
      setMember(response.data);
    });
  });

  const searchChat = (e) => {
    let value = e.target.value;

    axios.post('/api/chat/search/',
     {member:member,token:token})
      .then(function(response){
      
        setItems(response.data);
      
      });
  }

  const onSelectHandle = (e) => {
    let chat_id = e.target.id;

    axios.get("/api/chat/"+chat_id+"?token="+token)
      .then(function(response){
        setChat(useChatDispatch(),response.data);
      });
  }

  const onHold = () => {
    onHoldHandler(() => {
      enterGhost(useChatDispatch());
    });
  }

  const onHoldLeave = () => {
    onHoldLeaveHandler(() => {
      exitGhost(useChatDispatch());
    });
  }

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <SearchBox 
          placeholder="جستجو..."
          data={items}
          onChange={searchChat}

        />
      </CSidebarBrand>
      <CSidebarNav>
        <div id='chatlist' className='h-100'>
          {items.map((item) => 
            <ChatItem
              id={item.id}
              avatar={item.avatar}
              title={item.title}
              date={new Date()}
              unread={item.members[user.id]}
            />
          )}
        </div>
        <Fab onClick={() => setShow(true)} >
          <AddIcon />
        </Fab>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

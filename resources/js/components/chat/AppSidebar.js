import React,{useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ChatList,ChatItem } from "react-chat-elements"
import "react-chat-elements/dist/main.css"
import SearchBox from 'react-search-box';
import {useAuthState} from '../../Context';
import HoldEvent from './HoldEvent';

const AppSidebar = ({setChat}) => {

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const [member,setMember] = useState({});
  const [items,setItems] = useState([]);
  const user = useAuthState().userDetails;
  const token = useAuthState().token;

  useEffect(() => {
    axios.get("/api/member/"+user.id+"&token="+token)
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
        setChat(response.data);
      });
  }

  HoldEvent("chatlist",() => {

  });

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
        <ChatList
          id='chatlist'
          >
          {items.map((item) => 
            <ChatItem
              id={item.id}
              avatar={item.avatar}
              title={item.title}
              date={new Date()}
              unread={item.members[user.id]}
            />
          )}
        </ChatList>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

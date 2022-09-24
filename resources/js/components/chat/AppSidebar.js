import React,{useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ChatList,ChatItem } from "react-chat-elements"
import "react-chat-elements/dist/main.css"
import SearchBox from 'react-search-box';
import {useAuthState} from '../../Context';

const AppSidebar = (setSelectedChat) => {

  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
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
    setSelectedChat(e.target.ids);
  }

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
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
          >
          {items.map((item) => 
            <ChatItem
              id={item.id}
              avatar={item.avatar}
              title={item.title}
              date={new Date()}
              unread={item.unread}
            />
          )}
        </ChatList>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

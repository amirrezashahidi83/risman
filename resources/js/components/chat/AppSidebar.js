import React,{useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ChatList,ChatItem } from "react-chat-elements"
import "react-chat-elements/dist/main.css"
import Select from 'react-select';

const AppSidebar = () => {

  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const [items,setItems] = useState([]);

  const searchChat = () => {
    axios.get('/api/chat/search/')
    .then(function(response){

    });
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
        <Select className='w-100' />
      </CSidebarBrand>
      <CSidebarNav>
        <ChatList>
          {items.map((item) => 
            <ChatItem
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

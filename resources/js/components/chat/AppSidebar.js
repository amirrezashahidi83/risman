import React,{useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ChatList } from "react-chat-elements"
import "react-chat-elements/dist/main.css"
import Select from 'react-select';

const AppSidebar = () => {

  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

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
        ]} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

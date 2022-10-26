import React from 'react'
import { CContainer, CSpinner, CRow } from '@coreui/react'
import ChatBox from '../components/chat/ChatBox';
import { AppSidebar, AppFooter, AppHeader } from '../components/chat/index'

const Chatroom = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <ChatBox className="body flex-grow-1 px-3"/>
        <AppFooter />
      </div>
    </div>
  )
}

export default Chatroom;

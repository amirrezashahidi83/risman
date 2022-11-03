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
          <iframe src='https://developers.google.com/'></iframe>
        <AppFooter />
      </div>
    </div>
  )
}

export default Chatroom;

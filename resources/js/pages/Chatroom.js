import React from 'react'
import { CContainer, CSpinner, CRow } from '@coreui/react'
import ChatBox from '../components/chat/ChatBox';
import InputMessage from '../components/chat/InputMessage';
import { AppSidebar, AppFooter, AppHeader } from '../components/chat/index'
import {useChatState} from '../Context/chat';

const Chatroom = () => {

  const ghost_mode = useChatState().ghost_mode;
  
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <ChatBox />
            <CRow>
              <InputMessage />
            </CRow>
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Chatroom;

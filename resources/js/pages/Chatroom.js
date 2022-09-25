import React from 'react'
import { CContainer, CSpinner, CRow } from '@coreui/react'
import ChatBox from '../components/chat/ChatBox';
import InputMessage from '../components/chat/InputMessage';
import { AppSidebar, AppFooter, AppHeader } from '../components/chat/index'

const Chatroom = () => {

  const [chat,setChat] = useState({});
  return (
    <div>
      <AppSidebar setChat={setChat} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader chat={chat} />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <ChatBox chat={chat} />
            <CRow>
              <InputMessage chat={chat} />
            </CRow>
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Chatroom;

import React, { Suspense,useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner, CRow } from '@coreui/react'
import "react-chat-elements/dist/main.css"
import InputMessage from './InputMessage';
import ChatBox from './ChatBox';
const AppContent = () => {

  const [messages,setMessages] = useState([]);

  return (
    <CContainer lg>
      <ChatBox />
      <CRow>
        <InputMessage />
      </CRow>
    </CContainer>
  )
}

export default React.memo(AppContent)

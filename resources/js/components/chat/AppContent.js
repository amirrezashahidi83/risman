import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { MessageList } from "react-chat-elements"
import "react-chat-elements/dist/main.css"

const AppContent = () => {

  return (
    <CContainer lg>
    <MessageList
    className='message-list'
    lockable={true}
    toBottomHeight={'100%'}
    dataSource={[
    {
      position:"left",
      type:"text",
      title:"Kursat",
      text:"Give me a message list example !",
    },
    {
      position:"right",
      type:"text",
      title:"Emre",
      text:"That's all.",
    },
    ]}
/>
    </CContainer>
  )
}

export default React.memo(AppContent)

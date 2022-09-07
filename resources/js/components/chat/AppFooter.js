import React from 'react'
import { CFooter } from '@coreui/react'
import { Input } from 'react-chat-elements'

const AppFooter = () => {
  return (
    <CFooter>
      <Input
        placeholder="Type here..."
        multiline={true}
      />
    </CFooter>
  )
}

export default React.memo(AppFooter)

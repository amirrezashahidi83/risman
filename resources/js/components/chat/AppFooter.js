import React from 'react'
import { CFooter } from '@coreui/react'
import InputMessage from './InputMessage'
const AppFooter = () => {
  return (
    <CFooter>
      <InputMessage />
    </CFooter>
  )
}

export default React.memo(AppFooter)

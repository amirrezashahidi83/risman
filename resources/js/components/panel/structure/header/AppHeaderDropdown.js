import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {useAuthDispatch,logout} from '../../../../Context/auth';

const AppHeaderDropdown = ({user}) => {

  const {dispatch} = useAuthDispatch();
  
  const handleOnLogout = () => {
    axios.get("/api/logout")
    .then(function(response){
      if(response.data == 1)
        logout(dispatch);
    });
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar className='bg-secondary' size='lg' src={user.profilePic} >{user.name}</CAvatar>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 text-start" placement="bottom-center">
        <CDropdownHeader className="bg-light fw-semibold py-2">تنظیمات</CDropdownHeader>
        <CDropdownItem href="/student/schedule">
          <CIcon icon={cilFile} className="me-2" />
          برنامه هفتگی
        </CDropdownItem>
        <CDropdownItem href="/user/settings">
          <CIcon icon={cilSettings} className="me-2" />
          تنظیمات
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#" onClick={handleOnLogout} >
          <CIcon icon={cilLockLocked} className="me-2" />
          خروج
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown

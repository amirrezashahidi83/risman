import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import PaidTwoToneIcon from '@mui/icons-material/Paid';
import { useSelector, useDispatch } from 'react-redux'
import { AppHeaderDropdown } from './header/index'
import { useAuthState } from '../../../Context/auth';

const AppHeader = () => {

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { userDetails,token } = useAuthState();

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon  height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
        </CHeaderNav>
        <CHeaderNav >
          <CNavItem>
            <CNavLink href="#" className='border border-warning rounded p-2' >
              <small>{userDetails.score}</small>
              <span></span>
              <PaidTwoToneIcon fontSize='medium'/> 
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className='border border-success rounded p-2' >
              <small>{userDetails.balance}</small>
              <span></span>
              <PaidTwoToneIcon fontSize='medium'/> 
            </CNavLink>
          </CNavItem>

        </CHeaderNav>
        <CHeaderNav>
          {userDetails.name} خوش آمدید, 
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown user={userDetails}/>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader

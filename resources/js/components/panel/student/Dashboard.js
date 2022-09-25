import React from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import Daily from './modals/Daily';
import {useAuthState} from '../../../Context/auth';

const Dashboard = ()=>{
    const user = useAuthState();
    console.log(user);
  return(
    <>
      
      <CRow>
        <CCol>

        </CCol>
        <CCol>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
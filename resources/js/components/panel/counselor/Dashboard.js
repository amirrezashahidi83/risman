import React,{useState} from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import StudentTable from './tables/StudentTable';
import SendPlan from './SendPlan';
import {useAuthState} from '../../../Context';

const Dashboard = ()=>{
  const user = useAuthState();
  
  return(
    <>
      <CRow>
        <CCol>
          <SendPlan />
        </CCol>
        <CCol>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
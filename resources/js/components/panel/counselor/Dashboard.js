import React,{useState} from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import StudentTable from './tables/StudentTable';
import SendPlan from './SendPlan';
import {useAuthState} from '../../../Context/auth';

const Dashboard = ()=>{
  const user = useAuthState();

  return(
    <>
      <CRow>
        <CCol>
          <StudentTable user={user} />
        </CCol>
        <CCol>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
import React,{useState} from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import StudentTable from './tables/StudentTable';
import PlanRequests from './PlanRequests'; 
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
          <PlanRequests />
        </CCol>
      
      </CRow>
    </>
  )
}
export default Dashboard;
import React from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import Daily from './modals/Daily';
import {useAuthState} from '../../../Context/auth';
import PlanRequests from './PlanRequests';
import ReportStudy from './ReportStudy';

const Dashboard = () => {
  const {userDetails,token} = useAuthState();

  return(
    <>
      
      <CRow>
        <CCol>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <ReportStudy />
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
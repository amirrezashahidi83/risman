import React from 'react';
import {CContainer,CRow,CCol,CCard,CCardBody,CCardHeader,CCardTitle} from '@coreui/react';
import Daily from './modals/Daily';
import CheckPaid from './modals/CheckPaid';
import {useAuthState} from '../../../Context/auth';
import CounselorPlan from './CounselorPlan';
import ReportStudy from './ReportStudy';

const Dashboard = () => {
  const {userDetails,token} = useAuthState();

  return(
    <>
      <Daily token={token} userDetails={userDetails} />
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CCardTitle>برنامه مشاور</CCardTitle>
            </CCardHeader>
            <CCardBody>
              <CounselorPlan />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className='mt-3'>
        <CCol>
          <ReportStudy />
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
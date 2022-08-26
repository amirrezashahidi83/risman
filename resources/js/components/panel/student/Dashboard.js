import React from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import Movitation from './Movitation';
import StudyTable from './StudyTable';

const Dashboard = ()=>{
  return(
    <>
      <Movitation />
      <CRow>
        <CCol>
          <StudyTable />
        </CCol>
        <CCol>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
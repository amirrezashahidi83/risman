import React,{useState} from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import StudentTable from './tables/StudentTable';

const Dashboard = ()=>{

  return(
    <>
      <CRow>
        <CCol>
          {ModalData}
          {selectedId}
        </CCol>
        <CCol>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
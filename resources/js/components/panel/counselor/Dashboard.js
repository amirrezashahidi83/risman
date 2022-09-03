import React from 'react';
import {CContainer,CRow,CCol} from '@coreui/react';
import StudyTable from './StudyTable';
import useStudentChooser from './StudentChooser';

const Dashboard = ()=>{
  const [ModalData,SelectedId] = useStudentChooser();

  return(
    <>
      <CRow>
        <CCol>
          {ModalData}
          <StudyTable />
          }
        </CCol>
        <CCol>
        </CCol>
      </CRow>
    </>
  )
}
export default Dashboard;
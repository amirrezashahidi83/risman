import {CTable,CTableBody,CTableHead,CTableRow,CTableHeaderCell,
  CTableDataCell,CCard,CCardBody} from '@coreui/react';

const StudyTable = ()=>{
	return(
<CTable>

  <CTableBody>

    <CTableRow>

      <CTableHeaderCell scope="row">Default</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="primary">

      <CTableHeaderCell scope="row">Primary</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="secondary">

      <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="success">

      <CTableHeaderCell scope="row">Success</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="danger">

      <CTableHeaderCell scope="row">Danger</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="warning">

      <CTableHeaderCell scope="row">Warning</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="info">

      <CTableHeaderCell scope="row">Info</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="light">

      <CTableHeaderCell scope="row">Light</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

    <CTableRow color="dark">

      <CTableHeaderCell scope="row">Dark</CTableHeaderCell>

      <CTableDataCell>Cell</CTableDataCell>

      <CTableDataCell>Cell</CTableDataCell>

    </CTableRow>

  </CTableBody>

</CTable>
	)
}
export default StudyTable;
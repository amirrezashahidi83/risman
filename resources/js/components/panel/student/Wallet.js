import {CCard,CCardBody,CButton,CFormSelect,CRow,CCol} from '@coreui/react';
import TransactionsTable from './TransactionsTable';
const Wallet = ()=>{
	return(
		<CRow>
			<CCol className='col-md-3'>
				<CCard>
					<CCardBody>
						<CFormSelect >
							<option>۱۰۰۰۰ تومن</option>
							<option>۳۰۰۰۰ تومن</option>
						</CFormSelect>
						<CButton className='mt-2 w-100'>افزایش موجودی</CButton>
					</CCardBody>
				</CCard>
			</CCol>
			<CCol>
				<CCard>
					<CCardBody>
					<TransactionsTable />
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	)
}
export default Wallet;
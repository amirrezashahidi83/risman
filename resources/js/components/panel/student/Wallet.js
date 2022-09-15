import {CCard,CCardBody,CButton,CFormSelect,CRow,CCol} from '@coreui/react';
import TransactionsTable from './tables/TransactionsTable';
import {useAuthState} from '../../../Context';

const Wallet = ()=>{
	const user = useAuthState();

	let amounts = [10000,30000];

	const handleSubmit = () => {
		axios.post('/api/wallet/buy')
		.then(function(response){

		});
	}

	return(
		<CRow>
			<CCol className='col-md-3'>
				<CCard>
					<CCardBody>
						<CFormSelect >
							{amounts.map((amount,idx)=>
								<option key={idx} >{amount} تومان</option>
							)}
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
import {useState} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CButton,CFormSelect
	,CRow,CCol} from '@coreui/react';
import Select from 'react-select';
import PeriodCompareTable from './tables/PeriodCompareTable';
import WeeksCompareTable from './tables/WeeksCompareTable';
import {useAuthState} from '../../../Context/auth';

const Compare = () => {
	
	const user = useAuthState();
	const counselor_id = user.userDetails.special.id;
	const [isPeriod,setIsPeriod] = useState(false);
	const [major,setMajor] = useState(1);

	const handleChangeCompare = () => {
		setIsPeriod(!isPeriod);
	}

	const handleChangeMajor = (e) => {
		setMajor(e.target.value);
	}

	const convertExcel = () => {
		axios.post("/api/user/excel/",{token: user.token})
		.then(function(response){

		});
	}
	
	return(
		<CCard>
			<CCardHeader>
				<CRow>	
					<CCol>
						<CFormSelect onChange={handleChangeCompare} >
							<option value='1'>مقایسه دو هفته ای</option>
							<option value='2'>مقایسه بازه ای</option>
						</CFormSelect>
					</CCol>
					<CCol>
						<CFormSelect onChange={handleChangeMajor} >
							<option value='1'>ریاضی</option>
							<option value='2'>تجربی</option>
							<option value='3'>انسانی</option>
						</CFormSelect>
					</CCol>
				</CRow>
			</CCardHeader>

			<CCardBody>
				{isPeriod ? 
					<PeriodCompareTable counselor_id={counselor_id} /> 
					: 
					<WeeksCompareTable counselor_id={counselor_id} /> 
				}
			</CCardBody>
			<CCardFooter>
				<CButton onClick={convertExcel} >تبدیل به اکسل</CButton>
			</CCardFooter>
		</CCard>
	)
}

export default Compare;
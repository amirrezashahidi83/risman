import {useState} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CButton,CFormSelect
	,CRow,CCol} from '@coreui/react';
import Select from 'react-select';
import PeriodCompareTable from './tables/PeriodCompareTable';
import WeeksCompareTable from './tables/WeeksCompareTable';
import {useAuthState} from '../../../Context/auth';

const Compare = () => {
	
	const {userDetails,token} = useAuthState();
	const counselor_id = userDetails.special.id;
	const [isPeriod,setIsPeriod] = useState(false);
	const [major,setMajor] = useState(1);
	const [excelData,setExcelData] = useState([]);

	const handleChangeCompare = () => {
		setIsPeriod(!isPeriod);
	}

	const handleChangeMajor = (e) => {
		setMajor(e.target.value);
	}

	const convertExcel = () => {
		let name = 'file.xlsx';
		let formData = {
			token: token,
			name: name,
			data: excelData
		}

		axios.post("/api/user/excel/",formData)
		.then(function(response){
			window.location.replace(response.data);
		});
	}
	
	return(
		<>
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
				<CCard className='mt-2'>
					<CCardBody>
						{isPeriod ? 
							<PeriodCompareTable setData={setExcelData} /> 
							: 
							<WeeksCompareTable setData={setExcelData} /> 
						}
					</CCardBody>
					<CCardFooter>
						<CButton onClick={convertExcel} >تبدیل به اکسل</CButton>
					</CCardFooter>
				</CCard>
		</>
	)
}

export default Compare;
import {useState} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CButton} from '@coreui/react';
import Select from 'react-select';
import PeriodCompareTable from '../tables/PeriodCompareTable';
import WeeksCompareTable from '../tables/WeeksCompareTable';

const Compare = () => {
	const options = [];
	const [isPeriod,setIsPeriod] = useState(false);
	
	const handleChange = () => {
		setIsPeriod(false);
	}

	const convertExcel = () => {

	}
	
	return(
		<CCard>
			<CCardHeader>	
				<Select options={options} onChange={handleChange} />
			</CCardHeader>

			<CCardBody>
				{isPeriod ? <PeriodCompareTable /> : <WeeksCompareTable /> }
			</CCardBody>
			<CCardFooter>
				<CButton></CButton>
			</CCardFooter>
		</CCard>
	)
}

export default Compare;
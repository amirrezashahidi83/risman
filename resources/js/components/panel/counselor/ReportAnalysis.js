import {CCard,CCardBody} from '@coreui/react';
import AnalysisTable from './tables/AnalysisTable';
import {useAuthState} from '../../../Context/auth';

const ReportAnalysis = () => {
	const user = useAuthState();
	
	return(
		<CCard>
			<CCardBody>
				<ReportAnalysis />
			</CCardBody>
		</CCard>
	)
}
export default ReportAnalysis;
import {CCard,CCardBody} from '@coreui/react';
import ReportAnalysis from './ReportAnalysis';
import {useAuthState} from '../../../Context';

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
import {useEffect} from 'react';
import AnalysisTable from './tables/AnalysisTable';
import {CCard,CCardBody} from '@coreui/react';
import useStudentChooser from './modals/useStudentChooser';
import {useAuthState} from '../../../Context/auth';

const AnalysisExam = () => {
	
	const {userDetails,token} = useAuthState();
	const {ModalComponent,selectedStudent} = useStudentChooser(userDetails.special.id);

	return(
		<>
			{ModalComponent}
			<CCard>
				<CCardBody>
					{selected.id != undefined 
						? 
							<AnalysisTable student={selectedStudent} />
						:
							<></>
					}
				</CCardBody>
			</CCard>
		</>
	)
}
export default AnalysisExam;
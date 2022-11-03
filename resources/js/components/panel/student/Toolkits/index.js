import {useState} from 'react';
import {CRow,CCol,CCard} from '@coreui/react';
import AnswerSheet from './AnswerSheet';
import PercentCalculator from './PercentCalculator';

const Toolkits = () => {

	return(
			<CRow>
				<CCol>
					<CCard>
						<CCardBody>
							<AnswerSheet />
						</CCardBody>
					</CCard>

				</CCol>

				<CCol>
					<CCard>
						<CCardBody>
							<PercentCalculator />
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
	)
}

export default Toolkits;
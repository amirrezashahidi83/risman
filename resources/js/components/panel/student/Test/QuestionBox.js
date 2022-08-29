import {CCard,CCardBody,CButtonGroup,CFormCheck,CRow,CCol} from '@coreui/react';

const QuestionBox = ({title,items}) => {
	return(
		<CCard>
			<CCardBody>
				<p>{title}</p>
				<CButtonGroup>
					<CRow>
						<CCol>
							<CCard>
								<CCardBody>
									<CFormCheck type='radio' label='1' />
								</CCardBody>
							</CCard>
						</CCol>
						
						<CCol>
							<CCard>
								<CCardBody>
									<CFormCheck type='radio' label='1' />
								</CCardBody>
							</CCard>						
						</CCol>
						
						<CCol>
							<CCard>
								<CCardBody>
									<CFormCheck type='radio' label='1' />
								</CCardBody>
							</CCard>
						</CCol>
						
						<CCol>
							<CCard>
								<CCardBody>
									<CFormCheck type='radio' label='1' />
								</CCardBody>
							</CCard>
						</CCol>
					</CRow>
				</CButtonGroup>
			</CCardBody>
		</CCard>
	)
}
export default QuestionBox;
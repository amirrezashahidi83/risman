import {CCard,CCardBody,CCardText,CImage,CRow,CCol} from '@coreui/react';

const NewTest = ()=>{
	return(
		<>
			<CRow>
				<CCol>
					<CCard>
						<CCardBody>
							<CImage 
								src='/images/11111.jpg'
								thumbnail
								fluid
							/>

						<CCardText>آزمون X</CCardText>
						<CCardText>تعداد سوالات</CCardText>
						</CCardBody>
					</CCard>
				</CCol>
				<CCol></CCol>
				<CCol></CCol>
			</CRow>
			<CRow>
			</CRow>
		</>
	)
}
export default NewTest;
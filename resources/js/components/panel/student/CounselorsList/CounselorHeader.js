import {useState} from 'react';
import {CCard,CCardBody,CRow,CCol,CAvatar} from '@coreui/react';
import ReactStars from 'react-stars';

const CounselorHeader = () => {

	const handleOnRequest = () => {
		axios.post("/api/student/"+userDetails.special.id
			+"/request/"+counselor_id+"?token="+token)
			.then(function(response){
				
			});
	}
	return(
		<CCard>
			<CCardBody>
				<CRow>
					<CCol className='col-md-3'>
						<CRow>
							<CAvatar />
						</CRow>
						<CRow>
							<ReactStars 
							count={5}
							/>
						</CRow>
					</CCol>

					<CCol>
						<CRow>
							<CCol>
								{userDetails.special.name}
							</CCol>

							

						</CRow>

						<CRow>
							<CCol>
								{userDetails.special.specilities[0]}
							</CCol>
						</CRow>
					</CCol>
				</CRow>
				<CButton onClick={handleOnRequest} >درخواست مشاوره</CButton>
			</CCardBody>
		</CCard>
	)
}
export default CounselorHeader;
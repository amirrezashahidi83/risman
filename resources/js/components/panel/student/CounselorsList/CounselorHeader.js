import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CCol,CButton} from '@coreui/react';
import Avatar from 'react-avatar';
import ReactStars from 'react-stars';
import {useAuthState} from '../../../../Context/auth';
import {useNavigate,useParams} from 'react-router-dom';

const CounselorHeader = ({data}) => {

	const {userDetails,token} = useAuthState();
	const {navigate} = useParams();

	const handleOnRequest = () => {
		axios.post("/api/student/"+userDetails.special.id
			+"/request/"+counselor_id+"?token="+token)
			.then(function(response){
				
			});
	}

	const handleOnClick = (e) => {
		navigate("/student/counselors/"+userDetails.special.id);
	}

	return(
		<CCard>
			<CCardBody>
				<CRow>
					<CCol className='col-2'>
						<CRow>
							<CCol>
								<Avatar src={data.profilePic} className='bg-secondary w-100' />
							</CCol>
						</CRow>
					</CCol>

					<CCol>
						<CRow>
							<CCol className='col-5'>
								<CRow>
									{data.name}
								</CRow>

								<CRow>
									{data.special.resume}
								</CRow>

								<CRow>
									{JSON.parse(data.special.specialities).map( (speciality,idx) =>
										<span key={idx} >{speciality}</span>
									)}
								</CRow>
							</CCol>

							<CCol>
								<CRow>
									<ReactStars
										count={5}
									/> 
								</CRow>

								<CRow>
									<CCol>
										<CButton onClick={handleOnRequest} >درخواست مشاوره</CButton>
									</CCol>
									{
										window.location == '/student/counselors' 
										?
											<CCol>
												<CButton onClick={handleOnClick} >
												مشاهده اطلاعات بیشتر
												</CButton>
											</CCol>
										:
											<div></div>
									}
								</CRow>
							</CCol>
						</CRow>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	)
}
export default CounselorHeader;
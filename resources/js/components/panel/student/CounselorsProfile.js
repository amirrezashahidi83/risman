import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {CCard,CCardBody,CCardHeader,CCardTitle,CRow,CCol,CButton} from '@coreui/react';
import Avatar from 'react-avatar';
import {useAuthState} from '../../../Context/auth';

const CounselorProfile = () => {
	
	let { counselor_id } = useParams();
	const [token,userDetails] = useAuthState();
	const [counselor,setCounselor] = useState({});

	useEffect( () =>{
		axios.get("/api/counselor/"+counselor_id+"?token="+token)
		.then(function(response){
			setCounselor(response.data);
		});
	},[]);

	const handleOnClick = () => {
		axios.post("/api/student/"+userDetails.special.id
			+"/request/"+counselor_id+"?token="+token)
			.then(function(response){
				
			});
	}

	return(
		<>
			<CRow>
				<CCol className='col-md-4'>
					<CCard>
						<CCardBody>
							<div className=' mb-3 d-flex justify-content-center'>
							<Avatar size="150"  round={true} />
							</div>
							<p>a</p>
							<p>b</p>
							<CButton className='w-100' size=''>درخواست مشاوره</CButton><br></br>

						</CCardBody>
					</CCard>
				</CCol>

				<CCol className='h-100'>
					<CCard className='h-100'>
					<CCardHeader className='bg-white'>
						<CCardTitle>رزومه کاری</CCardTitle>
					</CCardHeader>
					<CCardBody className='h-100'>
					</CCardBody>
					</CCard>
				</CCol>
			</CRow>
			<CCard className='mt-3'>
				<CCardHeader className='bg-white'>
					<CCardTitle>نظرات</CCardTitle>
				</CCardHeader>
				<CCardBody>

				</CCardBody>
			</CCard>
		</>
	)
}
export default CounselorProfile;
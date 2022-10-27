import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {CCard,CCardBody,CCardHeader,CCardTitle,CRow,CCol,CButton} from '@coreui/react';
import Avatar from 'react-avatar';
import {useAuthState} from '../../../../Context/auth';

const CounselorProfile = () => {
	
	let { counselor_id } = useParams();
	const {token,userDetails} = useAuthState();
	const [counselor,setCounselor] = useState({});

	useEffect( () =>{
		axios.get("/api/counselor/"+counselor_id+"?token="+token)
		.then(function(response){
			setCounselor(response.data);
		});
	},[]);


	const addComment = (e) => {
		
		let text = e.target[0].value;
		let type = e.target[1].value;

		let formData = {text: text,type : type,counselor_id: counselor_id,token: token,student_id: userDetails.special.id};
		
		axios.post("/api/comments/add",formData)
			.then(function(response){

			});
	}

	return(
		<>
			<CRow>
				<CounselorHeader counselor={counselor} />
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
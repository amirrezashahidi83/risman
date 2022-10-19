import {useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {CCard,CCardBody,CForm,CFormInput,CRow,CCol,CButton} from "@coreui/react";
import Select from 'react-select';
import SearchBox from 'react-search-box';

const CounselorsList = ({user}) => {

	const [counselors,setCounselors] = useState([]);
	const {navigate} = useParams();

	const handleOnChange = (e) => {

		let value = e.target.parentNode[0].value;
		axios.get("/api/counselor/search/"+value+"?token="+user.token)
		.then(function(response){
			setCounselors(response.data);
		});
	}

	const handleOnClick = (e) => {
		let counselor_id = e.target[0].value;
		navigate("/student/counselors/"+counselor_id);
	}

	return (
		<>
			<CForm>
				<CCard>
					<CCardBody>
						<SearchBox data={counselors} callback={handleOnChange} />
					</CCardBody>
				</CCard>
				<CCard>
					<CCardBody>
						{counselors.map((counselor) => 
							<CCard key={counselor.id} value={counselor.id} >
								<CCardBody>
									{counselor.name}
								</CCardBody>
							</CCard>
						)}
					</CCardBody>
				</CCard>
			</CForm>
		</>
	)
}
export default CounselorsList;
import {useState} from 'react';
import {CCard,CCardBody,CForm,CFormInput,CRow,CCol,CButton} from "@coreui/react";
import Select from 'react-select';
import SearchBox from 'react-search-box';

const CounselorsList = ({user}) => {

	const [counselors,setCounselors] = useState([]);

	const handleOnChange = () => {
		axios.get("/api/counselor/getAll?token="+user.token)
		.then(function(response){
			setCounselors(response.data);
		});
	}

	return (
		<>
			<CCard>
				<CCardBody>
					<SearchBox data={counselors} />
				</CCardBody>
			</CCard>
			<CCard>
				<CCardBody>
					{counselors.map((counselor) => 
						<CCard key={counselor.id} >
							<CCardBody>
								{counselor.name}
							</CCardBody>
						</CCard>
					)}
				</CCardBody>
			</CCard>
		</>
	)
}
export default CounselorsList;
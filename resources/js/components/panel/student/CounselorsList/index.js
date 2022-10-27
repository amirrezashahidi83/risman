import {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {CCard,CCardBody,CForm,CFormInput,CRow,CCol,CButton,CFormCheck } from "@coreui/react";
import Select from 'react-select';
import SearchBox from 'react-search-box';
import CounselorHeader from './CounselorHeader';
import usePagination from './usePagination';
import {useAuthState} from '../../../../Context/auth';

const CounselorsList = () => {

	const {userDetails,token} = useAuthState();
	const [keyword,setKeyword] = useState("*");
	const [city,setCity] = useState(false);
	const [state,setState] = useState(false);
	const [counselors,setCounselors] = useState([]);
	const {PaginationComponent,createPagination,currentPage} = usePagination();
	const {navigate} = useParams();

	const loadItems = () => {

		axios.get("/api/counselor/search/"+value+"?token="+user.token)
		.then(function(response){
			setCounselors(response.data.counselors);
			if(counselors == [])
				createPagination(response.data.totalLength,limit);

		});

	}

	useEffect( () => {
		loadItems();
	},[currentPage])

	const handleOnClick = (e) => {
		let counselor_id = e.target[0].value;
		navigate("/student/counselors/"+counselor_id);
	}

	return (
		<>
			<CForm>
				<CRow className='w-50'>
					<CCol className='col-md-7'>
						<SearchBox data={counselors} callback={(e) => setKeyword(e.target.value)} />
					</CCol>

					<CCol>
						<CButton OnClick={loadItems} >جستجو</CButton>
					</CCol>
				</CRow>
				<CRow className='w-50'>
					<CCol>
						<CFormCheck name='city' label='از شهر من' onClick={() => setCity(!city)} />
					</CCol>

					<CCol>
						<CFormCheck name='state' label='از استان من' onClick={() => setState(!state)} />
					</CCol>
				</CRow>
				<CCard className='mt-3'>
					<CCardBody>
						{counselors.map((counselor) => 
							<CounselorsHeader data={counselor} OnClick={handleOnClick} />
						)}
					</CCardBody>
				</CCard>
				<PaginationComponent />
			</CForm>
		</>
	)
}
export default CounselorsList;
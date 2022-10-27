import {useState,useEffect} from 'react';
import {CCard,CCardBody,CForm,CFormInput,CRow,CCol,CButton,CFormCheck } from "@coreui/react";
import Select from 'react-select';
import SearchBox from 'react-search-box';
import CounselorHeader from './CounselorHeader';
import usePagination from './usePagination';
import {useAuthState} from '../../../../Context/auth';

const CounselorsList = () => {

	const {userDetails,token} = useAuthState();
	const [keyword,setKeyword] = useState('');
	const [city,setCity] = useState(false);
	const [state,setState] = useState(false);
	const [counselors,setCounselors] = useState([]);
	const {PaginationComponent,createPagination,currentPage} = usePagination();

	const loadItems = () => {

		const dataForms = {
			page: currentPage,			
			token: token
		}
		if(keyword != '')
			dataForms['keyword'] = keyword;

		axios.post("/api/counselor/search",dataForms)
		.then(function(response){
			console.log(counselors);
			if(counselors.length == 0)
				createPagination(response.data.totalCount,20);
			setCounselors(response.data.counselors);

		});

	}

	useEffect( () => {
		loadItems();
	},[currentPage])


	return (
		<>
			<CForm>
				<CRow className='w-50'>
					<CCol className='col-md-7'>
						<SearchBox data={counselors} callback={(e) => setKeyword(e.target.value)} />
					</CCol>

					<CCol>
						<CButton onClick={loadItems} >جستجو</CButton>
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
						{counselors.map((counselor,idx) => 
							<CounselorHeader key={idx} data={counselor} />
						)}
					</CCardBody>
				</CCard>
				<CRow className='mt-2'>
					<PaginationComponent />
				</CRow>
			</CForm>
		</>
	)
}
export default CounselorsList;
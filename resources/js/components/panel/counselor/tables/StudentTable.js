import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CCard,CCardBody,CCardHeader,CRow,CCol,CBadge,CAvatar,CFormSelect} from '@coreui/react';

const StudentTable = ({user}) => {
	
	const [students,setStudents] = useState([]);
	const [sentStatus,setSentStatus] = useState([]);
	const [studies,setStudies] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {

		axios.get("/api/counselor/"+user.userDetails.special.id+"/students?token="+user.token)
		.then(function(response){
			setStudents(response.data);
		});

		axios.get('/api/counselor/'+user.userDetails.special.id+'/studyplans/status?token='
			+user.token)
		.then(function(response){
			setStudies(response.data.studies);
			setSentStatus(response.data.statuses);
		});

	},[]);

	const handleClick = (student_id) => {

		navigate('/counselor/reports/'+student_id);
	}

	const onOrderChange = (e) => {
		let selectedValue = e.target.value;
		let newOrder = [];
		if(value == 1)
			newOrder = students.sort();
		else if(value == 2)
			newOrder = students.sort(function(a){ return a.school});
		else if(value == 3)
			newOrder = students.sort(function(a){return a});
		else if(value == 4)
			newOrder = students.sort(function(a,b){ return a.major - b.major});

		setStudents(newOrder);
	}

	return(
		<CCard>
			<CCardHeader>
				<CRow>
					<CCol>
						<span>مرتب بر اساس</span>
					</CCol>

					<CCol>
						<CFormSelect onChange={onOrderChange} >
							<option value='1'>نام</option>
							<option value='2'>ساعت مطالعه</option>
							<option value='3'>رشته تحصیلی</option>
							<option value='4'>ارسال گزارش</option>

						</CFormSelect>
					</CCol>
					
				</CRow>
			</CCardHeader>
			<CCardBody>
				{ students.map( (student,idx) => 
					<CCard key={student.id} className='btn' onClick={() => handleClick(student.id)} > 
						<CCardBody>
							<CRow>
								<CCol>
									<CAvatar color='secondary' src={student.profilePic} size='lg'/>
								</CCol>
								<CCol>
									{student.name}
								</CCol>
								<CCol>
									{studies[idx]}
								</CCol>
								<CCol>
									{ sentStatus[idx] ? 
										<CBadge color='success'>
											ارسال کرده
										</CBadge>
									 : 
										<CBadge color='danger'>
											ارسال نکرده
										</CBadge>
									}
								</CCol>
							</CRow>

						</CCardBody>
					</CCard>
				)}
			</CCardBody>
		</CCard>
	)
}
export default StudentTable;
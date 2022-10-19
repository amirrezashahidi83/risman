import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CCard,CCardBody,CRow,CCol,CBadge,CAvatar} from '@coreui/react';
import Select from 'react-select';

const StudentTable = ({user}) => {
	
	const [students,setStudents] = useState([]);
	const navigate = useNavigate();
	useEffect(() =>{

		axios.get("/api/counselor/"+user.userDetails.special.id+"/students?token="+user.token)
		.then(function(response){
			setStudents(response.data);
		});

	},[]);

	const handleClick = (student_id) => {

		navigate('/counselor/reports/'+student_id);
	}

	return(
		<CCard>
			<CCardBody>
				{ students.map( (student) => 
					<CCard key={student.id} className='btn' onClick={() => handleClick(student.id)} > 
						<CCardBody>
							<CRow>
								<CCol>
									<CAvatar color='secondary' size='lg'/>
								</CCol>
								<CCol>
									{student.name}
								</CCol>
								<CCol>
									<CBadge color='danger'>
									1000
									</CBadge>
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
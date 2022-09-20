import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CCard,CCardBody} from '@coreui/react';
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
							{student.name}
						</CCardBody>
					</CCard>
				)}
			</CCardBody>
		</CCard>
	)
}
export default StudentTable;
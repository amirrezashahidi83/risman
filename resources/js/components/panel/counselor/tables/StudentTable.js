import {useEffect,useState} from 'react';
import {CCard,CCardBody} from '@coreui/react';
import Select from 'react-select';

const StudentTable = ()=>{
	
	const [students,setStudents] = useState([]);

	useEffect(() =>{
		
		axios.get("/api/counselor/"+user_id+"/students/")
		.then(function(response){
			setStudents(response.data);
		});

	});

	return(
		<CCard>
			<CCardBody>
				{ students.map( (student) => 
					<CCard key={student.id} > 
						<CCardBody>
						</CCardBody>
					</CCard>
				)}
			</CCardBody>
		</CCard>
	)
}
export default StudentTable;
import {useState,useEffect} from 'react';
import {CTable,CTableBody,CTableHead,CTableRow,CTableHeaderCell,
  CTableDataCell,CCard,CCardBody} from '@coreui/react';
import {useAuthState} from '../../../../Context/auth';

const PlanTable = () => {
	
	const {userDetails,token} = useAuthState(); 
	const [planData,setPlanData] = useState([]);
	const student_id = userDetails.special.id;
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه'];
	
	useEffect(() => {
		if(student_id != undefined){
			axios.get('/api/student/'+student_id+'?token='+token)
			.then(function(response){
				setPlanData(response.data);
			});
		}
	},[]);

	return(
    	<CTable>
    		<CTableHead>
    		</CTableHead>

    		<CTableBody>
				{planData.map( (day,idx) => 
					<CTableRow key={idx} >
						{day.map( (time,idy) => {
							return(
								<>
									{idy == 0 ? <CTableDataCell>{daysName[idx]}</CTableDataCell> : <></>}
									<CTableDataCell key={idy} >
										<CFormSelect name={"t"+idx} onChange={selectLesson} selected={day[idy]}>
											{lessons.map( (lesson) => 
												<option key={lesson.id} value={lesson.id} >{lesson.title}</option>
											)}
										</CFormSelect>
									</CTableDataCell>
								</>
							)
						})}
					</CTableRow>
				)}
    		</CTableBody>
    	</CTable>
  	)
}
export default PlanTable;
import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormSelect,CRow,CCol} from '@coreui/react';
import jalaali from 'jalaali-js';
import {useAuthState} from '../../../../Context/auth';

const WeeksCompareTable = () => {
	
	const {userDetails,token} = useAuthState();
	const counselor_id = userDetails.special.id;

	const [compares,setCompares] = useState([]);
	const [weeks,setWeeks] = useState([]);
	const [fromWeek,setFromWeek] = useState(0);
	const [toWeek,setToWeek] = useState(0);

	const importWeeks = () => {
		let newWeek = Date.parse("2022/03/21");
		let thisWeek = Date.parse("last saturday");
		let newWeeks = [];
		while( thisWeek.compareTo(newWeek) == 1){
			newWeek = newWeek.add({days:7});
			newWeeks.push(jalaali.toJalaali(newWeek));
		}
		setWeeks(newWeeks);
	}

	const getCompares = () => {

		let formData = {
			token: token,
			counselor_id: counselor_id,
			to_week: toWeek,
			from_week: fromWeek
		}; 

		axios.post("/api/counselor/compare/2weeks",formData)
		.then(function(response){
			setCompares(response.data);
		});
	}

	const changeWeek = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		let timeStamps = jalaali.jalaaliToDateObject().getTime(); 

		if(name == 'toWeek')
			setToWeek([...toWeek,dateObject]);
		else{
			setFromWeek([...fromWeek,dateObject]);
		}
	}

	useEffect(() => {		
		importWeeks();
	},[]);

	useEffect( () => {
		getCompares();
	},[fromWeek,toWeek])
	return(
		<CTable caption='top'>
			<CTableCaption>
				<CRow>
					<CCol>
						<CFormSelect name='toWeek' onChange={changeWeek} >
							{weeks.map( (week,idx) =>
								<option key={idx} value={week}>{week.jy}/{week.jm}/{week.jd}</option>
							)}
						</CFormSelect>
					</CCol>

					<CCol>
						<CFormSelect name='fromWeek' onChange={changeWeek}>
							{weeks.map( (week,idx) =>
								<option key={idx} value={week}>{week.jy}/{week.jm}/{week.jd}</option>
							)}
						</CFormSelect>
					</CCol>
				</CRow>
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">دانش آموز</CTableHeaderCell>
      				<CTableHeaderCell scope="col">هفته اول</CTableHeaderCell>
      				<CTableHeaderCell scope="col">هفته دوم</CTableHeaderCell>
      				<CTableHeaderCell scope="col">میزان رشد</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{compares.map((row,idx) =>
					<CTableRow key={idx}>
						<CTableDataCell scope='row'>{row[0]}</CTableDataCell>
						<CTableDataCell>{row[1]}</CTableDataCell>
						<CTableDataCell>{row[2]}</CTableDataCell>
						<CTableDataCell>{row[3]}</CTableDataCell>
					</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default WeeksCompareTable;
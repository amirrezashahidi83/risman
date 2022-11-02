import {useEffect,useState} from 'react';
import {CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
	CTableCaption,CFormInput,CFormSelect} from '@coreui/react';
import Select from 'react-select';
import TimePicker from '../TimePicker';

const StudyTable = ({lessons}) => {
	
	const daysName = ['شنبه','یکشنبه','دو شنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه']

	if(lessons === undefined)
		lessons = [];


	return(
		<CTable caption='top'>
			<CTableCaption>
				<CFormSelect>
					{daysName.map((name,idx) =>
						<option key={idx} >{daysName[idx]}</option>
					)}
				</CFormSelect>
			</CTableCaption>
			<CTableHead>
				<CTableRow>
      				<CTableHeaderCell scope="col">درس</CTableHeaderCell>
      				<CTableHeaderCell scope="col">مبحث</CTableHeaderCell>
      				<CTableHeaderCell scope="col">پایه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت مطالعه</CTableHeaderCell>
      				<CTableHeaderCell scope="col">ساعت تست</CTableHeaderCell>
      				<CTableHeaderCell scope="col">تعداد تست</CTableHeaderCell>
    			</CTableRow>
			</CTableHead>
			<CTableBody>
				{lessons.map((lesson) => 
				<CTableRow key={lesson.id} >
					
					<CTableDataCell>
						<CFormInput name='lesson_id' type='hidden' value={lesson.id}/>
						{lesson.title}
					</CTableDataCell>

					<CTableDataCell>
						<CFormSelect name='topic' >
							{JSON.parse(lesson.topics).map((topic,idx) => 
								<option key={idx} value={idx}>{topic}</option>
							)}
						</CFormSelect>
					</CTableDataCell>
					<CTableDataCell name='grade'>{lesson.grade}</CTableDataCell>
					<CTableDataCell><TimePicker name='study_time' /></CTableDataCell>
					<CTableDataCell><TimePicker name='test_time' /></CTableDataCell>
					<CTableDataCell><CFormInput type='number' name='test_count' /></CTableDataCell>
				</CTableRow>
				)}
			</CTableBody>
		</CTable>
	)
}
export default StudyTable;
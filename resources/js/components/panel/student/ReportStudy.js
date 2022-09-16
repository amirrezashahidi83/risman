import {useState} from 'react';
import {CCard,CCardBody,CCardHeader,CCardFooter,CForm,CInputGroup
	,CFormLabel,CFormInput,CFormText,CFormSelect,CRow,CCol,CButton} from '@coreui/react';
import Select from 'react-select';
import StudyTable from './tables/StudyTable';

const ReportStudy = ()=>{

	const [lessons,setLessons] = useState([]);
	const [topics,setTopics] = useState([]);
	const [data,setData] = useState({});
	
	const handleSubmit = (e) => {
		
		for(let i = 0;i<5;i++){
			setData(...data,
				lesson= {
					'study_time': StudyTime,
					'test_time': TestTime,
					'test_count': TestCount
				}
			)
		}
		axios.post('/api/student/report',{data:data})
		.then(function(response){

		});
	}

	return(
		<CRow>
			<CCol>
				<CCard className='p-2'>
					<CCardBody>
						<CForm>
							<CRow>
								<CCol>
									<CFormLabel>درس</CFormLabel>
								</CCol>

								<CCol>
									<CFormSelect>
										{lessons.map((lesson,id)=>{
											<option key={id}>{lesson}</option>
										})}
									</CFormSelect>
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>مبحث</CFormLabel>
								</CCol>
								<CCol>
									<Select options={topics} />
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>ساعت مطالعه</CFormLabel>
								</CCol>
								<CCol>
									<CInputGroup>
										<CRow>
										<CCol>
											<CFormInput type='number' />
										</CCol>
										:
										<CCol>
											<CFormInput type='number' />
										</CCol>
										</CRow>
									</CInputGroup>
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>ساعت تست</CFormLabel>
								</CCol>
								<CCol>
									<CInputGroup>
										<CRow>
										<CCol>
											<CFormInput type='number' />
										</CCol>
										:
										<CCol>
											<CFormInput type='number' />
										</CCol>
										</CRow>
									</CInputGroup>
								</CCol>
							</CRow>
							<CRow className='mt-3'>
								<CCol>
									<CFormLabel>تعداد تست</CFormLabel>
								</CCol>
								<CCol>
									<CFormInput type='number' />
								</CCol>
							</CRow>
						</CForm>
						<CButton className='w-100'>ثبت</CButton>
					</CCardBody>
				</CCard>
			</CCol>
			<CCol>
				<CCard>
					<CCardBody>
						<CForm>
							<StudyTable />
							<CButton>
								ثبت برنامه
							</CButton>
						</CForm>

					</CCardBody>
				</CCard>
			</CCol>
			<CCol>
				<CCard>
					<CForm onSubmit={handleSubmit} >
						<CCardBody>
							<StudyTable />
						</CCardBody>
						<CCardFooter>
							<CButton type='submit'>ارسال برنامه</CButton>
						</CCardFooter>
					</CForm>
				</CCard>
			</CCol>
		</CRow>
	)
}
export default ReportStudy;
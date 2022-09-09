import {useState} from 'react';
import {CCard,CCardBody,CCardHeader,CForm,CInputGroup
	,CFormLabel,CFormInput,CFormText,CFormSelect,CRow,CCol,CButton} from '@coreui/react';
import Select from 'react-select';
import StudyTable from './tables/StudyTable';

const ReportStudy = ()=>{

	const [lessons,setLessons] = useState([]);
	const [topics,setTopics] = useState([]);

	const week = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهار شنبه','پنجشنبه','جمعه'];

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
							<CFormLabel>روز هفته</CFormLabel>
						</CCol>
						<CCol>
							<CFormSelect>
								{week.map((day)=>
									<option >{day}</option>
								)}
							</CFormSelect>
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
	</CRow>
	)
}
export default ReportStudy;
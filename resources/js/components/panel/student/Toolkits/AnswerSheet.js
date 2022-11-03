import {useState,useEffect} from 'react';
import {CCard,CCardBody,CRow,CCol} from '@coreui/react';
import useEntriesModal from './useEntriesModal';

const AnswerSheet = () => {
	
	const [entries,setEntries] = useState([]);
	const [answers,setAnswers] = useState([]);
	const [percent,setPercent] = useState(0);
	const [message,setMessage] = useState("");
	const {renderModal,number} = useEntriesModal();

	const calculate = () => {
		let rights = 0;
		let wrongs = 0;

		for(let i = 0;i<entries.length;i++){
			if(entries[i] == answers[i])
				rights += 1;
			else{
				wrongs += 1;
			}
		}

		setMessage("");

	}

	const handleOnSubmit = (e) => {

		let newEntries = [];

		for(let i = 0;i < e.target; i++){
			let name = e.target[i].name;
			let value = e.target[i].value;
			if(name.split("-")[0] == 'radio')
				newEntries.push(value);
		}

		if(entries == [])
			setEntries(newEntries);
		else{
			setAnswers(newEntries);
		}

		calculate();

	}

	return(
		<CCard>
			{renderModal}
			<CCardBody>
				{() => {
					let options = [];
					for(let i = 0;i<number;i++)
						options.push(
							<CRow name={'radio-'+i}>
								<CCol>
									<CFormCheck 
									 inline 
									 type="radio" 
									 id="inlineCheckbox1" 
									 value="option1" 
									 label="1"
									/>								
								</CCol>

								<CCol>
									<CFormCheck 
									 inline 
									 type="radio" 
									 id="inlineCheckbox1" 
									 value="option1" 
									 label="2"
									/>								
								</CCol>

								<CCol>
									<CFormCheck 
									 inline 
									 type="radio" 
									 id="inlineCheckbox1" 
									 value="option1" 
									 label="3"
									/>								
								</CCol>

								<CCol>
									<CFormCheck 
									 inline 
									 type="radio" 
									 id="inlineCheckbox1" 
									 value="option1" 
									 label="4"
									/>								
								</CCol>
							</CRow>
						);

					return options;
				}}

				{message}
			</CCardBody>
		</CCard>
	)
}

export default AnswerSheet;

import {useState} from 'react';
import {CPagination,CPaginationItem,CRow} from '@coreui/react';

import QuestionBox from './QuestionBox';

const Test = ()=>{

	const [questions,setQuestions] = useState([]);
	const [pages,setPages] = useState([]);

	return(
		<>
			<QuestionBox />
			{questions.map((question,idx) =>
				 <QuestionBox key={idx} />
				)}

			<CRow>
				<CButton></CButton>
			</CRow>
			<CPagination>
				{pages.map((idx) =>
					<CPaginationItem key={idx}>idx</CPaginationItem>
					)}
			</CPagination>
		</>
	)
}
export default Test;
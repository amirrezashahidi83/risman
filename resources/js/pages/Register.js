import {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {Container,Card,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';
import {CFormCheck,CFormSelect} from '@coreui/react';
import Select from 'react-select';
import KeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import NationalCodeIcon from '@mui/icons-material/AccountBalance';
import { useValidation } from '../components/auth/validation';
import {useAuthState} from '../Context/auth';

const Register = () => {
	
	const navigate = useNavigate();
	let user = useAuthState();
	
	useEffect(() => {
		if(user == null)
			navigate('/login');
	});
	
	const [isStudent,setIsStudent] = useState(false);
	const [haveCode,setHaveCode] = useState(false);

	const sendData = (e) => {

		let name = e[0].value;
		let password = e[2].value;
		let againPassword = e[3].value;
		let nationalCode = e[1].value;
		let role = isStudent ? 2 : 1;
		let user_id = user.userDetails.id;
		let token = user.token;
		let data = {token: token,name : name,password: password, nationalCode: nationalCode,
			role: role,user_id: user_id};

		if(role == 2){
			data['grade'] = e[6].value;
			data['major'] = e[7].value;
			data['school'] = e[8].value;
			data['code'] = e[9].value;
		}

		axios.post('/api/register',data)
		.then(function(response){
			if(response.data.length == 1)
			{
				navigate(role == 1 ? '/counselor' : '/student');
			}
		});
	}

	return(
		<Container dir=''>
			<Row className='d-flex justify-content-center pt-5'>
				<Col className='col-md-4 col-8'>
					<Card>
						<Card.Header>
							<Card.Title>ثبت نام در ریسمان</Card.Title>
						</Card.Header>
							<Card.Body>
								<Form>
									<InputGroup className='mt-4'>
										<InputGroup.Text><PersonIcon /></InputGroup.Text>
										<Form.Control name='name' placeholder='نام و نام  خانوادگی'/>
									</InputGroup>

									<InputGroup className='mt-3'>
										<InputGroup.Text><NationalCodeIcon /></InputGroup.Text>
										<Form.Control name='nationalCode' placeholder='کد ملی'/>
									</InputGroup>

									<Form.Group className='mt-3'>
										<InputGroup>
											<InputGroup.Text><KeyIcon /></InputGroup.Text>
											<Form.Control name='password' placeholder='رمز عبور' type='password' />
										</InputGroup>
										
										<InputGroup className='mt-1'>
											<InputGroup.Text><KeyIcon /></InputGroup.Text>
											<Form.Control name='againPassword' placeholder='تکرار رمز عبور' type='password' />
										</InputGroup>
									</Form.Group>

									<InputGroup className='mt-2'>
										<CFormCheck 
										type='radio' 
										button={{color:'info',variant:'outline',class:'w-100'}} 
										label='مشاور' id='f1' 
										autoComplete="off" 
										name="options-outlined"
										onClick={()=>setIsStudent(false)}
										defaultChecked
										/>
										
										<CFormCheck 
										type='radio' 
										button={{color:'info',variant:'outline',class:'w-100'}} 
										label='دانش آموز' id='f2' autoComplete="off" 
										name="options-outlined"
										onClick={()=>setIsStudent(true)}

										/>
									</InputGroup >

									{
										isStudent?
										<Form.Group className='mt-2'>
									
											<CFormSelect name='grade'>
												<option value='1'>هفتم</option>
												<option value='2'>هشتم</option>
												<option value='3'>نهم</option>
												<option value='4'>دهم</option>
												<option value='5'>یازدهم</option>
												<option value='6'>دوازدهم</option>
											</CFormSelect>
									
											<CFormSelect name='major'>
												<option value='1'>ریاضی</option>
												<option value='2'>تجربی</option>
												<option value='3'>انسانی</option>
												<option value='4'>ندارم</option>
											</CFormSelect>

											<Form.Control name='school' placeholder='نام مدرسه' />
											<CFormCheck
											 label='کد مشاوره دارم'
											 onChange={()=>setHaveCode(!haveCode)}/>
											{haveCode ? 
												<Form.Control name='code' placeholder='کد مشاوره' />
												:
												<div></div>
											}

										</Form.Group>
										:
										<div></div>
									}	

									<Button className='w-100 mt-3' onClick={(e) => sendData(e.target.parentNode)} >
										تکمیل اطلاعات
									</Button>
								</Form>
							</Card.Body>
						<Card.Footer className='text-center'>
							<Card.Link href='#'><small>حساب کاربری دارید؟ وارد شوید</small></Card.Link>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
export default Register;
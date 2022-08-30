import {useState} from 'react';
import {Container,Card,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';
import {CFormCheck} from '@coreui/react';
import Select from 'react-select';
import KeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import NationalCodeIcon from '@mui/icons-material/AccountBalance';
const Register = ()=>{
	const [isStudent,setIsStudent] = useState(false);
	return(
		<Container dir=''>
			<Row className='d-flex justify-content-center pt-5'>
				<Col className='col-md-4 col-8'>
					<Card>
						<Card.Header>
							<Card.Title>ثبت نام در ریسمان</Card.Title>
						</Card.Header>
						<Card.Body>

							<InputGroup className='mt-4'>
								<InputGroup.Text><PersonIcon /></InputGroup.Text>
								<Form.Control placeholder='نام و نام  خانوادگی'/>
							</InputGroup>

							<InputGroup className='mt-3'>
								<InputGroup.Text><NationalCodeIcon /></InputGroup.Text>
								<Form.Control placeholder='کد ملی'/>
							</InputGroup>

							<Form.Group className='mt-3'>
								<InputGroup>
									<InputGroup.Text><KeyIcon /></InputGroup.Text>
									<Form.Control placeholder='رمز عبور' type='password' />
								</InputGroup>
								
								<InputGroup className='mt-1'>
									<InputGroup.Text><KeyIcon /></InputGroup.Text>
									<Form.Control placeholder='تکرار رمز عبور' type='password' />
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
									<Select />
									<Select className='mt-2' />
								</Form.Group>
								:
								<div></div>
							}	

							<Button className='w-100 mt-3' >تکمیل اطلاعات</Button>
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
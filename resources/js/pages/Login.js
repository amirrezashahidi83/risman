import {useState} from 'react';
import {Card,Form,Row,Col,Container,Button,InputGroup} from 'react-bootstrap';
import useValidation from '../components/auth/validation';
import useConfirmModal from '../components/auth/signup/ConfirmModal';
import KeyIcon from '@mui/icons-material/Key';
import {login as loginAction,useAuthDispatch} from '../Context';
 
const Login = () =>{

	const [show,setShow,ConfirmModal] = useConfirmModal();
	const [phone,setPhone] = useState('');
	const [password,setPassword] = useState('');
	const dispatch = useAuthDispatch();

	const sendCode = () => {
		axios.get("/api/sendCode/"+phone)
			.then(function(response){

		});
	}
	const checkForm = async (e) => {

		e.preventDefault();
		let result = await loginAction(dispatch,phone,password);

	}

	return (
		<Container dir='ltr'>
			<Row className='d-flex justify-content-center pt-5'>
				<Col className='col-md-4 col-8'>
				{show ? ConfirmModal   : <div></div>}
				<Form onSubmit={checkForm}>
					<Card>
						<Card.Header className='text-center'>
							<Card.Title>ورود به ریسمان</Card.Title>
						</Card.Header>

						<Card.Body>

							<InputGroup className='mt-3'>
								<InputGroup.Text>+98</InputGroup.Text>
								<Form.Control type='tel' onChange={(e) => setPhone(e.target.value)} />
							</InputGroup>
							<InputGroup className='mt-3'>
								<InputGroup.Text> <KeyIcon /> </InputGroup.Text>
								<Form.Control type='password' onChange={(e) =>setPassword(e.target.value)} />
							</InputGroup>
							<div className='mt-4 text-end'>
								<Card.Link href="#">رمز عبور خود را فراموش کرده اید؟</Card.Link>
								<Form.Check className='mt-3' reverse>
									<Form.Check.Label>من را به خاطر بسپار</Form.Check.Label>
									<Form.Check.Input />
								</Form.Check>
							</div>
							
							<Button className='w-100 mt-4' size="lg" type='submit'>ورود</Button>
							<Button className='w-100 mt-2' size="lg" onClick={setShow}>ثبت نام</Button>
						</Card.Body>
					</Card>
				</Form>
				</Col>
			</Row>
		</Container>
		);	
}
export default Login;
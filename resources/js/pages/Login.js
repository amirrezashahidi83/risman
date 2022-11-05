import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Card,Form,Row,Col,Container,Button,InputGroup,Alert} from 'react-bootstrap';
import useValidation from '../components/auth/validation';
import useConfirmModal from '../components/auth/signup/ConfirmModal';
import useForgetPassword from '../components/auth/useForgetPassword';

import KeyIcon from '@mui/icons-material/Key';
import {login as loginAction,useAuthDispatch,useAuthState} from '../Context/auth';
 
const Login = () => {

	const [errors,handleChange] = useValidation();
	const [showConfirm,sendCode,ConfirmModal] = useConfirmModal();
	const [ForgetModal,showForget,setShowForget] = useForgetPassword();

	const {userDetails,token} = useAuthState();

	const dispatch = useAuthDispatch();

	let navigate = useNavigate();

	const checkForm = async (e) => {

		e.preventDefault();
		let phone = e.target[0].value;
		let password = e.target[1].value;
		let result = await loginAction(dispatch,phone,password);
		if(result.user)
			navigate(result.user.role == 1 ? '/counselor' : '/student');

	}

	return (
		<Container dir='ltr'>
			<Row className='d-flex justify-content-center pt-5'>
				<Col className='col-md-4 col-8'>
					{showConfirm ? ConfirmModal   : <div></div>}
					{showForget ? <ForgetModal /> : <div></div>}
					<Form onSubmit={checkForm}>
						<Card>
							<Card.Header className='text-center bg-white'>
								<Card.Title className='h4'></Card.Title>
							</Card.Header>

							<Card.Body>
								<InputGroup className='mt-3 group-border-ltr'>
									<InputGroup.Text className='rounded-left'>+98</InputGroup.Text>
									<Form.Control className='rounded-right' name='phone' type='tel' onChange={handleChange} aria-describedby='small-phone' required/>
									<Form.Text id='small-phone'>{errors.username}</Form.Text>
								</InputGroup>
								<InputGroup className='mt-3 group-border-ltr'>
									<InputGroup.Text> <KeyIcon /> </InputGroup.Text>
									<Form.Control type='password' name='password' onChange={handleChange} aria-describedby='small-password' text="Dasdsa" required/>
									<Form.Text id='small-password'>{errors.password}</Form.Text>
								</InputGroup>
								<div className='mt-4 text-end'>
									<Card.Link href="#" onClick={() => setShowForget(true)}>رمز عبور خود را فراموش کرده اید؟</Card.Link>
									<Form.Check className='mt-3' reverse>
										<Form.Check.Label>من را به خاطر بسپار</Form.Check.Label>
										<Form.Check.Input />
									</Form.Check>
								</div>
								
								<Button className='w-100 mt-4' variant='primary' size="lg" type='submit'>ورود</Button>
								<Button className='w-100 mt-2' variant='primary' size="lg" onClick={sendCode}>ثبت نام</Button>
							</Card.Body>
						</Card>
					</Form>
				</Col>
			</Row>
		</Container>
		);	
}
export default Login;
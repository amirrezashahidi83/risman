import {useState} from 'react';

import {Card,Form,Row,Col,Container,Button,InputGroup} from 'react-bootstrap';
import useValidation from './validation';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const SignIn = () =>{

	return (
		<Container>
			<Row className='d-flex justify-content-center pt-5'>
				<Col className='col-md-4 col-8'>
				<Form>
					<Card>
						<Card.Header className='text-center'>
							<Card.Title>ورود به ریسمان</Card.Title>
						</Card.Header>

						<Card.Body>

							<InputGroup className='mt-3'>
								<InputGroup.Text>+98</InputGroup.Text>
								<Form.Control type='tel'/>
							</InputGroup>

							<Form.Control className='mt-3' type='password'/>

							<div className='mt-4 text-end'>
								<Card.Link href="#">رمز عبور خود را فراموش کرده اید؟</Card.Link>
								<Form.Check className='mt-3' reverse>
									<Form.Check.Label>من را به خاطر بسپار</Form.Check.Label>
									<Form.Check.Input />
								</Form.Check>
							</div>
							
							<Button className='w-100 mt-4' size="lg">ورود</Button>
						</Card.Body>
						<Card.Footer className='text-center'>
							<Card.Link href="">ثبت نام</Card.Link>
						</Card.Footer>
					</Card>
				</Form>
				</Col>
			</Row>
		</Container>
		);	
}
export default SignIn;
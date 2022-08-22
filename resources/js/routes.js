import SignUp from './auth/Signup';
import SignIn from './auth/Signin';
export const routes = [

	{
		path:'/user/signUp',
		element:<SignUp />
	},
	{
		path:'/user/signIn',
		element:<SignIn />

	}
]
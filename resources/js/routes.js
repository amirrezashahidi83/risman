import Login from './pages/Login';
import Register from './pages/Register';
import Panel from './pages/Panel';
export const routes = [

	{
		path : '/login',
		element: <Login />

	},

	{
		path: '/register',
		element: <Register />
	},

	{
		path: '/student/*',
		element: <Panel />
	},

	{
		path: '/counselor/*',
		element: <Panel />
	}
]
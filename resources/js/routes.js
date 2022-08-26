import Login from './pages/Login';
import Panel from './pages/Panel';
export const routes = [

	{
		path : '/login',
		element: <Login />

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
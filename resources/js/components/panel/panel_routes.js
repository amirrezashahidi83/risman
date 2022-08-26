
import StudentDashboard from './student/Dashboard';
import CounselorDashboard from './counselor/Dashboard';

export const student_routes = [
	{
		path: '/dashboard',
		element: <StudentDashboard />
	}

]

export const counselor_routes = [
	{
		path: '/dashboard',
		element: <CounselorDashboard />
	}
]

import StudentDashboard from './student/Dashboard';
import CounselorsList from './student/CounselorsList';
import CounselorsProfile from './student/CounselorsProfile';
import CounselorDashboard from './counselor/Dashboard';
export const student_routes = [
	{
		path: '/dashboard',
		element: <StudentDashboard />
	},
	{
		path: '/counselors/',
		element: <CounselorsList />
	},
	{
		path: '/counselors/profile',
		element: <CounselorsProfile />
	}

]

export const counselor_routes = [
	{
		path: '/dashboard',
		element: <CounselorDashboard />
	}
]
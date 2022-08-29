
import StudentDashboard from './student/Dashboard';
import CounselorsList from './student/CounselorsList';
import CounselorsProfile from './student/CounselorsProfile';
import ReportStudy from './student/ReportStudy';
import AnalysisExam from './student/AnalysisExam';
import NewTest from './student/NewTest';
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
	},
	{
		path: '/mycounselor/reportstudy',
		element: <ReportStudy />
	},
	{
		path: '/analysis_exam',
		element: <AnalysisExam />
	},
	{
		path: '/test',
		element: <NewTest />
	}

]

export const counselor_routes = [
	{
		path: '/dashboard',
		element: <CounselorDashboard />
	}
]

import StudentDashboard from './student/Dashboard';
import CounselorsList from './student/CounselorsList';
import CounselorsProfile from './student/CounselorsList/CounselorsProfile';
import ReportStudent from './student/AdvancedStudy';
import StudentAnalysisExam from './student/AnalysisExam';
import CounselorAnalysisExam from './counselor/AnalysisExam';
import StudentRequests from './student/PlanRequests';
import PlanSchedule from './student/PlanSchedule';
import NewTest from './student/NewTest';
import CounselorDashboard from './counselor/Dashboard';
import Wallet from './student/Wallet';
import Settings from './Settings';
import Daily from './counselor/Daily';
import ReportCounselor from './counselor/ReportStudy';
import Compare from './counselor/Compare';
import SendPlan from './counselor/SendPlan';

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
		path: '/reportstudy',
		element: <ReportStudent />
	},
	{
		path: '/analysis_exam',
		element: <StudentAnalysisExam />
	},
	{
		path: '/plan/requests',
		element: <StudentRequests />
	},
	{
		path: '/schedule',
		element: <PlanSchedule />
	},

	{
		path: '/test',
		element: <NewTest />
	},
	{
		path: '/wallet',
		element: <Wallet />
	},
	{
		path:'/settings',
		element: <Settings />
	}

]

export const counselor_routes = [
	{
		path: '/dashboard',
		element: <CounselorDashboard />
	},
	{
		path: '/analysis_exam',
		element: <CounselorAnalysisExam />
	},
	{
		path: '/wallet',
		element: <Wallet />
	},
	{
		path: '/settings',
		element: <Settings />
	},
	{
		path: '/daily',
		element: <Daily />
	},
	{
		path: '/reports/:student_id',
		element: <ReportCounselor />
	},
	{
		path: '/compare/',
		element: <Compare />
	},
	{
		path: '/sendplan/:student_id',
		element: <SendPlan />
	}
]
import React from 'react'
import CIcon from '@coreui/icons-react'
import {Person,BackupTable,AccountBalanceWallet,Psychology,
  Assessment,Forum,AddToPhotos,Dashboard} from '@mui/icons-material';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

export const student_nav = [
  
  {
    component: CNavItem,
    name: 'داشبورد',
    to: '/student/dashboard',
    icon: <Dashboard />
  },

  {
    component: CNavGroup,
    name: ' مشاور',
    icon: <Person />,
    items:[
      {
        component: CNavItem,
        name: 'لیست مشاوران',
        to: '/student/counselors/'
      },

      {
        component: CNavItem,
        name: 'گزارش ساعت مطالعه',
        to: '/student/reportstudy'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'تحلیل آزمون',
    to: '/student/analysis_exam',
    icon: <Assessment />
  },
  {
    component: CNavGroup,
    name: 'برنامه',
    icon: <BackupTable />,
    items:[
      {
        component: CNavItem,
        name: 'درخواست برنامه ',
        to: '/student/plan/requests'

      }
    ]
  },
  
  {
    component: CNavGroup,
    name: 'آزمون های روانشناسی',
    icon: <Psychology />,
    items:[
      {
        component: CNavItem,
        name: 'آزمون جدید',
        to: '/student/psychology_tests'
      }
    ]
  },

  {
    component: CNavGroup,
    name: 'مالی',
    icon: <AccountBalanceWallet />,
    items:[
      {
        component: CNavItem,
        name: 'کیف پول',
        to: '/user/wallet'
      }
    ]
  },

  {
    component: CNavItem,
    name: 'ابزارک ها',
    to: '/student/toolkits'
  },

  {
    component: CNavItem,
    name: 'چت روم',
    to: '/user/chatroom',
    icon: <Forum />
  },
]

export const counselor_nav = [
  
  {
    component: CNavItem,
    name: 'داشبورد',
    icon: <Dashboard />,
    to: '/counselor/dashboard'
  },

  {
    component: CNavItem,
    name: 'مقایسه گزارش ها',
    to: '/counselor/compare'
  },

  {
    component: CNavItem,
    name: 'تحلیل آزمون',
    icon: <Person />,
    to: '/counselor/my_students/analysis_exam'
  },
  
  {
    component: CNavItem,
    name: 'درخواست ها',
    icon: <BackupTable />,
    to: '/counselor/plan/requests'

  },
  
  {
    component: CNavGroup,
    name: 'عکس و جمله روزانه',
    icon: <AddToPhotos />,
    items:[
      {
        component: CNavItem,
        name: 'مشاهده',
        to: '/counselor/daily/'
      },

      {
        component: CNavItem,
        name: 'حالت اتوماتیک',
        to: '/counselor/automatic_daily'
      }
    ]
  },

  {
    component: CNavGroup,
    name: 'مالی',
    icon: <AccountBalanceWallet />,
    items:[
      {
        component: CNavItem,
        name: 'کیف پول',
        to: '/user/wallet'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'چت روم',
    to: '/user/chatroom',
    icon: <Forum />
  }
]

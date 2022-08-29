import React from 'react'
import CIcon from '@coreui/icons-react'
import {Person,BackupTable,AccountBalanceWallet,Psychology,
  Assessment,Forum,AddToPhotos} from '@mui/icons-material';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

export const student_nav = [
  {
    component: CNavGroup,
    name: ' مشاور',
    icon: <Person />,
    items:[
      {
        component: CNavItem,
        name: 'لیست مشاوران',
        to: '/counselors/'
      },
      
      {
        component: CNavItem,
        name: 'مشاور من',
        to: '/my_counselor/'
      },

      {
        component: CNavItem,
        name: 'گزارش ساعت مطالعه',
        to: '/my_counselor/reportStudy'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'تحلیل آزمون',
    to: '/analysis_exam',
    icon: <Assessment />
  },
  {
    component: CNavGroup,
    name: 'برنامه',
    icon: <BackupTable />,
    items:[
      {
        component: CNavItem,
        name: 'درخواست برنامه جدید',
        to: '/plan/find'
      },
      {
        component: CNavItem,
        name: 'برنامه های من',
        to: '/plan/my_plans'
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
        to: 'نتیاج آزمون های قبلی'
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
        to: '/wallet'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'چت روم',
    to: '/chatroom',
    icon: <Forum />
  }
]

export const counselor_nav = [
  
  {
    component: CNavGroup,
    name: 'دانش آموزان من',
    icon: <Person />,
    items:[
      {
        component: CNavItem,
        name: 'گزارش مطالعه',
        to: '/my_students/study_reports'
      },
      {
        component: CNavItem,
        name: 'تحلیل آزمون',
        to: '/my_students/analysis_exam'
      }
    ]
  },
  
  {
    component: CNavGroup,
    name: 'برنامه',
    icon: <BackupTable />,
    items:[
      {
        component: CNavItem,
        name: 'ارسال برنامه جدید',
        to:'/study_plans/new'
      },
      {
        component: CNavItem,
        name: 'برنامه های در حال اجرا',
        to:'/study_plans'
      }
    ]

  },
  
  {
    component: CNavItem,
    name: 'عکس و جمله روزانه',
    to: '/daily_movitation',
    icon: <AddToPhotos />
  },
  {
    component: CNavGroup,
    name: 'مالی',
    icon: <AccountBalanceWallet />,
    items:[
      {
        component: CNavItem,
        name: 'کیف پول',
        to: '/wallet'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'چت روم',
    to: '/chatroom',
    icon: <Forum />
  }
]

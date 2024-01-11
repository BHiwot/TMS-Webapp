import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Organization',
        path: '/overview/home',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Course',
        path: '/overview/Course',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Courses',
    path: '/Course',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Trainer',
    path: '/Trainer',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Schedule',
    path: '/Schedule',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Trainee',
    path: '/Trainee',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Location',
    path: '/Location',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Session',
    path: '/Session',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '/Course',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '/Schedules',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

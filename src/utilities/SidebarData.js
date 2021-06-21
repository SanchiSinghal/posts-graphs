import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Pie Chart',
    path: '/pieChart',
    icon: <FaIcons.FaChartPie />,
    cName: 'nav-text'
  },
  {
    title: 'Line Chart',
    path: '/lineChart',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'Bar Graph',
    path: '/barGraph',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  }
];

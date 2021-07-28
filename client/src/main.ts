import '@/scss/index';
import { initRouter } from '@/Core/Router';
import Header from '@/Components/Header';
import Main from '@/View/Main';
import CalendarView from '@/View/CalendarView';
import Charts from '@/View/Charts/index';
import { Route } from './utils/types';

const $app = document.querySelector('.content-wrapper') as HTMLElement;
const $header = document.querySelector('header') as HTMLElement;
const routes: Route[] = [
  { path: '/', redirect: '/home' },
  { path: '/main', component: Main },
  { path: '/calendar', component: CalendarView },
  { path: '/charts', component: Charts },
];

function init() {
  new Header($header);
  initRouter({ $app, routes });
}

init();

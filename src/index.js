'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import clubSelect from './modules/clubSelect';
import popupForms from './modules/popupForms';
import sendPopupForm from './modules/sendPopupForm';
import burgerMenu from './modules/burgerMenu';
import scroll from './modules/scroll';
import calc from './modules/calc';
import slider from './modules/slider';

clubSelect();
popupForms();
sendPopupForm();
burgerMenu();
scroll();
calc();
slider();
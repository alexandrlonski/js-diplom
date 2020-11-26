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
import sendForm from './modules/sendForm';
import burgerMenu from './modules/burgerMenu';

clubSelect();
popupForms();
sendForm();
burgerMenu();
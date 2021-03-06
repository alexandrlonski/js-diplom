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
import sendMainForm from './modules/sendMainForm';
import burgerMenu from './modules/burgerMenu';
import scroll from './modules/scroll';
import calc from './modules/calc';
import slider from './modules/slider';
import sliderFoto from './modules/sliderFoto';
import sliderCarusel from './modules/sliderCarusel';

clubSelect();
popupForms();
sendMainForm();
burgerMenu();
scroll();
calc();
slider();
sliderFoto();
sliderCarusel();
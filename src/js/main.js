import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import chekTextInput from './modules/chekTextInput';
import showStyleMore from './modules/showStyleMore';
import calc from './modules/calc';
import stateCalc from './modules/stateCalc';
import filters from './modules/filters';
import pictureSize from './modules/pictureSize';
import burger from './modules/burger';

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    let modalState = {};

    stateCalc(modalState);
    calc('#size', '#material', '#options', '.promocode', '.calc-price', modalState);
    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical', );
    forms();
    mask('[name="phone"]');
    chekTextInput('[name="name"]');
    chekTextInput('[name="message"]');
    showStyleMore('.button-styles', '#styles .row');
    filters();
    pictureSize('.sizes-block');
    burger('.burger', '.burger-menu');


    forms(modalState);
});
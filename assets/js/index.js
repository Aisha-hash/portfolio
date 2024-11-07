'use strict';

import dom from './dom.js';
import render from './render.js';
import slider from './slider.js';
import settings, { elements } from './settings.js';
import observer from './observer.js';

const init = () => {
    dom.mapping();
    dom.appendEventListeners();
    slider.showSlide(settings.currentSlide);
    observer.observe();
    // render.graph();
}



document.addEventListener('DOMContentLoaded', init);
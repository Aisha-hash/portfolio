'use strict';

import dom from './dom.js';
import render from './render.js';
import { elements } from './settings.js';

const init = () => {
    dom.mapping();
    dom.appendEventListeners();
    render.graph();
}



document.addEventListener('DOMContentLoaded', init);
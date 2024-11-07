'use strict';

import { elements } from "./settings.js";
import slider from "./slider.js";


const dom = {
    create(
        content = false,
        type = 'div',
        parent = false,
        className = false
    ) {
        const el = document.createElement(type);
        if (content) el.innerHTML = content;
        if (className) el.className = className;
        if (parent) parent.append(el);

        return el;
    },
    $(selector) {
        return document.querySelector(selector);
    },
    $$(selector) {
        return [...document.querySelectorAll(selector)];
    },
    mapping() {
        elements.intro = dom.$('.intro');
        elements.download = dom.$('#download');
        elements.slides = dom.$$('.slide');
        elements.slider = dom.$('.slider');
        elements.previousButton = dom.$('.previous');
        elements.nextButton = dom.$('.next');
        elements.circles = dom.$$('.circle');
        elements.infographic = dom.$('#about-infographic');
        elements.about = dom.$('#about');
        elements.skills = dom.$$('.skills-section');
        elements.skillsSection = dom.$('#skills-inner');
    },
    appendEventListeners() {
        elements.previousButton.addEventListener('click', () => slider.changeSlide(-1));
        elements.nextButton.addEventListener('click', () => slider.changeSlide(1));
        elements.download.addEventListener('click', () => {
            const link = dom.create(false, 'a');
            link.download = 'CV_Aishwarya_Landage';
            link.href = 'assets/data/Lebenslauf_Aishwarya_Landage.pdf';
            link.click();
        });
    }
}

export default dom;
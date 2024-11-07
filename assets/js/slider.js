'use strict';

import settings, { elements } from "./settings.js";


const slider = {
    showSlide(index) {
        let slides = elements.slides;
        if (index > slides.length - 1) {
            settings.currentSlide = 0; // Loop back to the first slide
        } else if (index < 0) {
            settings.currentSlide = slides.length - 1; // Loop to the last slide 
        } else {
            settings.currentSlide = index;
        }

        // Move the slider
        let translate = (settings.currentSlide) * 100
        elements.slider.style.transform = `translateX(-${translate}%)`;
    },

    changeSlide(direction) {
        let index = (settings.currentSlide) + direction;
        slider.showSlide(index);
    }
}

export default slider;
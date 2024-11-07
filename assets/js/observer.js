'use strict';

import { elements } from "./settings.js";
import render from "./render.js";


const observer = {
    observe() {
        const infoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    elements.circles.forEach((circle, index) => {
                        setTimeout(() => {
                            console.log(circle);

                            circle.classList.add('visible');

                        }, index * 300);
                    });

                } else {
                    elements.circles.forEach(circle => {
                        circle.classList.remove('visible');
                    });
                }
            });
        }, {
            root: null, // Observe within the viewport
            threshold: 0.1 // Trigger when 20% of the element is visible
        });

        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    elements.skills.forEach((skill) => {
                        skill.classList.add('visible');
                        console.log('visible');

                    });
                }
            });
        });

        infoObserver.observe(elements.infographic);
        skillsObserver.observe(elements.skillsSection);


    }
}

export default observer;
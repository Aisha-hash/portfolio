'use strict';

import { elements } from "./settings.js";
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
        elements.graph = dom.$('.graph').getContext('2d');
    },
    appendEventListeners() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    for (let i = 0; i < 4; i++) {
                        setTimeout(() => {
                            elements.intro.classList.add('hop');

                            elements.intro.addEventListener('animationend', () => {
                                elements.intro.classList.remove('hop');
                            }, { once: true });
                        }, i * 600);
                    }
                }
            });
        });
        observer.observe(elements.intro);
    }
}

export default dom;
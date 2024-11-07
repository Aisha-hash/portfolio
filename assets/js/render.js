'use strict';

import { elements } from "./settings.js";



const render = {
    graph() {
        const skillsChart = new Chart(elements.graph, {
            type: 'bar',
            data: {
                labels: ['HTML & CSS', 'JavaScript', 'jQuery', 'Java'],
                datasets: [{
                    label: 'Skill Level',
                    data: [65, 50, 40, 70], // Skill levels for each category
                    backgroundColor: [
                        '#4CAF50',
                        '#FFC107', '#FFC107', '#FF9800'
                    ],

                    borderWidth: 1,
                    borderRadius: 5,
                    barThickness: 'flex',
                    barPercentage: 0.4, // Adjust width of each bar (1.0 is full width, less is narrower)
                    categoryPercentage: 1 // Adjust spacing between bar categories (1.0 is no spacing, less is more space)
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 3500, // Animation duration in ms
                    easing: 'easeInOutQuad'
                },
                indexAxis: 'x',
                scales: {
                    x: {
                        ticks: {
                            color: 'blue',// Change X-axis label color
                            autoSkip: false,
                        },
                        barPercentage: 0.5,   // 50% width of each category
                        grid: {
                            display: false // Hide vertical grid lines
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,

                        ticks: {
                            callback: function (value) {
                                // Custom y-axis labels based on skill levels
                                if (value >= 90) return "I'm the master of the universe";
                                if (value >= 70) return "High, I'm pretty good";
                                if (value >= 50) return "Medium, I'm trying to improve";
                                if (value >= 30) return "Basic, you can't always win...";
                                return "Uh? Next question?";
                            },
                            stepSize: 20, // Set step size to control the spacing
                            color: 'blue',
                        },
                        grid: {
                            // color: '#e0e0e0', // Light gray for horizontal lines
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false // Hides the legend (the box showing the dataset label).
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const value = context.raw;
                                let level;
                                if (value > 80) level = "I'm the master of the universe.";
                                else if (value > 60) level = "High, I'm pretty good.";
                                else if (value > 40) level = "Medium, I'm trying to improve.";
                                else if (value > 20) level = "Basic, you can't always win...";
                                else level = "Uh? Next question?";
                                return `${context.label}: ${level}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

export default render;
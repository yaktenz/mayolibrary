/**
 * Halloween Falling Effect Script
 * Author: Gemini
 *
 * This script injects the necessary CSS and starts a falling object animation
 * (default is a Bat emoji 🦇) on any web page it is included in.
 *
 * @param {object} [options={}] - Configuration options for the effect.
 * @param {string} [options.emoji='🦇'] - The emoji or character to fall. Use HTML entity code (e.g., '&#127871;' for a ghost).
 * @param {number} [options.count=30] - The number of falling objects.
 * @param {number} [options.minSize=20] - The minimum font size in pixels.
 * @param {number} [options.maxSize=35] - The maximum font size in pixels.
 * @param {string} [options.color='#9933ff'] - CSS color for the emoji (e.g., 'orange', '#ff6600').
 */
function activateHalloweenBats(options = {}) {
    const {
        emoji = '🦇',
        count = 30,
        minSize = 20,
        maxSize = 35,
        color = '#9933ff' // Brighter purple color
    } = options;

    // --- 1. Inject necessary CSS styles ---
    const css = `
        /* CSS for the self-contained falling effect */
        .falling-effect-object {
            position: fixed;
            top: -50px; /* Start above viewport */
            z-index: 1000;
            pointer-events: none; /* Ignore mouse events */
            animation: fall linear infinite;
            line-height: 1; /* Prevent extra space around emoji */
            text-shadow: 0 0 5px rgba(0,0,0,0.5); /* Subtle shadow for visibility */
        }

        @keyframes fall {
            0% {
                transform: translateY(0) rotateZ(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(105vh) rotateZ(360deg); /* Fall and rotate */
                opacity: 0.1;
            }
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // --- 2. Create and start the falling objects ---
    for (let i = 0; i < count; i++) {
        const object = document.createElement('div');
        // Use innerHTML for emoji code support
        object.innerHTML = emoji;
        object.classList.add('falling-effect-object');

        // Randomize properties
        const startX = Math.random() * 100; // 0 to 100vw
        const duration = Math.random() * 10 + 7; // 7 to 17 seconds
        const size = Math.random() * (maxSize - minSize) + minSize;

        object.style.left = `${startX}vw`;
        object.style.fontSize = `${size}px`;
        object.style.color = color;
        object.style.animationDuration = `${duration}s`;
        object.style.animationDelay = `${Math.random() * 10}s`; // Stagger the start time

        document.body.appendChild(object);
    }
}

// Automatically run the effect when the script is loaded
// You can customize the options here:
document.addEventListener('DOMContentLoaded', () => {
    activateHalloweenBats({
        emoji: '🦇', // Change to '&#128123;' for a Ghost 👻
        count: 30, 
        color: '#9933ff' 
    });
});

/**
 * Navbar Module
 *
 * This module injects the complete navigation bar (header and mobile menu)
 * into the body of the document and sets up all necessary event listeners
 * for mobile responsiveness and link highlighting.
 */

// HTML structure for the complete navigation bar
const navbarHTML = `
    <!-- Header Section (Sticky) -->
    <header class="bg-gray-950 py-4 px-6 md:px-12 shadow-lg sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">MAYONAISE</a>
            
            <!-- Desktop Navigation Links -->
            <nav class="hidden md:flex space-x-6">
                <a href="index.html" class="text-gray-300 hover:text-white transition-colors duration-300 nav-link-underline">Home</a>
                <a href="downloads.html" class="text-gray-300 hover:text-white transition-colors duration-300 nav-link-underline">Downloads</a>
                
                <!-- Social Dropdown Menu -->
                <!-- UPDATED: Added duration-200 and delay-100 to smooth out closing -->
                <div class="relative group">
                    <button class="text-gray-300 hover:text-white transition-colors duration-300 nav-link-underline cursor-pointer focus:outline-none">
                        Social
                    </button>
                    <!-- IMPORTANT CHANGES HERE: 
                         - Added duration-200 for opacity animation.
                         - Added delay-100 for a slight pause before hiding the menu. 
                         - The group-hover logic controls the visibility.
                    -->
                    <div class="dropdown-menu absolute z-10 hidden bg-gray-800 rounded-md shadow-lg py-2 mt-2 w-48 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:block group-hover:delay-100">
                        <a href="https://www.youtube.com/@TheRealMayo_?sub_confirmation=1" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-300">YouTube</a>
                        <a href="https://discord.gg/a7eNTUaYPh" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-300">Discord</a>
                        <!-- New StadiaStudios Link -->
                        <a href="https://stadiastudios.github.io/stadia/" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-300">StadiaStudios</a>
                    </div>
                </div>
            </nav>
            
            <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-white focus:outline-none" aria-label="Toggle mobile menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </header>

    <!-- Mobile Menu (initially hidden) -->
    <div id="mobile-menu" class="hidden md:hidden bg-black-900 py-4 px-6 text-center">
        <a href="index.html" class="block py-2 text-gray-300 hover:text-white transition-colors duration-300 nav-link-underline">Home</a>
        <a href="downloads.html" class="block py-2 text-gray-300 hover:text-white transition-colors duration-300 nav-link-underline">Downloads</a>
        
        <!-- Social Dropdown for Mobile -->
        <div class="relative w-full">
            <button id="mobile-social-button" class="block py-2 w-full text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">
                Social
            </button>
            <div id="mobile-social-menu" class="hidden bg-gray-800 rounded-md py-2 mt-2">
                <a href="https://www.youtube.com/@TheRealMayo_?sub_confirmation=1" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-300">YouTube</a>
                <a href="https://discord.gg/a7eNTUaYPh" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-300">Discord</a>
                <!-- New StadiaStudios Link -->
                <a href="https://stadiastudios.github.io/Stadia/" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-300">StadiaStudios</a>
            </div>
        </div>
    </div>
`;


function initializeNavbar() {
    // 1. Inject the HTML into the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 2. Setup event listeners
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileSocialButton = document.getElementById('mobile-social-button');
    const mobileSocialMenu = document.getElementById('mobile-social-menu');
    
    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile social menu toggle
    if (mobileSocialButton && mobileSocialMenu) {
        mobileSocialButton.addEventListener('click', (e) => {
            e.preventDefault();
            mobileSocialMenu.classList.toggle('hidden');
        });
    }

    // 3. Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link-underline');
    
    navLinks.forEach(link => {
        // We check the href attribute against the current page path
        if (link.getAttribute('href') === currentPath) {
            // Add the 'active' class to highlight it
            link.classList.add('active');
        }
    });
}

// Ensure the navbar initializes once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeNavbar);

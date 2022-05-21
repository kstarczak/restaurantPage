import {navBarLoad, clearPage} from './pages.js';
import homePageLoad from './homePage.js';
import menuPageLoad from './menuPage.js';
import contactPageLoad from './contactPage.js';


function createPage(page) {
    clearPage();
    navBarLoad();
    if (page === 'home') {
        homePageLoad();
    } else if (page === 'menu') {
        menuPageLoad();
    } else if (page === 'contact') {
        contactPageLoad();
    } else {
        alert('error: Page not defined!');
    };
    const selectedLink = document.getElementById(`${page}`);
    selectedLink.classList.add('selected');
    const links = document.querySelectorAll('.nav-link');
    links.forEach(assignLink);
};

function assignLink(link) {
    if (!link.classList.contains('selected')) {
        link.addEventListener('click', (e) => createPage(`${e.target.id}`));
    };
};


createPage('home');
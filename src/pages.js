const navBarLoad = function(page) {
    
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    header.classList.add('header');

    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const logo = document.createElement('div');

    const homeLink = document.createElement('a');
    homeLink.classList.add('nav-link');
    homeLink.id = 'home';
    homeLink.textContent = 'Home';

    const menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.id = 'menu';
    menuLink.textContent = 'Menu';

    const contact = document.createElement('a');
    contact.classList.add('nav-link');
    contact.id = 'contact';
    contact.textContent = 'Contact';

    navBar.append(homeLink, menuLink, contact);
    header.appendChild(navBar);
    content.appendChild(header);
};



const clearPage = function() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };

};

export {navBarLoad, clearPage};

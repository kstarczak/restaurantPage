const contactPageLoad = function() {

    const content = document.querySelector('#content');

    const contactUs = document.createElement('h1');
    contactUs.classList.add('contact-us');
    contactUs.textContent = "Contact";
    
    const contactInfo = document.createElement('p');
    contactInfo.classList.add('contact-info');
    contactInfo.textContent = "Call 555-555-5555 to make a reservation of place and order for takeout!";

    content.append(contactUs, contactInfo);


    content.className = 'contact-background';

};

export default contactPageLoad;
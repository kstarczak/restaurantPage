const homePageLoad = function() {
    
    const content = document.querySelector('#content');
    
    const main = document.createElement('div');
    main.classList.add('main');

    const heroText = document.createElement('h1');
    heroText.classList.add('hero');
    heroText.textContent = "F&M Kitchen";
    
    const kitchenDescript = document.createElement('p');
    kitchenDescript.classList.add('kitchen-descript');
    kitchenDescript.textContent = "Welcome 'Fox and Marmot' Kitchen, one of the top gluten-free restaurants in NYC. Come dine with us or order take-out for a delicious meal to go.";

    main.append(heroText, kitchenDescript);
    content.appendChild(main);


    content.className = 'home-background';

};

export default homePageLoad;
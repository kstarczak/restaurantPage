const mainPageLoad = function() {
    const content = document.querySelector('#content');
    
    const heroText = document.createElement('h1');
    heroText.classList.add('hero');
    heroText.textContent = "F&M Kitchen";
    
    const kitchenDescript = document.createElement('p');
    kitchenDescript.classList.add('kitchenDescript');
    kitchenDescript.textContent = "Welcome 'Fox and Marmot' Kitchen, one of the top gluten-free restaurants in NYC. Come dine with us or order take-out for a delicious meal to go.";

    content.append(heroText, kitchenDescript);

};

export default mainPageLoad;
const menuPageLoad = function() {

    const content = document.querySelector('#content');
    
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Menu';
    
    const mainCourses= document.createElement('h2');
    mainCourses.classList.add('main-courses');
    mainCourses.textContent = 'Main Courses';

    const marmotMeatballs = document.createElement('div');
    marmotMeatballs.classList.add('dish');
    marmotMeatballs.id = 'marmot-meatballs';
    marmotMeatballs.textContent = 'Marmot meatballs!';

    const foxFriedRice = document.createElement('div');
    foxFriedRice.classList.add('dish');
    foxFriedRice.id = 'fox-fried-rice';
    foxFriedRice.textContent = 'Fox Fried Rice!';
    
    mainCourses.append(marmotMeatballs, foxFriedRice);


    const sides = document.createElement('h2');
    sides.classList.add('sides');
    sides.textContent = 'Sides';


    const rabbitFood = document.createElement('div');
    rabbitFood.classList.add('dish');
    rabbitFood.id = 'rabbit-food';
    rabbitFood.textContent = 'Rabbit Food!';

    const kittyCrisps = document.createElement('div');
    kittyCrisps.classList.add('dish');
    kittyCrisps.id = 'kitty-crisps';
    kittyCrisps.textContent = 'KittyCrisps!';

    sides.append(rabbitFood, kittyCrisps);

    content.append(menuHeader, mainCourses, sides);

    content.className = 'menu-background';

};

export default menuPageLoad;
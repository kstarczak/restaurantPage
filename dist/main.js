(()=>{"use strict";function t(t){!function(){const t=document.querySelector("#content");for(;t.firstChild;)t.removeChild(t.lastChild)}(),function(t){const e=document.querySelector("#content"),n=document.createElement("header");n.classList.add("header");const c=document.createElement("nav");c.classList.add("nav-bar"),document.createElement("div");const o=document.createElement("a");o.classList.add("nav-link"),o.id="home",o.textContent="Home";const a=document.createElement("a");a.classList.add("nav-link"),a.id="menu",a.textContent="Menu";const d=document.createElement("a");d.classList.add("nav-link"),d.id="contact",d.textContent="Contact",c.append(o,a,d),n.appendChild(c),e.appendChild(n)}(),"home"===t?function(){const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("main");const n=document.createElement("h1");n.classList.add("hero"),n.textContent="F&M Kitchen";const c=document.createElement("p");c.classList.add("kitchen-descript"),c.textContent="Welcome 'Fox and Marmot' Kitchen, one of the top gluten-free restaurants in NYC. Come dine with us or order take-out for a delicious meal to go.",e.append(n,c),t.appendChild(e),t.className="home-background"}():"menu"===t?function(){const t=document.querySelector("#content"),e=document.createElement("h1");e.classList.add("menu-header"),e.textContent="Menu";const n=document.createElement("h2");n.classList.add("main-courses"),n.textContent="Main Courses";const c=document.createElement("div");c.classList.add("dish"),c.id="marmot-meatballs",c.textContent="Marmot meatballs!";const o=document.createElement("div");o.classList.add("dish"),o.id="fox-fried-rice",o.textContent="Fox Fried Rice!",n.append(c,o);const a=document.createElement("h2");a.classList.add("sides"),a.textContent="Sides";const d=document.createElement("div");d.classList.add("dish"),d.id="rabbit-food",d.textContent="Rabbit Food!";const s=document.createElement("div");s.classList.add("dish"),s.id="kitty-crisps",s.textContent="KittyCrisps!",a.append(d,s),t.append(e,n,a),t.className="menu-background"}():"contact"===t?function(){const t=document.querySelector("#content"),e=document.createElement("h1");e.classList.add("contact-us"),e.textContent="Contact";const n=document.createElement("p");n.classList.add("contact-info"),n.textContent="Call 555-555-5555 to make a reservation of place and order for takeout!",t.append(e,n),t.className="contact-background"}():alert("error: Page not defined!"),document.getElementById(`${t}`).classList.add("selected"),document.querySelectorAll(".nav-link").forEach(e)}function e(e){e.classList.contains("selected")||e.addEventListener("click",(e=>t(`${e.target.id}`)))}t("home")})();
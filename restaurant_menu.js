const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

let bfmenu = '';
breakfastMenu.forEach((item, i) => {
bfmenu += `<p>Item ${i+1} : ${item}</p>`
document.getElementById('breakfastMenuItems').innerHTML = bfmenu;
})

let mcmenu = '';
mainCourseMenu.map((item, i) => {
    mcmenu += `<p>Item ${i + 1} : ${item} </p>`
    document.getElementById("maincourseMenuItems").innerHTML = mcmenu;
})

let dmenu = '';
for(let i = 0; i < dessertMenu.length; i++) {
    dmenu += `<p>Item ${i+1} : ${dessertMenu[i]}`;
    document.getElementById('dessertMenuItems').innerHTML = dmenu;
}


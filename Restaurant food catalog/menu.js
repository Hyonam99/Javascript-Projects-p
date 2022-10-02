const menu = [
  {
    id:1,
    title:'Bread and milk',
    category:'Breakfast',
    price:200,
    img: './images/image-3.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:2,
    title:'Rice and Beans',
    category:'Lunch',
    price:600,
    img: './images/image-2.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:3,
    title:'Pancakes',
    category:'Dessert',
    price:1000,
    img: './images/image-4.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:4,
    title:'Tea and Biscuits',
    category:'Breakfast',
    price:200,
    img: './images/image-3.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:5,
    title:'Spaghetti',
    category:'Lunch',
    price:600,
    img: './images/image-2.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:6,
    title:'Chocolate Cookies',
    category:'Dessert',
    price:1000,
    img: './images/image-4.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:7,
    title:'Cereal and flakes',
    category:'Breakfast',
    price:200,
    img: './images/image-3.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:8,
    title:'Eba and egusi soup',
    category:'Lunch',
    price:600,
    img: './images/image-2.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  {
    id:9,
    title:'Pizza',
    category:'Dessert',
    price:1000,
    img: './images/image-4.jpg',
    desc:`'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut eum molestias consequatur autem, consectetur dolore debitis 
    hic dignissimos saepe labore natus facilis, animi eius a provident 
    blanditiis excepturi, quis nam?`
  },
  
];

let center = document.querySelector('.center');
const filterBtn = document.querySelectorAll('.filter-button');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu)
})

filterBtn.forEach(function(btn){
  btn.addEventListener('click', function(x){
    const category = x.currentTarget.dataset.id;
    let foodType = document.querySelector('.food-category');
    const menuCategory = menu.filter(function(menuItem){
      // console.log(menuItem.category)
      if(menuItem.category === category){
        foodType.innerHTML = menuItem.category;
        return menuItem
      }
    })
    if(category === 'all'){
      displayMenuItems(menu)
      foodType.innerHTML = '';
    }else {
      displayMenuItems(menuCategory)
    }
  })
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map((foodItem) => {
    return `<section class="menu">
    <div class="food-image">
      <img src="${foodItem.img}" alt="${foodItem.title}">
    </div>
    <article class="menu-description">
       <h4>${foodItem.title}<span class="price"> ${foodItem.price}</span></h4>
       <aside>
        <p>${foodItem.desc}</p>
       </aside>
    </article>
    </section>`;
      })
      displayMenu = displayMenu.join('')
      // console.log(displayMenu);
      center.innerHTML = displayMenu;
}
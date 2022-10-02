const clients = [
  {
    id: 1,
    name : 'Bassey Victor',
    job:'Web Developer',
    img: `https://images.unsplash.com/photo-1597779545673-5255fd91459d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    comment: `Taking out time to use this platform gave me a 
    refreshing experience during my vacation`
  },
  {
    id: 1,
    name : 'Rose Emeniche',
    job:'Financial analyst',
    img: `https://images.unsplash.com/flagged/photo-1558990397-489e8f26f88c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    comment: `Give the world the best you have and you'll get kicked in the teeth.
    Give the world the best you have anyway`
  },
  {
    id: 1,
    name : 'Paul Enech',
    job:'Interior decor',
    img: `https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    comment: `So be sure when you step, Step with care and great tact. 
    And remember that life's A Great Balancing Act. 
    And will you succeed? Yes! You will, indeed!`
  },
  {
    id: 1,
    name : 'Florence Xavier',
    job:'Fashion Designer',
    img: `https://images.unsplash.com/photo-1583994009785-37ec30bf9342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    comment: `Taking out time to use this platform gave me a 
    refreshing experience during my vacation`
  },
]

const img = document.querySelector('.profile-image');
const job = document.querySelector('.client-job-title');
const customer = document.querySelector('.client-name');
const comment = document.querySelector('.comments');

const prevButton = document.querySelector('.fa-chevron-left');
const nextButton = document.querySelector('.fa-chevron-right');

let currentReview = 0;

window.addEventListener('DOMContentLoaded', function(){
  change(currentReview)
})

function change(person){
  let review = clients[person];
  img.src = review.img
  customer.textContent = review.name
  job.textContent = review.job
  comment.textContent = review.comment
}

prevButton.addEventListener('click', function(){
  currentReview--
  if(currentReview < 0){
    currentReview = clients.length - 1;
  }
  change(currentReview)
})
nextButton.addEventListener('click', function(){
  currentReview++
  if(currentReview > clients.length - 1){
    currentReview = 0;
  }
  change(currentReview)
})
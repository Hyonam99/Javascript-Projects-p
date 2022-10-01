let counter = 0;
let displayCount = document.querySelector('.counter-number');
let btns = document.querySelectorAll('.btn');
btns.forEach((bItem) =>{
bItem.addEventListener('click', function(b){
  let pattern = b.currentTarget.classList
  if(pattern.contains('decrease')){
    counter--;
    displayCount.style.color = 'red'
  }else if(pattern.contains('increase')){
    counter++;
    displayCount.style.color = 'green'
  }else{
    counter = 0;
    displayCount.style.color = '#ffe4c4'
  }
    displayCount.textContent = counter
})

})
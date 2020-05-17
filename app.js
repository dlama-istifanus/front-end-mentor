
var menu = document.querySelector('.fa-bars'),
    cancel = document.querySelector('.fa-times'),
    links = document.querySelector('.menu');
menu.addEventListener('click', function(){
    links.style.display = 'block'
    menu.style.display = 'none'
    cancel.style.display = 'block'
})

cancel.addEventListener('click', function(){
    links.style.display = 'none'
    menu.style.display = 'block'
    cancel.style.display = 'none'
})

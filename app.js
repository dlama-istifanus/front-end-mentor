
var menu = document.querySelector('.fa-bars'),
    cancel = document.querySelector('.fa-times')
menu.addEventListener('click', function(){
    var links = document.querySelector('.menu');
    links.style.display = 'block'
    menu.style.display = 'none'
    cancel.style.display = 'block'
})

cancel.addEventListener('click', function(){
    var links = document.querySelector('.menu');
    links.style.display = 'none'
    menu.style.display = 'block'
    cancel.style.display = 'none'
})

const { link } = require("fs");

var burger = document.getElementById('burger');
var nav = document.getElementById('nav');
burger.addEventListener('click', function(){
    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden')
    }else{
        nav.classList.add('hidden')
    }
});

var links = document.querySelectorAll('li a');
for (const link of links){
link.addEventListener('click', (e)=>{
    e.preventDefault();
    var href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
  href.scrollIntoView({behavior:"smooth"});
   /* scroll({
      top: offsetTop,
      behavior: "smooth"
    })*/
})
}

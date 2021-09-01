var like = 2

var click = document.querySelectorAll(".post__like__img")
var numLike = document.querySelector('#numLike')


click.forEach((clicked) => {
 clicked.addEventListener('click', function(event){
  const counterEl=event.target.parentElement.querySelector('.number-like')
  const counter = +counterEl.textContent;
   if (like > 1) {
     clicked.src="images/mainContent/like-fielld.svg"
    //  numLike.innerHTML ='22'
     counterEl.textContent = counter -1;
     like--
   } else  {
     clicked.src="images/mainContent/like.svg"
    //  numLike.innerHTML = '23'
    counterEl.textContent = counter +1;
       like++
  }
 })
})



function create(words) {
   words.forEach(element => {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = element
      newP.style.display = 'none'

      newDiv.appendChild(newP)
      document.getElementById('content').appendChild(newDiv)

      newDiv.addEventListener('click', reveal)
   });

   function reveal(e) {
      e.target.children[0].style.display = 'block'
   }


}
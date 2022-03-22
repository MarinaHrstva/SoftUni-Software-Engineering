function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   let output = document.getElementsByTagName('textarea')[0];
   const cart = [];


   function onClick(e) {
      if (e.target.tagName == 'BUTTON' && e.target.classList.contains('add-product')) {
         let product = e.target.parentNode.parentNode;
         let name = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         })
         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`

      }

   }

   function checkout() {
      const products = new Set();
      cart.forEach(p => products.add(p.name));

      const total = cart.reduce((t, c) => t + c.price, 0)
      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
   }

}
let products_output = document.querySelector('.container_output');
let products_output2 = document.querySelector('.container_output2');
let list = JSON.parse(localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : [];
// list of default products
let displayProducts =[
    {
        image:'https://i.postimg.cc/q7mHkVNm/coming-soon3.jpg',
    },
    {
        image:'https://i.postimg.cc/q7KXy7Zt/shoe10.jpg',
    },
    {
        image:'https://i.postimg.cc/XYGw6JW2/shoe6.jpg',
    },
    {
      image:'https://i.postimg.cc/BQ5t51Fp/nike-air-something.jpg',
  },
  {
      image:'https://i.postimg.cc/JhzSY6pj/shoe5.jpg',
  },
]

// The default products
displayProducts.forEach(run => {
   products_output.innerHTML+=`
   <div class="card" width="300px">
   <img src="${run.image}" class="card-img-top" alt="..." style=" object-fit:contain;
   aspect-ratio: 3/2;">
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <button class="add_TO_CART">add to cart</button>
   </div>
 </div>

   ` 
});
//Products from the local storage
list.forEach(run => {
  products_output2.innerHTML+=`
<div class="card" width="300px">
<img src="${run.image}" cla.ss="card-img-top" alt="..." style=" object-fit:contain;
aspect-ratio: 3/2;">
<div class="card-body">
  <h5 class="card-title">${run.title}</h5>
  <p class="card-text">${run.description}</p>
  <p class="card-text"><b>R${run.price}</b><p>
  <button class="add_TO_CART">add to cart</button>
</div>
</div>
  ` 
});
 
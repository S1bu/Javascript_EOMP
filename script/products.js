let products_output = document.querySelector('.container_output');
let products_output2 = document.querySelector('.container_output2');
let totalOutcome = document.querySelector('.total') //targeting total amount output
let cartStuff = document.querySelector('.cart-item') //targeting cart output
let list = JSON.parse(localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : [];
let totalList = JSON.parse(localStorage.getItem('calculation')) ? JSON.parse(localStorage.getItem('calculation')) : [];
let cartList = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];;
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
     <button class="add_TO_CART" >add to cart</button>
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
  <p>${run.id}</p>
  <h5 class="card-title">${run.title}</h5>
  <p class="card-text">${run.description}</p>
  <p class="card-text"><b>R${run.price}</b><p>
  <button class="add_TO_CART" onclick="total()">add to cart</button>
</div>
</div>
  ` 
});
 
// cALCULATION OF TOTAL PRICE
function total(){
 
  let idAdd = parseInt(prompt('Please confirm'));  //input id
  let  = newTarget= list.find(function(locate){
     return locate.id == idAdd;
  })

 
  let index = list.indexOf(newTarget).price 
  // totalList.push(index)
  
  totalList.push(parseInt(newTarget.price))  //pushing the prices

  // console.log(sum);
  localStorage.setItem('calculation',JSON.stringify(totalList) ) //send to storage
 
 
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
 
} 
function displayTotal() {
  let sum = 0;
  //the calculation
  totalList.forEach(n=> sum += n)
//output
 
  totalOutcome.innerHTML=`
  Total = ${sum}
  `
  
  console.log(totalList);
}
document.onload = displayTotal();

// CLEAR THE TOTAL LIST
function clearlIST(){
let totalList=[]
let cartList =[]
  localStorage.setItem('calculation',JSON.stringify(totalList)) //send to storage
  localStorage.setItem('cart',JSON.stringify(cartList)) //send to storage
  location.reload(); //reloads the page
// checkoutItems()
}
 
// // Checkout item
// function checkoutItems(){
//   let index2 = list.indexOf(newTarget)
//   cartList.push(index)  //pushing the cart details cartList
//   localStorage.setItem('cart',JSON.stringify(cartList)) //send to storage
// //  cart-item
// console.log(cartList);
// }

//FILTER PRODUCTS
// document.querySelector('.input').addEventListener('input',filterList);

// function filterList() {
//     const searchInput = document.querySelector('.input'); //takes the input     <------input
//     const filter = searchInput.value.toLowerCase();  //change the input value to lowercase  ---((process))----
//     const products_output2  = document.querySelectorAll('.product'); //targets the output class ------>ouput

//    products_output2.forEach((item) =>{
//         let text = item.textContent;

//         if(text.toLowerCase().includes(filter.toLowerCase())){
//             item.style.display = '';
//         }
//         else{
//             item.style.display = 'none';
//         }
//     });
// }
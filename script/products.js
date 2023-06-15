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
  <button type="button" class="add_TO_CART" id="totalCalculate" onclick="total()">add to cart</button>
</div>
</div>
  ` 
});

//---------------------------------------
//FUNCTION FOR cALCULATION OF TOTAL PRICE
//---------------------------------------
 
function total(){
 
  let idAdd = parseInt(prompt('insert product number'));  //input id
  let  = newTarget= list.find(function(locate){
     return locate.id == idAdd;
  })

 
  let index = list.indexOf(newTarget).price 
  // totalList.push(index)
  
  totalList.push(parseInt(newTarget.price))  //pushing the prices

  // console.log(sum);
  localStorage.setItem('calculation',JSON.stringify(totalList) ) //send to storage
  
 
  let sumOfArray = totalList.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sumOfArray); // Output: 100
  // console.log(totalList);

   totalOutcome.innerHTML=`
  Total = ${sumOfArray}
  `
  alert('Item added')
}

//---------------------------------------
//FUNCTION FOR DISPLAYING THE TOTAL VALUE
//---------------------------------------
function totalDisplay() {
  let sumOfArray = totalList.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sumOfArray); // Output: 100

   totalOutcome.innerHTML=`
  Total = ${sumOfArray}
  `
}
totalDisplay()
 
//----------------------------------------------- 
 
//---------------------------------
//FUNCTION TO  CLEAR THE TOTAL LIST
//-----------------------------------
let clear_list = document.querySelector('#clear_list').addEventListener('click',clearlIST)

function clearlIST(){
let totalList=[] //empty the totallist
let cartList =[] //empty the cartList
  localStorage.setItem('calculation',JSON.stringify(totalList)) //send to storage
  localStorage.setItem('cart',JSON.stringify(cartList)) //send to storage
  location.reload(); //reloads the page
 
}
//---------------------------------------

//--------------------------
// FILTER PRODUCTS FUNCTION
//--------------------------
let input = document.querySelector('.input').addEventListener('input',filterList);

function filterList() {
    const searchInput = document.querySelector('.input'); //takes the input     <------input
    const filter = searchInput.value.toLowerCase();  //change the input value to lowercase  ---((process))----
    const products_output2  = document.querySelectorAll('.product'); //targets the output class ------>ouput

   products_output2.forEach((item) =>{
        let text = item.textContent;

        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';  //removes the display
        }
    });
}
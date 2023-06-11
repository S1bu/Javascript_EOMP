let products_output = document.querySelector('.container_output');
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
   
]

displayProducts.forEach(run => {
   products_output.innerHTML+=`
   <div class="col-4 text-center" class="displayProducts" style="border:1px solid black;">
                  <div class="card">
                    <img src="${run.image}" class="card-img-top" alt="..." style=" object-fit:contain;
                    aspect-ratio: 3/2;">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button style="background-color:#3F3D3D;
                      color: white;
                      font-weight: 900;
                      width: 40%;
                      border: 1px solid black;
                      margin: 4px;padding:10px">add to cart</button>
                    </div>
                  </div>
                </div>
                <br>
   ` 
});
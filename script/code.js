let list =[]; //our list
let title = document.querySelector('.title'); //get title
let price = document.querySelector('.price'); //get price
let description = document.querySelector('.description'); //get description
let image = document.querySelector('.image'); //get image
let output = document.querySelector('.table_row')

  
window.onload = function() {
    display()
  };

//target .addEvenlistener("load",display())
 
// DISPLAY PRODUCTS
function display(){
    JSON.parse(localStorage.getItem('product'))
     list.forEach(display => {
        output.innerHTML+=`
            <tr>
                <td class="td">${display.title}</td>
                <td class="td">${display.price}</td>
                <td class="td">${display.description}</td>
                <td class="td"><img src="${display.image}"></td>
                <td class="td"><i class="bi bi-pencil"></i></td> <!---edit product-->
                <td class="td"><i class="bi bi-trash"></i></td> <!---delete product-->
            </tr>    
        `
     });
}
// output.addEventListener("load", display());
// output.onload = function() {
//     display();
// };
 

// ADD PRODUCTS
function addProduct(){
    //prevent page default
    event.preventDefault(); 
    // push this details as an object into the array called list
    list.push( {
        title:title.value,
        price:price.value,
        description:description.value,
        image:image.value
    })
// store list on local storage 
    localStorage.setItem('product',JSON.stringify(list) )
//  auto display item
  display()
}

// let list =[]; //our list
let title = document.querySelector('.title'); //get title
let price = document.querySelector('.price'); //get price
let description = document.querySelector('.description'); //get description
let image = document.querySelector('.image'); //get image
let output = document.querySelector('.table_row') // targettting the table_row clss
let list = JSON.parse(localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : [];
let id = list[list.length-1] ? list[list.length-1].id +1 : 1;

// DISPLAY PRODUCTS
function display(){
    JSON.parse(localStorage.getItem('id'))
     list.forEach(display => {
        output.innerHTML+=`
                <td class="td" >${display.id}</td>
                <td class="td">${display.title}</td>
                <td class="td">R ${display.price}</td>
                <td class="td">${display.description}</td>
                <td class="td"><img src="${display.image}"></td>
                <td class="td"><i class="bi bi-pencil"></i></td> <!---edit product-->
                <td class="td"><i class="bi bi-trash"></i></td> <!---delete product-->
           
        `
     });
   
     
}
 document.onload = display(); 
 

// ADD PRODUCTS
function addProduct(){
    //prevent page default
    event.preventDefault(); 
    // push this details as an object into the array called list
    list.push( {
        id:id++,
        title:title.value,
        price:price.value,
        description:description.value,
        image:image.value
    })
    // id++;
// store list on local storage 
    localStorage.setItem('id',JSON.stringify(list) )
 
location.reload(); //reloads the page
}
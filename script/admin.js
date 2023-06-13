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
                <td class="td"><img src="${display.image}"style=" object-fit:contain;
                aspect-ratio: 3/3;"></td>
                <td class="td"><button  data-bs-toggle="modal" data-bs-target="#editTarget">edit</button></td> <!---edit product-->
                <td class="td"><button onclick="removeBtn()">del</button></td> <!---delete product-->
        `
     });
   
     list.sort()
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


//REMOVE PRODUCT
function removeBtn() {
   let idDel = parseInt(prompt('Please confirm by inputing the id number of the product u wish to delete'));  //input id
 
const index = list.findindex(item.id === idDel);
list.splice(index , 1)
console.log(list)
}

 

 

// // Usage example
// deleteData("123"); // Delete data with identifier "123"
 
  
//   console.log(firstExample)//display full data again


 
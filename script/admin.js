// DOM  FOR INPUTS AND OUTPUTS
let title = document.querySelector('.title'); //get title
let brand = document.querySelector('.brand'); //get title
let price = document.querySelector('.price'); //get price
let description = document.querySelector('.description'); //get description
let image = document.querySelector('.image'); //get image
let output = document.querySelector('.table_row') // targettting the table_row clss
let list = JSON.parse(localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : []; //get items from storage 
let id = list[list.length-1] ? list[list.length-1].id +1 : 1; //give id numbers to the products i add

 

//------------------------------
//FUNCTION FOR DISPLAY PRODUCTS
//-----------------------------
function display(){
    JSON.parse(localStorage.getItem('id'))
     list.forEach(display => {
        output.innerHTML+=`
                <tr>
                <td class="td" >${display.id}</td>
                <td class="td" class="product" >${display.brand}</td>
                <td class="td">${display.title}</td>
                <td class="td">R ${display.price}</td>
                <td class="td">${display.description}</td>
                <td class="td"><img src="${display.image}"style=" object-fit:contain;
                aspect-ratio: 3/2;"></td>
                </tr>
        `
     });
   
}
//----------------------------------

 document.onload = display(); 
//--------------------------
//FUNCTION FOR ADD ITEM
//-------------------------
 let add_item =document.querySelector('#add_item').addEventListener("click" , addProduct)
function addProduct(){  
    event.preventDefault();   //prevent page default
    list.push( {      // push this details as an object into the array called list
        id:id++,
        title:title.value,
        brand:brand.value,
        price:price.value,
        description:description.value,
        image:image.value
    })
    localStorage.setItem('id',JSON.stringify(list) ) // store list on local storage 
    location.reload(); //reloads the page
}
//------------------------------


//-------------------------
//FUNCTION FOR REMOVE ITEM
//-------------------------
 
let delete_admin_product = document.querySelector("#delete_admin").addEventListener("click", removeBtn )
function removeBtn() { //REMOVE PRODUCT FUNCITON

 
    let idDel = parseInt(prompt('Please confirm by inputing the id number of the product u wish to delete'));  //input id

 
if(idDel === ''){

alert('Please insert id of item you wish to remove')

}
else{
   
    let target = list.find(function(locate){
        return locate.id == idDel;
     })
     
    let index = list.indexOf(target)
    list.splice(index,1) //splicing the targeted index
    localStorage.setItem('id',JSON.stringify(list) ) //send to storage
    location.reload(); //reloads the page
}

}

//-------------------------
//FUNCTION EDIT ITEMS
//-------------------------

let edit_admin = document.querySelector('#edit_admin').addEventListener('click', editItem)
function editItem(){
    function editItem(){
        // this.id = object.id //gets the id
        // this.title = document.querySelector('.title').value, //gets the new value from edit modal
        // this.brand = document.querySelector('.brand').value,
        // this.description = document.querySelector('.description').value
        // this.price = document.querySelector('.price').value
        // this.image = document.querySelector('.image').value
    
    
        // list[index] = Object.assign({},this) //assigning
        // functiondisplay()
        alert('it workes')
    }
}


 
// btn.addEventListener("click", greet);

// btn ---> target that must be clicked

// "click"  --> action that must take place
 
// greet ---> function that must take action
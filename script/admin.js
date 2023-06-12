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
                <td class="td"><button>edit</button></td> <!---edit product-->
                <td class="td"><button onclick="removeBtn()">del</button></td> <!---delete product-->
           
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


//REMOVE PRODUCT
function removeBtn() {
   let idDel = parseInt(prompt('Please confirm by inputing the id number of the product u wish to delete'));  //input id
    // let index = list.length - (list.length - idDel);    //calculating the index
    list.splice( index, 1) //delete
    // localStorage.setItem('id',JSON.stringify(list) )
 console.log(list)
// store list on local storage 
// location.reload(); //reloads the page
}


// function deleteBook() {
//   const bookId = prompt("Enter book ID:");
  
//   const bookIndex = books.findIndex(book => book.bookId === bookId);
  
//   if (bookIndex !== -1) {
//     books.splice(bookIndex, 1);
//     console.log("Book deleted successfully!");
//   } else {
//     console.log("Book not found!");
//   }
// }


/**
 * let books = []; // Array to store books

function createBook() {
  const bookId = prompt("Enter book ID:");
  const title = prompt("Enter book title:");
  const author = prompt("Enter book author:");
  
  const book = { bookId, title, author };
  books.push(book);
  
  console.log("Book created successfully!");
}

function readBook() {
  const bookId = prompt("Enter book ID:");
  
  const book = books.find(book => book.bookId === bookId);
  
  if (book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
  } else {
    console.log("Book not found!");
  }
}

function updateBook() {
  const bookId = prompt("Enter book ID:");
  
  const bookIndex = books.findIndex(book => book.bookId === bookId);
  
  if (bookIndex !== -1) {
    const title = prompt("Enter new title (leave empty to keep the existing title):");
    const author = prompt("Enter new author (leave empty to keep the existing author):");
    
    if (title) {
      books[bookIndex].title = title;
    }
    if (author) {
      books[bookIndex].author = author;
    }
    
    console.log("Book updated successfully!");
  } else {
    console.log("Book not found!");
  }
}


// Main program loop
while (true) {
  const choice = prompt("Choose an operation: 1. Create, 2. Read, 3. Update, 4. Delete, 5. Exit");
  
  switch (choice) {
    case "1":
      createBook();
      break;
    case "2":
      readBook();
      break;
    case "3":
      updateBook();
      break;
    case "4":
      deleteBook();
      break;
    case "5":
      console.log("Exiting program.");
      return;
    default:
      console.log("Invalid choice. Please try again.");
  }
}
 * 
 */



// DELETE FROM CRUD --CHATGPT

// Example of a simple CRUD system with an array as the data store
// let dataStore = [];

// // Delete operation
// function deleteData(identifier) {
//   const index = dataStore.findIndex(item => item.id === identifier);
  
//   if (index !== -1) {
//     dataStore.splice(index, 1);
//     console.log("Data deleted successfully!");
//   } else {
//     console.log("Data not found!");
//   }
// }

// // Usage example
// deleteData("123"); // Delete data with identifier "123"


//UPDATE FROM CRUD
// Example of a simple CRUD system with an array as the data store
// let dataStore = [];

// // Update operation
// function updateData(identifier, newData) {
//   const index = dataStore.findIndex(item => item.id === identifier);
  
//   if (index !== -1) {
//     dataStore[index] = { ...dataStore[index], ...newData };
//     console.log("Data updated successfully!");
//   } else {
//     console.log("Data not found!");
//   }
// }

// // Usage example
// const newData = { name: "John Doe", age: 30 };
// updateData("123", newData); // Update data with identifier "123" using new data


// let firstExample = [
//   {
//   id:1,
//   name:'Sibusiso'
//   },
//   {
//   id:2,
//   name:'Taflynne'
//   },
//   {
//   id:3,
//   name:'Kgodisho'
//   },
//   {
//   id:4,
//   name:'Rabia'
//   },
//   {
//   id:5,
//   name:'Amy'
//   },
//   ];
  
  
  
//   let num = parseInt(prompt('Enter your wish to find'));
//   let newName =prompt(`name`);
  
//   function findIndex(index){ //my find the index function
//     return index.id === num;  //looking
//   }
//   console.log(firstExample) //display full data
  
//   let target = firstExample.find(findIndex); //display everything of that object
  
//   // firstExample.push(target);
//   // firstExample[firstExample.length + 1] = target;
//   // let editName = prompt('name enter')
//   function edit(name){
    
//     this.name = name;
//   }
  
//   target = new edit(`${name}`)
  
//   console.log(firstExample)//display full data again
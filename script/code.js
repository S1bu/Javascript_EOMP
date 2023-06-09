
let defaultList = [{
    image:'https://i.postimg.cc/13JjF0yX/shoe16.jpg'
},
{
    image:'https://i.postimg.cc/q7mHkVNm/coming-soon3.jpg'
},
{
    image:'https://i.postimg.cc/ZKz2zKfb/shoe14.jpg'
}
];
let defaultDisplay = document.querySelector('.container_output');
function defaultDisplays(){
// defaultList.forEach(run => {
    defaultDisplay.innerHTML=`
    ${defaultList.image}
    `
    
    
;
 
}
 

// defaultDisplay.innerHTML +=
   
//           <img src="${run.image}" class="card-img-top" alt="">
const dataCards =[
    {id: 0, Image: "assets/1-daenerys-rose-gold-21st-century-golden-color-marclex-women-original-imagjud8gqmafjke.webp", title: "Rose-gold", price: 200, rating: "4.3"},
    {id: 1, Image: "assets/20-great-ladies-watches-buy-2019-iconic-luxury-watch-Bulgari-Serpenti-Omega-Constellation-Rolex-Datejust-top-womens-watches-prices-SP-3.webp", title: "Luxary-watche", price: 500, rating: "5.4"},

    {id: 2, Image: "assets/81YJncclkDL._SL1500_.jpg", title: "staylesh-watch", price: 750, rating: "3.6"},

    {id: 3, Image: "assets/e534cf64-eb40-495e-a44f-4d6d31cced0c1605623766871-Daniel-Klein-Premium-Women-Silver-Toned-Dial-Watch-DK11138-2-1.webp", title: "Women-silver-watch", price: 600, rating: "5.5"},

    {id: 4, Image: "assets/images(1).jfif", title: "Watch", price: 650, rating: "4.8"},

    {id: 5, Image: "assets/shopping(1).webp", title: "Ladies-stylish-watch", price: 390, rating: "4.4"},

    {id: 6, Image: "assets/shopping(2).webp", title: "Stylish", price: 499, rating: "5.5"},

    {id: 7, Image: "assets/shopping(3).webp", title: "Indian-watch", price: 450, rating: "3.4"},

    {id: 8, Image: "assets/shopping.webp", title: "Denerys-watch", price: 399, rating: "4.6"},

];
let data = "";
dataCards.map(function ecommersdata(watches){
    data += `
    <div class="col-lg-4  cardsdata">
    <img src=${watches.Image} alt="">
    <h4>${watches.title}</h4>
    <h6>${watches.price}</h6>
    <P>${watches.rating}</P>
    <i class="fa fa-star"></i>
    <button onclick="addtocart(${watches.id})">add to cart</button>
   </div>
    `
    document.querySelector(".ecommersdata").innerHTML =data;
});

const cartCards = [];


// cart function
function  cartIcon(){
    document.querySelector(".datacards").classList.toggle("datacards-active");
    if(cartcards.length === 0){
        document.querySelector("items").innerHTML = `<img src="/assets/shopping(1).webp">`
    }else{
        let datacards = "";
        cartcards.map(function ecommersdata(watches){
            datacards +=`
            <div class="p-3" data-id="${watches.id}">
            <div class=
            `
        })
        
    }
}


// // add to cart
function addtocart(id){
   const findItems = dataCards.find(function findFunction(time){
    return time.id === id;
   });

//    if(findItems){
//     const findIndexMethod = emptyList.findIndex(function indexFunction(time){
//         time.id === id;
//     });
//     if(findIndexMethod !== -1){
//         alert("Time already added in the cart")
//     }
//     else{
//         cartCards.push(findItems) 
      
//     }
//    }
     cartCards.push(findItems) 
     console.log(cartCards);
     document.querySelector(".cartquantity").innerText = cartCards.length;
}


function cartIcon(){
    const cartList = document.querySelector(".cart-list");
    cartList.classList.toggle("cart-list-active");
    let dataCarts = "";
    cartCards.map(function ecommersdata(watches){
    dataCarts += `
    <div class ="cart-item">
    <div class ="cart-img"><img src=${watches.Image} alt=""></div>
    <div class="text">
    <h4>${watches.title}</h4>
    <h6>${watches.price}</h6>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    </div>
 
   </div>
    `
    document.querySelector(".items").innerHTML =dataCarts;
});
}


// // present date
// const date=new Date();
// console.log(date);
// // previous date
// const date1=new Date();
// console.log(new Date("2023-06-29"));
// // time
// const date2=new Date();
// console.log(new Date(2023,6,6,10,15,30,0));
// // year
// const d=new Date();
// const year=d.getFullYear();
// console.log(2023);
// // month
// const month=["jan","feb","mar","april","may","june","july","august","sept","oct","nov","dec"];
// const year1=month[d.getMonth()];
// console.log(year1);
// // set year
// const date5=new Date();
// date5.setFullYear(2021);
// console.log(date5);
//  // set month
// const da5=new Date();
// da5.setMonth(7);
// console.log(da5);
//  // set date
// const da6=new Date();
// da6.setDate(10);
// console.log(da6);
//  // set hours
// const da7=new Date();
// da7.setHours(36);
// console.log(da7);
//  // set time
// const da8=new Date();
// const settime=da8.setTime(10);
// console.log(settime);
// // get hour
// const dat=new Date();
// const hour=d.getHours();
// console.log(hour); 
// // get dates
// const d1=new Date();
// const day=d.getDate();
// console.log(day);
//  // get minutes
// const d2=new Date();
// const minutes=d.getMinutes();
// console.log(minutes); 
// // get seconds
// const d3=new Date();
// const seconds=d.getSeconds();
// console.log(seconds); 
// // millisec
// const d4=new Date();
// const millisec=d.getMilliseconds();
// console.log(millisec); 
// // math methods
// // round methods
//  console.log(Math.round(-3.5));
//  console.log(Math.round(4.3));
//  // ceil methods
//  console.log(Math.ceil(4.2));
//  // floor methods
//  console.log(Math.floor(5.7));
//  // trunc methods
//  console.log(Math.trunk(7.2));
//  // sign methods
//  console.log(Math.sign(3.5));
//  // random
//  console.log(Math.random(-4.2));
//  console.log(Math.floor(Math.random()*10));
 

// //  loops
// // for
// for(let i=0; i<10; i++){
//     console.log(i);
// }
// // while
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// // dowhile
// let x=0;
// do{
//     console.log(x);
//     x++;
// }
// while(x<20);
// // DOM
// const todo=document.querySelector("todo");
// const div=document.createElement("div");
// const ul=document.createElement("ul");
// const li=document.createElement("li");
// const li1=document.createElement("li1");
// li.innerText="home";
// li1.innerText="about-us";
// div.appendChild(li);
// ul.className="unorderlist";
// div.className="division";
// todo.appendChild(div);


const buttonclick=document.querySelector(".add");
const inputField =document.querySelector(".web");
const list=document.querySelector(".development");
buttonclick.addEventListener("click", function btnclick(e){
    e.preventDefault();
    const liList=document.createElement("li");
    const delete1 =document.createElement("button");
    liList.innerText =inputField.value;
    delete1.innerText="delete";
    const complete=
    list.appendChild(liList);
    list.appendChild(delete1)
    inputField.value = "";
})
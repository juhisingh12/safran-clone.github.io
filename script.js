let group1 = document.getElementById("group-main")
console.log(group1);

// let video1 = document.getElementById("video-btn")
// console.log(video1);
let group2 =document.getElementById("group")
console.log(group2);


group1.onmouseover = function(){
    group2.style.display = "block"
    group2.style.transition = "ease all 3s"
    product2.style.display = "none "
    carrer2.style.display = "none"
    finance2.style.display = "none"
    news2.style.display = "none"
} 
group2.onmouseover = function(){ 
    group2.style.display = "block"
    group2.style.transition = "ease all 3s"

}

group2.onmouseleave = function(){ 
    group2.style.display = "none"
    group2.style.transition = "ease all 3s"

} 

// -----------------------------------------------------------------

let product1 = document.getElementById("product")
console.log(group1);

// let video1 = document.getElementById("video-btn")
// console.log(video1);
let product2 =document.getElementById("product-down")
console.log(product2);


product1.onmouseover = function(){
    product2.style.display = "block"
    console.log("hello");
    group2.style.display = "none"
    carrer2.style.display = "none"
    finance2.style.display = "none"
    news2.style.display = "none"
    // product1.style.transition = "ease all 3s"
} 
product2.onmouseover = function(){ 
    product2.style.display = "block"
    product2.style.transition = "ease all 3s"

} 
product2.onmouseleave = function(){ 
    product2.style.display = "none"
    product2.style.transition = "ease all 3s"
} 

// / -----------------------------------------------------------------

let carrer1 = document.getElementById("main-carrer")
console.log(carrer1);

let carrer2 =document.getElementById("carrers")
console.log(carrer2);


carrer1.onmouseover = function(){
    carrer2.style.display = "block"
    product2.style.display = "none"
    finance2.style.display = "none"
    news2.style.display = "none"
} 
carrer2.onmouseover = function(){ 
    carrer2.style.display = "block"
    carrer2.style.transition = "ease all 3s"
}

carrer2.onmouseleave = function(){ 
    carrer2.style.display = "none"
    carrer2.style.transition = "ease all 3s"
} 

// --------------------------------------------------------

let finance1 = document.getElementById("main-finance")
console.log(finance1);

let finance2 =document.getElementById("finance")
console.log(finance2);


finance1.onmouseover = function(){
    finance2.style.display = "block"
    product2.style.display = "none"
    news2.style.display = "none"
} 
finance2.onmouseover = function(){ 
    finance2.style.display = "block"
}
finance2.onmouseleave = function(){ 
    finance2.style.display = "none"
} 


// ------------------------------------------------

let news1 = document.getElementById("main-news")
console.log(news1);

let news2 =document.getElementById("news")
console.log(news2);


news1.onmouseover = function(){
    news2.style.display = "block"
    finance2.style.display = "none"
} 
news2.onmouseover = function(){ 
    news2.style.display = "block"
}
news2.onmouseleave = function(){ 
    news2.style.display = "none"
} 


// --------------------------------------------------------

// ------------------------------------------------

let worldwide1 = document.getElementById("nav1")
console.log(worldwide1);

let worldwide2 =document.getElementById("worldwide")
console.log(worldwide2);


worldwide1.onmouseover = function(){
    worldwide2.style.display = "block"
    company2.style.display = "none"
    graphics2.style.display = "none"
} 
worldwide2.onmouseover = function(){ 
    worldwide2.style.display = "block"
}
worldwide2.onmouseleave = function(){ 
    worldwide2.style.display = "none"
} 


// ------------------------------------------------

let company1 = document.getElementById("main-company")
console.log(company1);

let company2 =document.getElementById("company")
console.log(company2);


company1.onmouseover = function(){
    company2.style.display = "block"
    worldwide2.style.display = "none"
    graphics2.style.display = "none"
} 
company2.onmouseover = function(){ 
    company2.style.display = "block"
}
company2.onmouseleave = function(){ 
    company2.style.display = "none"
} 


// ------------------------------------------------

let graphics1 = document.getElementById("main-graphic")
console.log(graphics1);

let graphics2 =document.getElementById("graphics")
console.log(graphics2);


graphics1.onmouseover = function(){
    graphics2.style.display = "block"
    company2.style.display = "none"
} 
graphics2.onmouseover = function(){ 
    graphics2.style.display = "block"
}
graphics2.onmouseleave = function(){ 
    graphics2.style.display = "none"
} 


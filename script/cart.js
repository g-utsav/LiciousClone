var ranData = JSON.parse(localStorage.getItem("cartData")) || [];

var data = [];

var obj = {};

ranData.map(function(ele){
 
    // console.log(ele)
    if(obj[ele.name]){
        obj[ele.name]["count"]++
    }else{
        ele["count"] = 1;
        obj[ele.name] = ele;
    }
})

for(var key in obj){
    data.push(obj[key])
}
console.log(data)

// console.log(obj,ranData);
displayCart()




function displayCart(){
var cart = document.querySelector(".cart123456")
cart.addEventListener("click",slider);

projectCart = document.querySelector(".cartSlide")

function slider(event){
    projectCart.innerHTML = ""
    var div = document.createElement("div")
    div.setAttribute("class","cartSlider");
    
    var h1div = document.createElement("div")
    // var hdiv = document.createElement("div")
    var h1 = document.createElement("h1")
    h1.setAttribute("id","h1InsideCartSlider")
    h1.innerText = "Order Summary"

    var close = document.createElement("div")
    close.innerHTML="Close"
    close.setAttribute("class","slidingClose")
    close.addEventListener("click",closeCall);

    
    h1div.append(h1,close)

    var cartDiv = document.createElement("div")
    cartDiv.setAttribute("class","cartSliding");



    
// cartShow()
// function cartShow(){

// var cartContainer = document.querySelector(".cartSliding");
// cartDiv.innerHTML = "";
console.log(data)
data.map(function(ele,index){
    var div123 = document.createElement("div")
    div123.setAttribute("id","productDetailsCart")
    
    var product = document.createElement("div")
    product.setAttribute("class","D9999999")
    var itemCart = document.createElement("div")
    itemCart.setAttribute("class","D8888888")

    
    var nameDiv =document.createElement("div")
    nameDiv.innerText = ele.name
    var closeDiv = document.createElement("div")
    closeDiv.innerHTML= "<h3>X</h3>"
    closeDiv.addEventListener("click",reMapData)
    
    var priceCart =document.createElement("div")
    priceCart.innerText = `₹${ele.price}`
    


    var itemAddRemove =document.createElement("div")
    itemAddRemove.setAttribute("class","itemAddRemove")

    var plus =document.createElement("div")
    plus.innerText = "+"
    var min =document.createElement("div")
    min.innerText = "-"
    var itemCount =document.createElement("div")
    itemCount.innerText = ele.count

    itemAddRemove.append(min,itemCount,plus)

    
    console.log(itemCount)
    
    
    
    product.append(nameDiv,closeDiv);
    itemCart.append(priceCart,itemAddRemove)
    div123.append(product,itemCart)
    cartDiv.append(div123)
})
// }






    var endDiv = document.createElement("div")

    var toatalAmount = document.createElement("div")
    toatalAmount.innerText = "Total : "
    var placeOrder = document.createElement("div")
    placeOrder.innerText="Proceed To CheckOut"

    endDiv.append(toatalAmount,placeOrder)
    div.append(h1div,cartDiv,endDiv)
    
    projectCart.append(div)
    projectCart.style.backgroundColor = "rgb(128,128,128,0.5)"
    projectCart.style.width = "100%"
    projectCart.style.height = "100%"
}

}
// var closeButton = document.querySelector(".slidingClose");


function closeCall(){
    // cart.innerHTML = ""
    // cart.style.height = "10%"
    // cart.style.backgroundColor = "none"
    // cart.style.width = "10%"
    // cart.innerHTML = ""
    // window.location.reload()
    projectCart = document.querySelector(".cartSlide")
    projectCart.innerHTML = ""
    projectCart.style.backgroundColor = "none"
    projectCart.style.width = "0px"
    projectCart.style.height = "0px"

}


function reMapData(){
    
}

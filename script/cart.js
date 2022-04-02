
var data = [];


function genData(){
    var ranData = JSON.parse(localStorage.getItem("cartData")) || [];
data = []
var obj = {};
// if(ranData[0])data.push(ranData[0]);;

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

}

genData()

localStorage.setItem("cartData1",JSON.stringify(data))

displayCart(data,false)
console.log(data)

// console.log(obj,ranData);




function displayCart(data,flag){
    // genData()
    var cart = document.querySelector(".cart123456")
    cart.addEventListener("click",slider);
    projectCart = document.querySelector(".cartSlide")


    if(flag){
        var cl = new Event("click");
        cart.dispatchEvent(cl)
    }
    
    function slider(event){
        genData()
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
// console.log(data)
var cc = 0
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
    closeDiv.innerHTML= "<h6>X</h6>"
    closeDiv.addEventListener("click",function(){
        reMapData(index)})
    
    var priceCart =document.createElement("div")
    priceCart.innerText = `₹${ele.price}`
    


    var itemAddRemove =document.createElement("div")
    itemAddRemove.setAttribute("class","itemAddRemove")
    
    var itemCount =document.createElement("div")
    itemCount.innerText = ele.count
    var setid =`theCountOfItems${cc}`
    itemCount.setAttribute("id",setid)

    var plus =document.createElement("div")
    plus.innerText = "+"
    plus.setAttribute("class","incrementTheCount")
    plus.addEventListener("click",function(){
        incriment(ele,index,setid)
    })
    var min =document.createElement("div")
    min.innerText = "-"
    min.setAttribute("class","decrementTheCount")
    min.addEventListener("click",function(){
        decremnet(ele,index,setid)
    })

    itemAddRemove.append(min,itemCount,plus)

    cc++
    //console.log(itemCount)
    
    
    
    product.append(nameDiv,closeDiv);
    itemCart.append(priceCart,itemAddRemove)
    div123.append(product,itemCart)
    cartDiv.append(div123)
})
// }






    var endDiv = document.createElement("div")

    var toatalAmount = document.createElement("div")
    toatalAmount.innerText = "Total : "
    toatalAmount.setAttribute("class","totalPriceToDisplay")
    var placeOrder = document.createElement("div")
    placeOrder.innerText="Proceed To CheckOut"

    endDiv.append(toatalAmount,placeOrder)
    div.append(h1div,cartDiv,endDiv)
    
    projectCart.append(div)
    projectCart.style.backgroundColor = "rgb(128,128,128,0.5)"
    projectCart.style.width = "100%"
    projectCart.style.height = "100%"
    totalPriceToDisplay()
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
    genData()
    displayCart(data,false)
    window.location.reload()


}

data= JSON.parse(localStorage.getItem("cartData"))||[]
function reMapData(index){
    data.splice(index,1)
    localStorage.setItem("cartData",JSON.stringify(data))
    // genData()
    localStorage.setItem("cartData1",JSON.stringify(data))
    displayCart(data,true)
    totalPriceToDisplay()
}

// function incriment(ele){
//     ele["count"]++
//     displayCart(data,true)
//     console.log(ele)
//     // localStorage.setItem("cartData1",JSON.stringify(data))
// }

function incriment(ele,index,cc){
    var inc = document.querySelector(`#${cc}`)
    // var inc = event.target
    // console.log(inc)
    inc.innerText = Number(inc.innerText)+1;
    // ele["count"] = inc.innerText
    var dat = JSON.parse(localStorage.getItem("cartData"))
    dat[index]["count"] = inc.innerText;
    localStorage.setItem("cartData",JSON.stringify(dat))
    localStorage.setItem("cartData1",JSON.stringify(dat))
    totalPriceToDisplay()
}


function decremnet(ele,index,cc){
    var dec = document.querySelector(`#${cc}`)
    // console.log(cc)
    dec.innerText = Number(dec.innerText)-1;
    ele["count"] = dec.innerText
    var dat = JSON.parse(localStorage.getItem("cartData"))
    dat[index]["count"] = dec.innerText;
    localStorage.setItem("cartData",JSON.stringify(dat))
    localStorage.setItem("cartData1",JSON.stringify(dat))
    // console.log(ele,data)
    if(dec.innerText == 0){
        reMapData(index);
    }
    totalPriceToDisplay()
}




// totalPriceToDisplay()
function totalPriceToDisplay(){
    var totalPrice = document.querySelector(".totalPriceToDisplay")
    var dat = JSON.parse(localStorage.getItem("cartData1"))
    var sum = 0
    dat.forEach(function(element){
        // console.log(1+Number(element["count"]))
         sum += Number(element["count"])*Number(element["price"])
    })
    totalPrice.innerText = `Total : ${sum}`
    console.log(sum)

}
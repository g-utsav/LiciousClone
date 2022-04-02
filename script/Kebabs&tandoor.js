var div2Data=[
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3ilucko/34/prod_display_image/1634458823.656--2021-10-1713:50:23--905?format=webp","name":"Afghani Murgh Seekh Kebab","discription":" The classic chicken seekh kebab, marinated in tradition....","netWeight":"Net wt: 4 ","grossWeight":"Pieces: 4","price":"249","strikedOffPrice":"MRP:399","discount":"15%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3im2bid/34/prod_display_image/1634311648.2104--2021-10-1520:57:28--905?format=webp","name":"Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes","discription":"Lucknow's favourite and most delicious kebab, ready in ","netWeight":"Net wt:6","grossWeight":"Pieces: 6","price":"369","strikedOffPrice":"MRP:0","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_fmnkgkvc59i/34/prod_display_image/1634572795.2792--2021-10-1821:29:55--1818?format=webp","name":"Tandoori Chicken | Ready in 8 Minutes","discription":"Tandoori-style chicken marinated in flavourful spices","netWeight":"Net wt: 350gms","grossWeight":"Pieces: 4","price":"249","strikedOffPrice":"MRP: 399","discount":"15%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}];
div2Data.map(function(elem)
{
    var box=document.createElement("div");
    var boxa=document.createElement("div");
    var image=document.createElement("img");
    image.src=elem.image;
    boxa.append(image);
    boxa.setAttribute("class","boxa")

    var boxb=document.createElement("div");
    boxb.setAttribute("class","boxb")
    var boxb1=document.createElement("div");
    var name=document.createElement("p");
    name.innerText=elem.name;
    boxb1.append(name);
    boxb1.setAttribute("class","boxb1")

    var boxb2=document.createElement("div");
    var description=document.createElement("p");
    description.innerText=elem.discription;
    boxb2.append(description);
    boxb2.setAttribute("class","boxb2")

    var boxb3=document.createElement("div");
    var weight=document.createElement("p");
    weight.innerText=elem.netWeight;
    var pieces=document.createElement("p");
    pieces.innerText=elem.grossWeight;
    boxb3.append(weight,pieces);
    boxb3.setAttribute("class","boxb3")

    var boxb4=document.createElement("div");
    boxb4.setAttribute("class","boxb4")

    var boxb4a=document.createElement("div")
    var price=document.createElement("p");
    price.innerText="MRP :"+elem.price;
    var mrp=document.createElement("p");
    mrp.innerText=elem.strikedOffPrice;
    var discount=document.createElement("p");
    discount.innerText=elem.discount;
    boxb4a.append(price,mrp,discount);
    boxb4a.setAttribute("class","boxb4a");
    

    var boxb4b=document.createElement("div")
    var btn=document.createElement("button");
    btn.innerText="ADD TO CART";
    btn.addEventListener("click",function()
    {
        myfunction(elem)
    })
    boxb4b.append(btn)
    boxb4b.setAttribute("class","boxb4b")
    
    boxb4.append(boxb4a,boxb4b)

    var boxb5=document.createElement("div");
    var logo=document.createElement("img")
    logo.src=elem.logo;
    var time=document.createElement("p");
    time.innerText=elem.delivery;
    boxb5.append(logo,time)
    boxb.append(boxb1,boxb2,boxb3,boxb4,boxb5);
    boxb5.setAttribute("class","boxb5")

    box.append(boxa,boxb);
    document.querySelector("#div2").append(box);


})
var data=JSON.parse(localStorage.getItem("cartData")) || [];
function myfunction(elem)
{
    data.push(elem);
    localStorage.setItem("cartData",JSON.stringify(data))
}


var div2Data=
[
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8jvklgaboqk/34/prod_display_image/1623765936.184--2021-06-1519:35:36--738","name":"Chicken Malai Tikka | Ready in 8 Minutes","discription":"Pieces of boneless chicken in a smoky, creamy marinade.","netWeight":"Net wt: 350gms","grossWeight":"Pieces:6-8","price":"269 ","strikedOffPrice":"MRP: 299 ","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_inuk3ilznwg/34/prod_display_image/1634310457.63--2021-10-1520:37:37--905?format=webp","name":"Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes","discription":"The classic mutton seekh kebab, that will transport you t..","netWeight":"Net wt: 4","grossWeight":"Pieces: 4","price":"338 ","strikedOffPrice":"MRP: 375","discount":" 10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_nalklga5atr/34/prod_display_image/1623763487.0139--2021-06-1518:54:47--738","name":"Chicken Tangdi Kebab | Ready in 8 Minutes","discription":"Chicken drumsticks ina smoky, spicy marinade","netWeight":"Net wt: 300gms","grossWeight":"Pieces: 3","price":"229","strikedOffPrice":"MRP: 249 ","discount":"8% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3im1dc7/34/prod_display_image/1623765451.812--2021-06-1519:27:31--738?format=webp","name":"Hyderabadi Mutton Shami Kebab | Ready in 8 Minutes","discription":"Hyderabad's favourite kebab, so delicious it's fit for royal..","netWeight":"Net wt:6","grossWeight":"Pieces: 6","price":"293 ","strikedOffPrice":"MRP: 325","discount":" 10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5inh87/34/prod_display_image/1617898844.7568--2021-04-0821:50:44--738","name":"Assorted Tandoori Platter | Ready to Cook","discription":"Pre-marinated tandoori treats, ready-in-8 mins!","netWeight":"Net wt:0 gm","grossWeight":"pieces -0","price":"598 ","strikedOffPrice":"MRP: 797 ","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/34/prod_display_image/1634616967.0156--2021-10-1909:46:07--1818","name":"Assorted Kebab Platter | Ready to Cook","discription":"Tender &juicy- our platter of kebabs is perfect for parties!","netWeight":"Net wt-0","grossWeight":"pieces-0","price":"794 ","strikedOffPrice":"MRP: 2993 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9d6e90ff-8303-e936-a222-a39540339602/original/Hariyali-Murgh-Tikka+new+Tag.jpg?format=webp","name":"Hariyali Murgh Tikka | Ready in 8 Minutes","discription":"Boneless chicken marinated in a fresh green herbs base.","netWeight":"Net wt: 300gms","grossWeight":"Pieces:6-8","price":"269","strikedOffPrice":"MRP: 269","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/106c6f98-e9c3-9fc2-537f-f1a9753010bf/original/Angara-Murgh-Tikka+New+Tag.jpg?format=webp","name":"Angara Murgh Tikka | Ready In 8 Minutes","discription":"Boneless chicken marinated in a spicy curd base.","netWeight":"Net wt: 300gms","grossWeight":"Pieces:6-8","price":"269","strikedOffPrice":"MRP: 269","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"}];

   

]

div2Data.map(function(elem)
{
    var box=document.createElement("div");
    var boxa=document.createElement("div");
    var image=document.createElement("img");
    image.src=elem.image;
    boxa.append(image);
    boxa.setAttribute("class","boxa")

    var boxb=document.createElement("div");
    boxb.setAttribute("class","boxb")
    var boxb1=document.createElement("div");
    var name=document.createElement("p");
    name.innerText=elem.name;
    boxb1.append(name);
    boxb1.setAttribute("class","boxb1")

    var boxb2=document.createElement("div");
    var description=document.createElement("p");
    description.innerText=elem.discription;
    boxb2.append(description);
    boxb2.setAttribute("class","boxb2")

    var boxb3=document.createElement("div");
    var weight=document.createElement("p");
    weight.innerText=elem.netWeight;
    var pieces=document.createElement("p");
    pieces.innerText=elem.grossWeight;
    boxb3.append(weight,pieces);
    boxb3.setAttribute("class","boxb3")

    var boxb4=document.createElement("div");
    boxb4.setAttribute("class","boxb4")

    var boxb4a=document.createElement("div")
    var price=document.createElement("p");
    price.innerText="MRP :"+elem.price;
    var mrp=document.createElement("p");
    mrp.innerText=elem.strikedOffPrice;
    var discount=document.createElement("p");
    discount.innerText=elem.discount;
    boxb4a.append(price,mrp,discount);
    boxb4a.setAttribute("class","boxb4a");
    

    var boxb4b=document.createElement("div")
    var btn=document.createElement("button");
    btn.innerText="ADD TO CART";
    btn.addEventListener("click",function()
    {
        myfunction(elem)
    })
    boxb4b.append(btn)
    boxb4b.setAttribute("class","boxb4b")
    
    boxb4.append(boxb4a,boxb4b)

    var boxb5=document.createElement("div");
    var logo=document.createElement("img")
    logo.src=elem.logo;
    var time=document.createElement("p");
    time.innerText=elem.delivery;
    boxb5.append(logo,time)
    boxb.append(boxb1,boxb2,boxb3,boxb4,boxb5);
    boxb5.setAttribute("class","boxb5")

    box.append(boxa,boxb);
    document.querySelector("#div4").append(box);


})
var data=JSON.parse(localStorage.getItem("cartData")) || [];
function myfunction(elem)
{
    data.push(elem);
    localStorage.setItem("cartData",JSON.stringify(data))
}

var div2Data=
[{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818","name":"Crispy Chicken Wings | Ready To Cook","discription":"Chicken wings marinated in spices & coated in panko crumbs.","netWeight":" Net wt: 225gms ","grossWeight":" Pieces: 7-8","price":"99","strikedOffPrice":"119","discount":"17% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5d8c84df-bbe9-a943-52a1-ae8c728006b1/original/BBQ-Chicken-Wings-without-Skin--.jpg?format=webp","name":"BBQ Chicken Wings without Skin | Ready to Cook","discription":"Our take on the American classic - skinless chicken wings marinated in our sticky barbecue sauce.","netWeight":"  Net wt: 10  ","grossWeight":" Pieces: 10","price":"142","strikedOffPrice":"149","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ggvktiq1iv5/34/prod_display_image/1634616386.4847--2021-10-1909:36:26--1818","name":"Crispy Chicken Poppers | Ready to Cook","discription":"Crumb-coated chicken meatballs with cheese & jalapenos","netWeight":" Net wt: 250gms ","grossWeight":" Pieces: 6","price":"169","strikedOffPrice":"199","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}

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
    var grossWeight=document.createElement("p");
    grossWeight.innerText=elem.grossWeight;
    boxb3.append(weight,grossWeight);
    boxb3.setAttribute("class","boxb3")

    var boxb4=document.createElement("div");
    boxb4.setAttribute("class","boxb4")

    var boxb4a=document.createElement("div")
    var price=document.createElement("p");
    price.innerText=elem.price;
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
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ntcjmw1avau/34/prod_display_image/1634368491.9493--2021-10-1612:44:51--905?format=webp","name":"Crispy Fish Fingers | Ready to Cook","discription":"Boneless piece of basa, coated in panko crumbs.","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 9-12","price":"224","strikedOffPrice":"MRP:299","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ggvku2pfn6u/34/prod_display_image/1634558169.5397--2021-10-1817:26:09--1818","name":"Crispy Chicken Supreme | Ready To Cook","discription":"Panko crumb-coated chicken tenders, ready in 8 minutes!","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 4","price":"142","strikedOffPrice":"MRP:149","discount":"5%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_e9lkuwnn0ya/34/prod_display_image/1635530961.9983--2021-10-2923:39:21--1818","name":"Teriyaki Chicken Wings | Ready to Cook","discription":"Chicken Wings coated in spices and a Teriyaki glaze","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 7-9","price":"149","strikedOffPrice":"MRP:199","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ggvktiq0rck/34/prod_display_image/1632379779.6646--2021-09-2312:19:39--1818","name":"Crispy Prawns | Ready to Cook","discription":"Crumb-coated prawns, ready to be deep fried","netWeight":"Net wt: 200gms","grossWeight":" Pieces: 10-12","price":"297","strikedOffPrice":"MRP:349","discount":"15%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ggvktiq1iv5/34/prod_display_image/1634616386.4847--2021-10-1909:36:26--1818","name":"Crispy Chicken Poppers | Ready to Cook","discription":"Crumb-coated chicken meatballs with cheese & jalapenos","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 6","price":"169","strikedOffPrice":"MRP:199","discount":"15%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5bbe35c4-ead8-d537-8828-5bafada8c4be/original/Honey-Chilli-Garlic-Wings+Tag+new.jpg?format=webp","name":"Honey Chilli Garlic Chicken Wings | Ready to Cook","discription":"Spicy marinated wings coated in a honey and chilli glaze","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 6-8","price":"149","strikedOffPrice":"MRP:299","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_e9lkuwnqw4l/34/prod_display_image/1635532585.6861--2021-10-3000:06:25--1818","name":"Tangy Chilli Chicken Wings | Ready to Cook","discription":"Spicy marinated wings coated in a zesty, chilli glaze","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 6-8","price":"169","strikedOffPrice":"MRP:299","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4533e7fa-bb7e-5bef-797e-1093f27851bc/original/Sweet-Pepper-Mustard-Chicken-Wings.jpg?format=webp","name":"Sweet Pepper Mustard Chicken Wings | Ready to Cook","discription":"Spicy marinated wings in a sweet pepper mustard glaze","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 6-8","price":"169","strikedOffPrice":"MRP:299","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/20c1373f-2e5b-db70-a324-e25899ea0f87/original/Smoked-Chilli-Passion-Fruit-Chicken-Wing_(1).jpg?format=webp","name":"Smoked Chilli Passion Fruit Chicken Wings | Ready to Cook","discription":"Chicken wings coated in a hot, fruity and sticky glaze","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 7-9","price":"229","strikedOffPrice":"MRP:229","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
   
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_hq1ktiq27f8/34/prod_display_image/1632493180.5059--2021-09-2419:49:40--1818","name":"Crispy Fish Fillet | Ready To Cook","discription":"Mahi Mahi fish fillets, batter-dipped & crumb-coated","netWeight":"Net wt: 200gms","grossWeight":" Pieces: 3-4","price":"349","strikedOffPrice":"MRP:399","discount":"10%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
   
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_e9lkuwnpwe2/34/prod_display_image/1635532311.7208--2021-10-3000:01:51--1818","name":"Frank's Buffalo Chicken Wings | Ready to Cook","discription":"Spicy marinated wings with a hot and sour glaze","netWeight":"Net wt: 250gms","grossWeight":" Pieces: 7-9","price":"159","strikedOffPrice":"MRP:199","discount":"20%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
   
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/20c1373f-2e5b-db70-a324-e25899ea0f87/original/Smoked-Chilli-Passion-Fruit-Chicken-Wing_(1).jpg?format=webp","name":"Habanero Chicken Wings | Ready to Cook","discription":"Chicken wings in a fiery marinade of habanero chilli and dried herbs for a bite of tasty heat","netWeight":"Net wt: 10gms","grossWeight":" Pieces: 10","price":"195","strikedOffPrice":"MRP:229","discount":"15%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
   

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
    var grossWeight=document.createElement("p");
    grossWeight.innerText=elem.grossWeight;
    boxb3.append(weight,grossWeight);
    boxb3.setAttribute("class","boxb3")

    var boxb4=document.createElement("div");
    boxb4.setAttribute("class","boxb4")

    var boxb4a=document.createElement("div")
    var price=document.createElement("p");
    price.innerText=elem.price;
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

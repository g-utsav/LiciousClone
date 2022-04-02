var div2Data=
<<<<<<< HEAD
[{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
},
{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
},
{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
}
]
=======
[{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818","name":"Crispy Chicken Wings | Ready To Cook","discription":"Chicken wings marinated in spices & coated in panko cru...","netWeight":"Net wt: 225gms","grossWeight":"Pieces: 7-8","price":"99","strikedOffPrice":"MRP: 119","discount":"17% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_cckksu32sb1/34/prod_display_image/1635341657.7331--2021-10-2719:04:17--1818","name":"Crispy Chicken Supreme | Ready To Cook","discription":"Panko crumb-coated chicken tenders, ready in 8 minutes!","netWeight":"Net wt: 250gms","grossWeight":"Pieces: 4-5","price":"142","strikedOffPrice":"MRP: 149","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ntcjmw1avau/34/prod_display_image/1634368491.9493--2021-10-1612:44:51--905?format=webp","name":"Crispy Fish Fingers | Ready to Cook","discription":"Boneless pieces of basa, coated in panko crumbs.","netWeight":"Net wt: 250gms","grossWeight":"Pieces: 9-12","price":"224","strikedOffPrice":"MRP: 299","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]

>>>>>>> 5314820e4988543df3784f5d83b8c3ebde63f650

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
<<<<<<< HEAD
[{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
},
{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
},
{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
},
{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
}
]
=======
[{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8smkrx2ly4g/2/prod_display_image/1632460294.1507--2021-09-2410:41:34--1818","name":"Creamy Afghani Chicken (Mini) | Ready to Cook","discription":"Boneless pieces of chicken in a creamy marinade.","netWeight":"Net wt: 225gms","grossWeight":"Pieces: 7-9","price":"169","strikedOffPrice":"MRP:169","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_59a6d117e3836/34/prod_display_image/1634570773.2911--2021-10-1820:56:13--1818?format=webp","name":"BBQ Chicken Wings without Skin | Ready to Cook","discription":"Our take on the American classic- skinless chicken wing..","netWeight":"Net wt: 10","grossWeight":"Pieces: 10","price":"142","strikedOffPrice":"MRP: 149 ","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ggvku2pfn6u/34/prod_display_image/1634558169.5397--2021-10-1817:26:09--1818","name":"Crispy Chicken Cutlet | Ready to Cook","discription":"Bengali-style, breaded, minced chicken cutlets","netWeight":"Net wt: 200gms","grossWeight":"Pieces: 4","price":"169","strikedOffPrice":"MRP:169","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3ilucko/34/prod_display_image/1634458823.656--2021-10-1713:50:23--905?format=webp","name":"ATghani Murgh Seekh Kebab","discription":"The classic chicken seekh kebab, marinated in tradition...","netWeight":"Net wt: 4","grossWeight":"Pieces: 4","price":"249","strikedOffPrice":"MRP:249","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/910b345e-9d61-0bb1-f1fe-906039e225ae/original/1613379429.jpg?format=webp","name":"Assorted Platter | Ready to Cook","discription":"All our favourite marinades for your next party.","netWeight":"","grossWeight":"","price":"490 ","strikedOffPrice":"MRP: 817","discount":"40% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/69114a5d-3214-c0eb-01d8-2c54cc1a70a5/original/Crispy-Snacks-.jpg?format=webp","name":"Crispy Snacks Combo","discription":"Super crispy! Chicken tenders, wings & fish fingers.","netWeight":"Net wt: 350gms","grossWeight":"ces: 11- 13","price":"247","strikedOffPrice":"MRP: 329","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_fmnkgkvc59i/34/prod_display_image/1634572795.2792--2021-10-1821:29:55--1818?format=webp","name":"Tandoori Chicken Ready in 8 Minutes","discription":"Tandoori-style chicken marinated in flavourful spices","netWeight":"Net wt: 350gms","grossWeight":"Pieces: 4","price":"249","strikedOffPrice":"MRP:249","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8izjkuohf8n/34/prod_display_image/1634571805.4283--2021-10-1821:13:25--1818?format=webp","name":"Creamy Afghani Chicken | Ready to Cook","discription":"Boneless pieces of chicken in a creamy marinade.","netWeight":"Net wt: 450gms","grossWeight":"Pieces: 14-16","price":"329","strikedOffPrice":"MRP: 329","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ntcjmw19kw5/34/prod_display_image/1635432954.0934--2021-10-2820:25:54--1818?format=webp","name":"Chicken Cutlet | Ready to Cook","discription":"Mildly spicy chicken cutlets made with minced chicken.","netWeight":"Net wt: 320gms","grossWeight":"Pieces:8","price":"229","strikedOffPrice":"MRP:229","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_fhijtgw0ctk/2/prod_display_image/1613378298.5141--2021-02-1514:08:18--738?format=webp","name":"Chicken Soup Bones- (Classic)","discription":"Mildly seasoned chicken bones that make a delicious, he..","netWeight":"Net wt: 250gms","grossWeight":"Pieces: 11-12","price":"105","strikedOffPrice":"MRP:105","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/34/prod_display_image/1634616967.0156--2021-10-1909:46:07--1818","name":"Assorted Kebab Platter | Ready to Cook","discription":"Tender &juicy- our platter of kebabs is perfect for parties!","netWeight":"Net wt: 250gms","grossWeight":"Pieces: 8-10","price":"794 ","strikedOffPrice":" MRP: 993","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_57ab6c26933b5/34/prod_display_image/1624015272.004--2021-06-1816:51:11--472?format=webp","name":"Amritsari Achari Murgh| Ready to Cook","discription":"Boneless pieces of chicken marinated in pickling spices.","netWeight":"Net wt: 450gms","grossWeight":"Pieces: 14-16","price":"299","strikedOffPrice":"MRP:299","discount":"0% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_inuk3ilznwg/34/prod_display_image/1634310457.63--2021-10-1520:37:37--905?format=webp","name":"Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes","discription":"The classic mutton seekh kebab, that will transport you t...","netWeight":"Net wt: 4","grossWeight":"Pieces: 4","price":"338","strikedOffPrice":"MRP: 375","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_nalklga5atr/34/prod_display_image/1623763487.0139--2021-06-1518:54:47--738","name":"Chicken Tangdi Kebab | Ready in 8 Minutes","discription":"Chicken drumsticks in a smoky, spicy marinade.","netWeight":"Net wt: 300gms","grossWeight":"Pieces:3","price":"229 ","strikedOffPrice":"MRP:249","discount":"8% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/ec81de82-1fef-e384-067f-e8fd3f470816/original/1596488840.1758--2020-08-0402_37_20--472.jpeg?format=webp","name":"Chicken Ghee Roast| Ready to Cook","discription":"Bone-in chicken pieces marinated in ghee & spices.","netWeight":"Net wt: 400gms","grossWeight":"Pieces: 6-7","price":"224 ","strikedOffPrice":"MRP: 299","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]
>>>>>>> 5314820e4988543df3784f5d83b8c3ebde63f650

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
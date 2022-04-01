var div2Data=
[{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"₹99",
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
price:"₹99",
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
price:"₹99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
}
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
    description.innerText=elem.description;
    boxb2.append(description);
    boxb2.setAttribute("class","boxb2")

    var boxb3=document.createElement("div");
    var weight=document.createElement("p");
    weight.innerText=elem.weight;
    var pieces=document.createElement("p");
    pieces.innerText=elem.pieces;
    boxb3.append(weight,pieces);
    boxb3.setAttribute("class","boxb3")

    var boxb4=document.createElement("div");
    boxb4.setAttribute("class","boxb4")

    var boxb4a=document.createElement("div")
    var price=document.createElement("p");
    price.innerText=elem.price;
    var mrp=document.createElement("p");
    mrp.innerText=elem.mrp;
    var discount=document.createElement("p");
    discount.innerText=elem.discount;
    boxb4a.append(price,mrp,discount);
    boxb4a.setAttribute("class","boxb4a");
    

    var boxb4b=document.createElement("div")
    var btn=document.createElement("button");
    btn.innerText="ADD TO CART";
    boxb4b.append(btn)
    boxb4b.setAttribute("class","boxb4b")
    
    boxb4.append(boxb4a,boxb4b)
    var boxb5=document.createElement("div");
    var logo=document.createElement("img")
    logo.src=elem.logo;
    var time=document.createElement("p");
    time.innerText=elem.time;
    boxb5.append(logo,time)
    boxb.append(boxb1,boxb2,boxb3,boxb4,boxb5);
    boxb5.setAttribute("class","boxb5")

    box.append(boxa,boxb);
    document.querySelector("#div2").append(box);


})
var div2Data=
[{image:"https:d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818",
name:"Crispy Chicken Wings | Ready To Cook",
description:"Chicken wings marinated in spices &amp; coated in panko crumbs",
weight:"Net wt: 225gms",
pieces:"Pieces: 7-8",
price:"₹99",
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
price:"₹99",
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
price:"₹99",
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
price:"₹99",
mrp:"MRP: 149",
discount:"17% OFF",
logo:"https://www.licious.in/img/default/express_delivery.svg",
time:"Today in 90 min"
}
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
    description.innerText=elem.description;
    boxb2.append(description);
    boxb2.setAttribute("class","boxb2")

    var boxb3=document.createElement("div");
    var weight=document.createElement("p");
    weight.innerText=elem.weight;
    var pieces=document.createElement("p");
    pieces.innerText=elem.pieces;
    boxb3.append(weight,pieces);
    boxb3.setAttribute("class","boxb3")

    var boxb4=document.createElement("div");
    boxb4.setAttribute("class","boxb4")

    var boxb4a=document.createElement("div")
    var price=document.createElement("p");
    price.innerText=elem.price;
    var mrp=document.createElement("p");
    mrp.innerText=elem.mrp;
    var discount=document.createElement("p");
    discount.innerText=elem.discount;
    boxb4a.append(price,mrp,discount);
    boxb4a.setAttribute("class","boxb4a");
    

    var boxb4b=document.createElement("div")
    var btn=document.createElement("button");
    btn.innerText="ADD TO CART";
    boxb4b.append(btn)
    boxb4b.setAttribute("class","boxb4b")
    
    boxb4.append(boxb4a,boxb4b)

    var boxb5=document.createElement("div");
    var logo=document.createElement("img")
    logo.src=elem.logo;
    var time=document.createElement("p");
    time.innerText=elem.time;
    boxb5.append(logo,time)
    boxb.append(boxb1,boxb2,boxb3,boxb4,boxb5);
    boxb5.setAttribute("class","boxb5")

    box.append(boxa,boxb);
    document.querySelector("#div4").append(box);


})
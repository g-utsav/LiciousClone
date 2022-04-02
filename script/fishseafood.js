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
[{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/278f2833-a6a3-ba1e-15e3-288b1a28ef5f/original/unnamed.png?format=webp","name":"Freshwater Prawns 40C- 60C (Chingri)- Cleaned & Deveined, No Tail","discription":"Freshwater prawns. De-shelled, cleaned, deveined, butt..","netWeight":"Net wt: 250gms","grossWeight":"Gross: 500gms","price":"395","strikedOffPrice":"MRP:395","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_6j4jhlmxsk1/2/prod_display_image/1611136779.9534--2021-01-2015:29:39--738?format=webp","name":"Rohu (Rui) Medium - Bengali Cut, No Head","discription":"Cleaned, medium-sized, freshwater, bony, unique tastin.","netWeight":"Net wt:500gms","grossWeight":"Gross: 900gms","price":"235","strikedOffPrice":"MRP:235","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4dd5c1b9-fd46-b820-e940-d583953495c2/original/1598119504.5651--2020-08-2223_35_04--738.jpeg?format=webp","name":"Basa- Boneless Cubes","discription":"Relish the smooth, so ft texture of Indian Basa cubes in e...","netWeight":"Net wt: 400gms","grossWeight":"Gross: 1600gms","price":"359","strikedOffPrice":"MRP:359","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]

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
[{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_6j4jhlmzwle/34/prod_display_image/1634208748.7634--2021-10-1416:22:28--1818?format=webp","name":"Catla (Katla) Medium - Bengali Cut, No Head","discription":"Cleaned, medium-sized, freshwater, bony, unique tastin..","netWeight":"Net wt: 500gms","grossWeight":"Gross:961gms","price":"415","strikedOffPrice":"MRP:415","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/c1f88652-9e2b-5b04-bc76-8bf22df04172/original/1601861948.563--2020-10-0507_09_08--738.jpeg?format=webp","name":"Rohu (Rui) Small- Bengali Cut, No Head","discription":"Freshwater fish, small sized, cleaned & cut, without hea.","netWeight":"Net wt: 500gms","grossWeight":"Gross: 700gms","price":"175","strikedOffPrice":"MRP:175","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgm7vjbj/2/prod_display_image/1612256556.3431--2021-02-0214:32:36--738?format=webp","name":"Butterfnsh (Pabda) Small - Whole Cleaned & Gutted With Head","discription":"Cleaned gutted, whole, silvery-white skinned, fleshy, bo..","netWeight":"Net wt: 350gms","grossWeight":"Gross: 490gms","price":"399","strikedOffPrice":"MRP:399","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/67d226b5-83c6-2ccb-2df0-35fa39b6bc81/original/1596007464.8046--2020-07-2912_54_24--738.jpeg?format=webp","name":"Rohu (Rui) Large - Bengali Cut, No Head","discription":"Cleaned, large-sized, freshwater, bony, unique tasting R..","netWeight":"Net wt: 500gm","grossWeight":"Gross: 833gm","price":"355","strikedOffPrice":"MRP:355","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_59943e55904f0/34/prod_display_image/1634208832.7785--2021-10-1416:23:52--1818?format=webp","name":"Catla (Katla) Large - Bengali Cut, Without Head","discription":"Cleaned large-sized Catla cut Bengali style with tail for a ..","netWeight":"Net wt: 500gm","grossWeight":"Gross: 862gm","price":"485","strikedOffPrice":"MRP:485","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/abf4a129-0be1-b041-2087-7423e2c5d90c/original/1596357849.2513--2020-08-0214_14_09--738.jpeg?format=webp","name":"Freshwater Scampi/Giant Prawns (Whole)","discription":"Whole, soft-shelled scampi with a fleshy, pale-coloured,...","netWeight":"Net wt: 500gm","grossWeight":"Gross: 521gm","price":"399","strikedOffPrice":"MRP:399","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_6j4jhm2hcmk/34/prod_display_image/1634364913.9707--2021-10-1611:45:13--905?format=webp","name":"Kajoli- Whole & Cleaned, No Tail","discription":"Small-sized, whole freshwater fish from the rivers of Ben...","netWeight":"Net wt: 250gms","grossWeight":"Gross: 280gms","price":"399","strikedOffPrice":"MRP:399","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_nvvktwxg5of/34/prod_display_image/1633921452.0664--2021-10-1108:34:12--1818","name":"Basa (Pangus)- Finger Cut","discription":"11-14 pieces of expertly crafted Basa fillet that's further c...","netWeight":"Net wt: 250gms ","grossWeight":"Gross: 927gms","price":"199","strikedOffPrice":"MRP:199","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3e634a8a-a2d7-b789-6092-a133597f0fc5/original/1599933723.3223--2020-09-1223_32_03--738.jpeg?format=webphttps://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3e634a8a-a2d7-b789-6092-a133597f0fc5/original/1599933723.3223--2020-09-1223_32_03--738.jpeg?format=webp","name":"Basa-Fillet, Platinum Grade","discription":"From unpolluted Indian waters, freshly cleaned, creamy ..","netWeight":"Net wt: 450gms","grossWeight":"Gross: 1500gms","price":"335","strikedOffPrice":"MRP:335","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4f6c4004-65bc-6779-7c1d-5a4d2fc3e614/original/1596201445.14--2020-07-3118_47_25--738.jpeg?format=webp","name":"Tilapia (Telapia) Small - Fillet","discription":"Mild-tasting, white-fleshed low in fat Tilapia cut into fillets.","netWeight":"Net wt: 250gms","grossWeight":"Gross: 1250gms","price":"199","strikedOffPrice":"MRP:199","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/410b6670-118c-a8e3-0849-f65c1092a5a8/original/Rohu-whole-cut-into-pcs-1+new+Tag.jpg?format=webp","name":"Rohu (Rui)- Whole Fish Cut Into Pieces","discription":"10-15 pcs of whole Rohu fish steaks with head.","netWeight":"Net wt: 1000gms","grossWeight":"Pieces: 1 Unit","price":"254","strikedOffPrice":"MRP:299","discount":"15%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/15627dc0-892a-5184-3d5f-b659cc3e9b71/original/Atlantic-Salmon+tag.jpg?format=webp","name":"Atlantic Salmon - Fillet With Skin","discription":"Salmon from the North Atlantic Ocean carved into silky t...","netWeight":"Net wt: 350gms","grossWeight":"Pieces:2","price":"1799","strikedOffPrice":" MRP: 2399","discount":"25%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_m95jp4280as/2/prod_display_image/1615375475.0539--2021-03-1016:54:35--472?format=webp","name":"Aar-Bengali Cut No Head","discription":"Bengali cut freshwater delicacy with a unique flavour an...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 850gms","price":"549","strikedOffPrice":"MRP:549","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/0932d4a4-a51f-1dff-65b3-78c3df11f487/original/1595937451.9118--2020-07-2817_27_31--738.jpeg?format=webp","name":"Sea Bass (Bhetki) Medium - Curry Cut","discription":"Curry cut of Sea Bass that is delicately textured with a su..","netWeight":"Net wt: 350gms","grossWeight":"Gross: 637gms","price":"469","strikedOffPrice":"MRP:469","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a1f5f3e2-6c44-ec90-9d2a-c6d9b2718b37/original/Freshwater-Prawns-medium2.jpeg?format=webp","name":"Freshwater Prawns 40C-60C (Chingri) Large Pack-Cleaned & Deveined, No Tai","discription":"Freshwater prawns. De-shelled, cleaned, deveined, butt...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 962gms","price":"765","strikedOffPrice":"MRP:765","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]
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

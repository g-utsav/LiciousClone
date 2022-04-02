var div2Data=
[{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_fagkepqge4h/34/prod_display_image/1634540836.8128--2021-10-1812:37:16--1818?format=webp","name":"Chicken Liver","discription":"Loaded with essential vitamins and minerals like iron an...","netWeight":"Net wt:350gms","grossWeight":"Gross: 354gms","price":"62","strikedOffPrice":"MRP: 69 ","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/2e41ce88-fe85-00ef-82e8-51678c4c830b/original/1584770394.3524--2020-03-2111_29_54--738.jpeg?format=webp","name":"Chicken Curry Cut (Small Pcs)","discription":"Bone-in chunky pieces of skinless meat including one le.","netWeight":"Net wt: 500gms","grossWeight":"Gross: 526gms","price":"134 ","strikedOffPrice":"MRP: 149","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/34/prod_display_image/1631077812.5226--2021-09-0810:40:12--1818","name":"Chicken Curry Cut (Smal Pcs)- Large Pack","discription":"Bone-in chunky pieces of skinless meat including Two le...","netWeight":"Net wt: 1000gms","grossWeight":"Gross: 1026gms","price":"289","strikedOffPrice":"MRP:289","discount":"0%","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]


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
[{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/a9319c2f-5cc5-3bc9-58ee-47889e64bb87/original/1574674590.8704--2019-11-2515_06_30--539.jpeg?format=webp","name":"Chicken Curry Cut (Large Pcs)","discription":"Halfa chicken cut to chunky pieces including one leg, a ..","netWeight":"Net wt: 500gms","grossWeight":"Gross: 526gms","price":"134","strikedOffPrice":"MRP:149","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgtb7ywh/34/prod_display_image/1631077476.2303--2021-09-0810:34:36--1818","name":"Chicken Curry Cut (Large Pcs)- Large Pack","discription":"Half a chicken cut to chunky pieces including Two leg, a ..","netWeight":"Net wt: 1000gms","grossWeight":"Gross: 1026gms","price":"231","strikedOffPrice":"MRP: 289","discount":" 20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/34/prod_display_image/1631077812.5226--2021-09-0810:40:12--1818","name":"Chicken Curry Cut (Small Pcs)- Large Pack","discription":"Bone-in chunky pieces of skinless meat including Two le...","netWeight":"Net wt: 1000gms","grossWeight":"Gross: 1026gms","price":"231 ","strikedOffPrice":"MRP: 289","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3fc255d8-d500-e7dc-0cba-1559cbd033f7/original/1599560545.3754--2020-09-0815_52_25--738.jpeg?format=webp","name":"Chicken Curry Cut (Small Pcs)- Large Pack","discription":"Skinless, bone-in chicken leg with rich flavour and succu...","netWeight":"Net wt: 300gms","grossWeight":"Gross: 400gms","price":"100","strikedOffPrice":"MRP:125","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3bc21bae-47aa-7d79-4829-9a51d6584d29/original/1574095384.8525--2019-11-1822_13_04--458.jpeg?format=webp","name":"Chicken Mini Bites (Boneless)","discription":"Boneless chicken breast cut into bite-sized pieces that ki..","netWeight":"Net wt: 250gms","grossWeight":"Gross: 350gms","price":"158 ","strikedOffPrice":"MRP: 175","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_id9jjmp0h34/34/prod_display_image/1634297078.8474--2021-10-1516:54:38--905?format=webp","name":"Chicken Drumstick","discription":"Skinless, bone-in, juicy meat from the lower leg with au...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 666gms","price":"252","strikedOffPrice":"MRP: 265","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/34/prod_display_image/1631077812.5226--2021-09-0810:40:12--1818","name":"Chicken Curry Cut (Small Pcs) - Large Pack","discription":"Bone-in chunky pieces of skinless meat including Two le....","netWeight":"Net wt: 1000gms","grossWeight":"Gross: 1026gms","price":"231","strikedOffPrice":"MRP:289","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgtb7ywh/34/prod_display_image/1631077476.2303--2021-09-0810:34:36--1818","name":"Chicken Curry Cut (Large Pcs)- Large Pack","discription":"Halfa chicken cut to chunky pieces including Two leg, a ..","netWeight":"Net wt: 1000gms","grossWeight":"Gross: 1026gms","price":"231","strikedOffPrice":"MRP:289","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3fc255d8-d500-e7dc-0cba-1559cbd033f7/original/1599560545.3754--2020-09-0815_52_25--738.jpeg?format=webp","name":"Chicken Leg- Curry Cut (Medium Pcs","discription":"Skinless, bone-in chicken leg with rich flavour and succu....","netWeight":"Net wt: 300gms","grossWeight":"Gross: 400gms","price":"100","strikedOffPrice":"MRP: 125","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/6675638f-ff10-9814-6907-64c93495a33d/original/1599654487.3108--2020-09-0917_58_07--472.jpeg?format=webp","name":"Chicken Gizzard","discription":"Here's a chicken meat that's probalbly the most versatile...","netWeight":"Net wt: 300gms","grossWeight":"Gross: 303gms","price":"47","strikedOffPrice":"MRP: 55 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3bc21bae-47aa-7d79-4829-9a51d6584d29/original/1574095384.8525--2019-11-1822_13_04--458.jpeg?format=webp","name":"Chicken Mini Bites (Boneless)","discription":"Boneless chicken breast cut into bite-sized pieces that ki...","netWeight":"Net wt: 250gms","grossWeight":"Gross: 350gms","price":"158 ","strikedOffPrice":"MRP:175","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_id9jjmp0h34/34/prod_display_image/1634297078.8474--2021-10-1516:54:38--905?format=webp","name":"Chicken Drumstick","discription":"Skinless, bone-in, juicy meat from the lower leg with au...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 666gms","price":"252","strikedOffPrice":"MRP: 265","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/ff10e934-b44f-a5dc-d8bd-d0210f3959c5/original/1606726882.1104--2020-11-3014_31_22--738.jpeg?format=webp","name":"Chicken Breast - Boneless","discription":"Tender, boneless fillets of chicken meat cut from the bre...","netWeight":"Net wt: 450gms","grossWeight":"Gross: 600gms","price":"242 ","strikedOffPrice":"MRP: 255","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/772a7049-a634-7da5-fd05-46965f90e3c5/original/1585487159.8419--2020-03-2918_35_59--472.jpeg?format=webp","name":"Tender Spring Chicken- Whole Bird Curry Cut","discription":"A whole spring chicken cut into meaty pieces including 2...","netWeight":"Net wt: 800gms","grossWeight":"Gross: 841gms","price":"231","strikedOffPrice":"MRP: 289","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/9389e74f-33df-c91b-4aa8-1ea694e6c2e3/original/1574096409.4517--2019-11-1822_30_09--458.jpeg?format=webp","name":"Country Chicken Curry Cut","discription":"Cuts of country chicken perfect for curries","netWeight":"Net wt: 550gms","grossWeight":"Gross: 575gms","price":"292","strikedOffPrice":"MRP: 365","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]

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
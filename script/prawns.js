var div2Data=[
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/278f2833-a6a3-ba1e-15e3-288b1a28ef5f/original/unnamed.png?format=webp","name":"Freshwater Prawns 4OC-60C (Chingri) - Cleaned & Deveined, No Tail","discription":"Freshwater prawns. De-shelled, cleaned, deveined, butt..","netWeight":"Net wt: 250gms","grossWeight":"Gross: 500gms","price":"395","strikedOffPrice":"MRP: 395","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/abf4a129-0be1-b041-2087-7423e2c5d90c/original/1596357849.2513--2020-08-0214_14_09--738.jpeg?format=webp","name":"Freshwater Scampi/Giant Prawns (Whole)","discription":"Whole, soft-shelled scampi with a fleshy, pale-coloured,...","netWeight":"Net wt: 500gm","grossWeight":"Gross: 521gm","price":"379","strikedOffPrice":" MRP: 399","discount":" 5%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a1f5f3e2-6c44-ec90-9d2a-c6d9b2718b37/original/Freshwater-Prawns-medium2.jpeg?format=webp","name":"Freshwater Prawns 40C-60C (Chingri) Large Pack- Cleaned & Deveined, No Tail","discription":"Freshwater prawns. De-shelled, cleaned, deveined, but...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 962gms","price":"765","strikedOffPrice":"MRP:765","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
];






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


var div2Data=[


{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3308534e-54ee-f06d-2226-ad9018092a02/original/unnamed.jpg?format=webp","name":"Freshwater Prawns (Chingri) Trial Pack - 10 Pcs (Cleaned & Deveined No Tail)","discription":"Freshwater prawns. De-shelled, cleaned, deveined, but.","netWeight":"Net wt: 10","grossWeight":"Pieces: 10","price":"199","strikedOffPrice":"MRP:199","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_123kq19agfk/34/prod_display_image/1632811853.0893--2021-09-2812:20:53--1818","name":"Flower Shrimp 30C-50C (Chingri) - Cleaned & Deveined, No Tail","discription":"Juicy & delicious, perfect for pakoras and pan-fried dishes","netWeight":"Net wt: 250gms","grossWeight":"Gross: 556gms","price":"369","strikedOffPrice":"MRP:369","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/82a9af80-263d-4812-9a29-809a476e2517/original/flower-shrimp-70-110-c_(1).jpg?format=webp","name":"Flower Shrimp 70-11OC (Cleaned and Deveined, No Tail) Trial Pack","discription":"This trial pack has 25-41 pieces of thoroughly cleaned an...","netWeight":"Net wt: 150gms","grossWeight":"Pieces:350gms","price":"MRP: 275","strikedOffPrice":"MRP: 275","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Tomorrow 8 AM- 10 AM"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e57db939-8078-9f6c-4c6f-e22b191381b2/original/1626790290_(1).jpg?format=webp","name":"Tiger Prawns (20C-3OC) - Cleaned & Deveined, with Tail","discription":"Flavourful Tiger Prawns, cleaned and ready for the pan","netWeight":"Net wt: 250gms","grossWeight":"Gross: 421gms","price":"549","strikedOffPrice":"MRP:549","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Tomorrow8 AM- 10 AM"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/7b932cc7-ceb3-f064-8773-6475a5fc5906/original/1596184894.5788--2020-07-3114_11_34--738.jpeg?format=webp","name":"Freshwater Large Prawns 30Count/Kg (Chingri) - Cleaned & Deveined, No Tail","discription":"Large butterflied prawns with head and tail removed - d.","netWeight":"Net wt: 250gms","grossWeight":"Gross: 500gms","price":"475","strikedOffPrice":"MRP:475","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Tomorrow 8 AM- 10 AM"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_d3skl1b6001/2/prod_display_image/1613709881.2402--2021-02-1910:14:41--472","name":"Freshwater Prawns 50-60C (Cleaned and Deveined NoTail) Trial Pack","discription":"Freshwater Vannamei, Medium Sized, Deveined, Without...","netWeight":"Net wt: 10 ","grossWeight":"Pieces: 10","price":"205V","strikedOffPrice":"MRP: 205","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/e4ccdc0a-cf2b-00c5-865a-d949dbb57889/original/1596643918.0245--2020-08-0521_41_58--738.jpeg?format=webp","name":"Freshwater Prawns 60Count/Kg (Chingri)- Cleaned& Deveined, No Tail","discription":"Freshwater Vannamei prawns. De-shelled, cleaned, deve...","netWeight":"Net wt: 250gms","grossWeight":"Gross: 500gms","price":"389","strikedOffPrice":"MRP:389","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8umkrer7r4w/34/prod_display_image/1636637907.885--2021-11-1119:08:27--1818","name":"Sea White Prawns 20-40C Cleaned & Deveined, No Tail","discription":"Delicate, fresh-flavoured meat","netWeight":"Net wt: 250gms ","grossWeight":"Gross: 500gms","price":"449","strikedOffPrice":"MRP:449","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/7bab8142-ba4e-6c5d-c3a2-78fc60992e7b/original/1601654474.6277--2020-10-0221_31_14--738.jpeg?format=webp","name":"Freshwater Prawns 5OCount/Kg (Chingri)- Cleaned & Deveined, No Tail - Large pack","discription":"De-shelled, cleaned, deveined, butterflied prawns with h...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 840gms","price":"819","strikedOffPrice":"MRP: 819","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4jwjw1y9tfb/34/prod_display_image/1610189424.3719--2021-01-0916:20:24--738","name":"Seawater Prawns 70Count/Kg (Chemmeen)- Cleaned &Deveined, No Tail","discription":"Perfect for pickles & gravies.","netWeight":"Net wt: 250gms","grossWeight":"Gross: 521gms","price":" 379","strikedOffPrice":"MRP: 379","discount":"0%OFF","logo":"NOTIFY ME","delivery":"Out of Stock"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_d3rkl1b7ara/2/prod_display_image/1613709257.654--2021-02-1910:04:17--472","name":"Freshwater Prawns 40-50C (Cleaned and Deveined, No Tail) Trial Pack","discription":"Freshwater Vannamei, Medium Sized, Deveined, Without...","netWeight":"Net wt: 10 ","grossWeight":"Pieces: 10","price":"225","strikedOffPrice":"MRP:R225","discount":"0%OFF","logo":"NOTIFY ME","delivery":"Out of Stock"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_gi9kauyla8l/2/prod_display_image/1591551521.9987--2020-06-0723:08:41--738","name":"Freshwater Prawns 80Count/Kg (Chingri)- Cleaned &Deveined, No Tail","discription":"Peeled, deveined and ready to be devoured -Whiteleg S..","netWeight":"Net wt: 250gms","grossWeight":"Gross: 510gms","price":"339","strikedOffPrice":"MRP: 339","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"NOTIFY ME"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_nsckuccfuji/34/prod_display_image/1633863323.1243--2021-10-1016:25:23--1818","name":"Sea White Prawns 70C-110C (Cleaned and Deveined No Tail) Trial Pack","discription":"Delicate, fresh-flavoured meat","netWeight":"Net wt: 150gms","grossWeight":"Gross: 300gms","price":"249","strikedOffPrice":"MRP: 249","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of stock"},
];

   



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

var div2Data=
[{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/5d064585-dfbc-4a5a-e9fc-57a0770a1e9f/original/1596562679.4765--2020-08-0423_07_59--738.jpeg?format=webp","name":"Roopchand- Steaks","discription":"A Bengali favourite, this freshwater pomfret has sweet-ta.","netWeight":"Net wt: 500gms","grossWeight":"Gross: 714gms","price":"199","strikedOffPrice":"MRP:199","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Tomorrow8 AM- 10 AM"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15mko48p5uv/34/prod_display_image/1634559349.2388--2021-10-1817:45:49--1818","name":"Crispy Chicken Wings | Ready To Cook","discription":"Chicken wings marinated in spices &coated in panko cru.","netWeight":"Net wt: 225gms","grossWeight":"Pieces: 7-8","price":"99","strikedOffPrice":"MRP: 149","discount":"17% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgkv3mxo/34/prod_display_image/1634365724.2535--2021-10-1611:58:44--905?format=webp","name":"Hilsa (llish) Medium- Curry Cut With Head","discription":"Cleaned, Scaled, Curry Cuts, with Head","netWeight":"Net wt: 500gms","grossWeight":"Gross: 704gms","price":"1349","strikedOffPrice":"MRP: 4799","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Tomorrow 8 AM-10 AM"}]

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
var div2Data=
[{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_id9jjmp0h34/34/prod_display_image/1634297078.8474--2021-10-1516:54:38--905?format=webp","name":"Chicken Drumstick","discription":"Skinless, bone-in, juicy meat from the lower leg with au..","netWeight":"Net wt:500gms","grossWeight":"Gross: 666gms","price":"252","strikedOffPrice":" MRP: 265","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/6675638f-ff10-9814-6907-64c93495a33d/original/1599654487.3108--2020-09-0917_58_07--472.jpeg?format=webp","name":"Chicken Gizzard","discription":"Here's a chicken meat that's probably the most versatile...","netWeight":"Net wt: 300gms","grossWeight":"Gross: 303gms","price":"47","strikedOffPrice":"MRP: 55","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Tomorrow 8 AM- 10 AM"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/ff10e934-b44f-a5dc-d8bd-d0210f3959c5/original/1606726882.1104--2020-11-3014_31_22--738.jpeg?format=webp","name":"Chicken Breast - Boneless","discription":"Tender, boneless fillets of chicken meat cut from the bre.","netWeight":"Net wt: 450gms","grossWeight":"Gross: 600gms","price":"242","strikedOffPrice":"MRP: 255","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/278f2833-a6a3-ba1e-15e3-288b1a28ef5f/original/unnamed.png?format=webp","name":"Freshwater Prawns 40C -60C (Chingri), No Tail","discription":"Freshwater prawns. De-shelled, cleaned, deveined, butt...","netWeight":"Net wt: 250gms","grossWeight":"Gross: 500gms","price":"336","strikedOffPrice":"MRP:R395","discount":" 59% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_6j4jhlmxsk1/2/prod_display_image/1611136779.9534--2021-01-2015:29:39--738?format=webp","name":"Rohu (Rui) Medium- Bengali Cut, No Head","discription":"Cleaned, medium-sized, freshwater, bony, unique tastin...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 900gms","price":"212","strikedOffPrice":"MRP: 235","discount":"10% OFF",
"logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_89lkrx2ojt1/2/prod_display_image/1634618647.0414--2021-10-1910:14:07--1818","name":"Sichuan Chilli Chicken (Mini) | Ready to Cook","discription":"Boneless chicken pieces in an Indo-Chinese marinade.","netWeight":"Net wt: 250gms","grossWeight":"Pieces: 10-12","price":"127","strikedOffPrice":"MRP: 169","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/3bc21bae-47aa-7d79-4829-9a51d6584d29/original/1574095384.8525--2019-11-1822_13_04--458.jpeg?format=webp","name":"Chicken Mini Bites (Boneless)","discription":"Boneless chicken breast cut into bite-sized pieces that ki..","netWeight":"Net wt: 250gms","grossWeight":"Gross: 350gms","price":"158","strikedOffPrice":"MRP: 175","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5vxs7/34/prod_display_image/1634635955.5318--2021-10-1915:02:35--1818?format=webp","name":"Chunky Butter Chicken Spread (Single Serve)","discription":"Mildly spiced chunks of freshly roasted chicken blended.","netWeight":"Net wt: 35gms","grossWeight":"Gross: 35gms","price":"735","strikedOffPrice":"MRP: 39","discount":"10% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ov2jkm3yj3e/2/prod_display_image/1589565535.8106--2020-05-1523:28:55--738?format=webp","name":"Goat Shoulder Curry Cut","discription":"Evenly cut, juicy, bone-in and boneless pieces of goat m...","netWeight":"Net wt: 500gms","grossWeight":"Gross: 833gms","price":"565","strikedOffPrice":"MRP: 595","discount":"5%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ffojtznsds8/34/prod_display_image/1633540192.041--2021-10-0622:39:52--1818?format=webp","name":"Chicken Boneless - Cubes","discription":"Skinless&boneless Cut & cleaned","netWeight":"Net wt: 450gms","grossWeight":"Gross: 690gms","price":"233 ","strikedOffPrice":"MRP:245","discount":" 5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/32e2aa20-f119-c1ae-6220-57cf0c659fbc/original/1574096085.7563--2019-11-1822_24_45--458.jpeg?format=webp","name":"Chicken Lollipop","discription":"Frenched chicken wings with a clean bone for a handle, .","netWeight":"Net wt: 10","grossWeight":"Pieces: 10","price":"128 ","strikedOffPrice":"MRP: 435","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5d8c84df-bbe9-a943-52a1-ae8c728006b1/original/BBQ-Chicken-Wings-without-Skin--.jpg?format=webp","name":"BBQ Chicken Wings without Skin | Ready to Cook","discription":"Our take on the American classic - skinless chicken wing...","netWeight":"Net wt: 10","grossWeight":"Pieces: 10","price":"142","strikedOffPrice":"MRP: 149","discount":"5% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1163492f-57dc-4345-34ae-931324d2375d/original/Chunky-Continental-Chicken-Spread.jpg?format=webp","name":"Chunky Continental Chicken Spread","discription":"A meaty delight mix of freshly roasted chicken chunks, cr...","netWeight":"Net wt: 200gms","grossWeight":"Gross: 200gms","price":"199","strikedOffPrice":"MRP:199","discount":"0%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgm7vjbj/2/prod_display_image/1612256556.3431--2021-02-0214:32:36--738?format=webp","name":"Butterfish (Pabda) Small - Whole Cleaned & Gutted With Head","discription":"Cleaned gutted, whole, silvery-white skinned, fleshy, bo...","netWeight":"Net wt: 350gms","grossWeight":"Gross: 490gms","price":"319","strikedOffPrice":"MRP: 399","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

{"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgtbauyh/34/prod_display_image/1631078280.0978--2021-09-0810:48:00--1818","name":"Chicken Mince- Large Pack","discription":"Boneless, minced chicken for a variety of dishes","netWeight":"Net wt:900gms","grossWeight":"Gross: 1130gms","price":"396","strikedOffPrice":"MRP: 565","discount":" 30% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"}]



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
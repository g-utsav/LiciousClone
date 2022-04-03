var div2Data=[
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp","name":"Coldcut Combo - Chicken Sausages & Salami","discription":"8-11 pieces of breakfast sausages & peppery salami","netWeight":"8-11 piece","grossWeight":"8-11 piece","price":"199","strikedOffPrice":" MRP: 398 ","discount":"50% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/69114a5d-3214-c0eb-01d8-2c54cc1a70a5/original/Crispy-Snacks-.jpg?format=webp","name":"Crispy Snacks Combo","discription":"Super crispy! Chicken tenders, wings & fish fingers.","netWeight":"Quantity in piece","grossWeight":"Quantity in piece","price":"340 ","strikedOffPrice":"MRP: 567 ","discount":"40% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/910b345e-9d61-0bb1-f1fe-906039e225ae/original/1613379429.jpg?format=webp","name":"Assorted Platter | Ready to Cook","discription":"All our favourite marinades for your next party.","netWeight":"Quantity in piece","grossWeight":"Quantity in piece","price":"490","strikedOffPrice":" MRP: 281","discount":"40% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},

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

    
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b8ba9d1c-2d51-11c1-b64d-6d9ff4cf9353/original/Lamb---Mince.jpg?format=webp","name":"Lamb Mince Combo","discription":"2 packs of clean, finely ground Lamb Keema/Mince.","netWeight":"Quantity in piece","grossWeight":"Quantity in piece","price":"uanti","strikedOffPrice":"MRP: 1150 ","discount":"40% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8b51398b-b07f-1a84-cce2-0c3ec19b153e/original/Goat---Mince.jpg?format=webp","name":"Goat Mince - Combo","discription":"2 packs of clean, finely ground Goat Keema/Mince.","netWeight":"Quantity in piece","grossWeight":"Quantity in piece","price":"714 ","strikedOffPrice":"MRP: 1190 ","discount":"40%OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4a28f1b9-adfa-0842-57cd-5d1cd8a6df1e/original/Chicken-Bounty-Combo-1.jpg?format=webp","name":"Chicken Bounty Combo","discription":"3 medium spicy pre-marinated chicken dishes you will l...","netWeight":"Quantity in piece","grossWeight":"Quantity in piece","price":"355 ","strikedOffPrice":"MRP: 507 ","discount":"30% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/77ab62ad-dce2-f854-2b10-e2dc987bba6d/original/Chicken-Delight-Combo---Indian-1.jpg?format=webp","name":"Chicken Delight Combo - Indian","discription":"Truly desi! Tandoori Chicken & Creamy Afghani Chicken.","netWeight":"Quantity in piece","grossWeight":"Quantity in piece","price":"293 ","strikedOffPrice":"MRP: 418 ","discount":"30% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5inh87/34/prod_display_image/1617898844.7568--2021-04-0821:50:44--738","name":"Assorted Tandoori Platter | Ready to Cook","discription":"Pre-marinated tandoori treats, ready-in-8 mins!","netWeight":"","grossWeight":"","price":"598 ","strikedOffPrice":"MRP: 797 ","discount":"25% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/37064758-3ef3-87ef-96f6-079cc4d40f05/original/1598354434.8344--2020-08-2516_50_34--472.jpeg?format=webp","name":"Chicken Curry Cut (Small pcs)","discription":"Combination of fresh Chicken Curry Cuts and Seekh Keb...","netWeight":"500 gms","grossWeight":"500 gms","price":"318","strikedOffPrice":" MRP: 398 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/99b658a9-735c-e8fd-9e38-ad551d38303f/original/1598354820.7337--2020-08-2516_57_00--472.jpeg?format=webp","name":"Chicken Curry Cut (Small pes)","discription":"Relish a Greek Salad and Chicken Curry for dinner.","netWeight":"500 gms","grossWeight":"500 gms","price":"278 ","strikedOffPrice":"MRP: 348 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dcc2fd54-2e8e-2a56-ae3a-1491ad1db9bf/original/Salami-&-Chicken-Spread.jpg?format=webp","name":"Chicken Curry Cut (Small pes)- and Chunky Shawarma Chicken Spread-200 gms","discription":"Relish a Greek Salad and Chicken Curry for dinner.","netWeight":"500 gms","grossWeight":"500 gms","price":"278","strikedOffPrice":" MRP: 348 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9845699f-0170-f7a3-9346-919b085eea00/original/Eggs,-Sausages-&-Chicken-Spread-1.jpg?format=webp","name":"Chicken Curry Cut (Small pes)","discription":"Relish a Greek Salad and Chicken Curry for dinner.","netWeight":"500 gms","grossWeight":"500 gms","price":"278","strikedOffPrice":" MRP: 348 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4ca9d307-0b8a-2872-cea0-76d0dca486d1/original/1598628114.8958--2020-08-2820_51_54--472.jpeg?format=webp","name":"Shawarma Chicken Spread -200 gms","discription":"For salads, snacks & dinner, this is the combo you need.","netWeight":"200 gms","grossWeight":"200 gms","price":"411 ","strikedOffPrice":"MRP: 514 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/34/prod_display_image/1634616967.0156--2021-10-1909:46:07--1818","name":"Peppery Chicken Salami -200 gms and Chunky","discription":"For salads, snacks & dinner, this is the combo you need.","netWeight":"200 gms","grossWeight":"200 gms","price":"411 ","strikedOffPrice":"MRP: 514 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c766df18-3b1b-5a0f-6baf-052cfb073eec/original/Eggs,-Sausages-&-Egg-Spread-1.jpg?format=webp","name":"Peppery Chicken Salami -200 gms and Chunky","discription":"For salads, snacks & dinner, this is the combo you need.","netWeight":"200 gms","grossWeight":"200 gms","price":"411","strikedOffPrice":" MRP: 514 ","discount":"20% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/7b01c115-004e-d26b-af07-316bb58db484/original/1598881153.9943--2020-08-3119_09_13--472.jpeg?format=webp","name":"Chicken Curry Cut[Large pcs)- 500 gms","discription":"Get big&small pieces of chicken in one combo.","netWeight":"500 gms","grossWeight":"500 gms","price":"253","strikedOffPrice":" MRP: 298 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/de7e5efc-b48a-1e00-d827-6aa4d4f93f7d/original/1598359703.8796--2020-08-2518_18_23--472.jpeg?format=webp","name":"Chicken Curry Cut[Large pcs)- 500 gms","discription":"Get big&small pieces of chicken in one combo.","netWeight":" 500 gms","grossWeight":" 500 gms","price":"253","strikedOffPrice":"MRP: 298","discount":" 15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4c7bf422-3a39-0374-d589-2d1ec6b9127d/original/1599560442.8231--2020-09-0815_50_42--472.jpeg?format=webp","name":"Chicken Breast- Fillet Cut- 450 gms and Classic","discription":"Make Chicken steaks for lunch and Eggs for breakfast.","netWeight":"450 gms","grossWeight":"450 gms","price":"264 ","strikedOffPrice":"MRP: 310","discount":" 15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/20f58db5-7637-5bae-e0a7-059c4e8823de/original/1599552183.4671--2020-09-0813_33_03--472.jpeg?format=webp","name":"Breast-Fillet Cut - 450 gms","discription":"This chicken combo is the ultimate meat indulgence.","netWeight":"450 gms","grossWeight":"450 gms","price":"442 ","strikedOffPrice":"MRP: 520 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/bcd15b7e-5ef8-a1c4-1538-50913184decd/original/1598524707.9636--2020-08-2716_08_27--472.jpeg?format=webp","name":"Chicken Drumstick - 500 gms and Chicken","discription":"This chicken combo is the ultimate meat indulgence.","netWeight":" 500 gms","grossWeight":" 500 gms","price":"442 ","strikedOffPrice":"MRP: 520 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/72b34f37-8114-c32f-0baa-45d10277758c/original/1608100497.0597--2020-12-1612_04_57--472.jpeg?format=webp","name":"Continental Chicken Spread 200gms +Classic","discription":"Enjoy eggs for breakfast & a meaty mid-morning snack I..","netWeight":"200gms","grossWeight":"200gms","price":"216","strikedOffPrice":" MRP: 254 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/51822075-d5e1-a541-e625-ef39e0ce8c1a/original/1599279471.6941--2020-09-0509_47_51--472.jpeg?format=webp","name":"Chicken Curry Cut (Small pcs)-500 gms ","discription":"Snack to dinner time, plan your meals with this combo.","netWeight":"500 gms ","grossWeight":"500 gms ","price":"241 ","strikedOffPrice":"MRP: 284 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/2d6e6243-5cc1-4ab2-2679-f322132ba9f9/original/1599555608.7352--2020-09-0814_30_08--472.jpeg?format=webp","name":"Chicken Curry Cut (Small pcs)-","discription":"Snack to dinner time, plan your meals with this combo.","netWeight":"500 gms ","grossWeight":"500 gms ","price":"241","strikedOffPrice":" MRP: 284 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_faakel5u59c/2/prod_display_image/1599037852.3211--2020-09-0214:40:52--472?format=webp","name":"Chunky Butter Chicken Spread - 400gms","discription":"For salads & snacks, this is the combo you need.","netWeight":"400gms","grossWeight":"400gms","price":"338","strikedOffPrice":" MRP: 299","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/7921dd47-61b3-d7c1-6973-ce42778f29fc/original/1599039980.2972--2020-09-0215_16_20--472.jpeg?format=webp","name":"Chunky Shawarma Chicken Spread -400gms","discription":"For salads &snacks, this is the combo you need.","netWeight":"400gms","grossWeight":"400gms","price":"338 ","strikedOffPrice":"MRP: 398","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/6231ecd0-8864-da18-0297-6c8c2415f808/original/1599039295.0495--2020-09-0215_04_55--472.jpeg?format=webp","name":"Chunky Continental Chicken Spread - 400gms","discription":"For salads & snacks, this is the combo you need.","netWeight":"400gms","grossWeight":"400gms","price":"338 ","strikedOffPrice":"MRP: 398 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_dynkp9h1orv/34/prod_display_image/1623055222.2665--2021-06-0714:10:22--738","name":"Classic Eggs -pack of 12+Chicken Breakfast","discription":"Kickstart your day with nutritious eggs and juicy sausages.","netWeight":"450gms","grossWeight":"450gms","price":"357 ","strikedOffPrice":"MRP: 420 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1b541a5d-ddc2-3cfe-06e4-6d8014b38f30/original/1601013711.jpg?format=webp","name":"Classic Eggs -pack of 12 +Peppery Chicken","discription":"Indulge in a hearty breakfast and a meaty mid-morning s..","netWeight":"300gms","grossWeight":"300gms","price":"357","strikedOffPrice":" MRP: 420 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/578ed390-a91d-2e04-8f81-0a0ac9881f1b/original/1598627040.5758--2020-08-2820_34_00--472.jpeg?format=webp","name":"Afghani Murgh Seekh Kebab-4 Pcs and Chunky","discription":"For salads, snacks & dinner, this is the combo you need.","netWeight":" 200 gms","grossWeight":" 200 gms","price":"408","strikedOffPrice":" MRP: 448 ","discount":"9% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/c3edf37b-9d11-8043-43a9-ed90e4ab3a53/original/1601044842.518--2020-09-2520_10_42--472.jpeg?format=webp","name":"Lucknowi Mutton Galouti Kebab - 6 Pcs and","discription":"Need a mid-morning snack? Try this satisfying combo.","netWeight":"200gms","grossWeight":"200gms","price":"520 ","strikedOffPrice":"MRP: 568 ","discount":"8% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Today in 90 min"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1b541a5d-ddc2-3cfe-06e4-6d8014b38f30/original/1601013711.jpg?format=webp","name":"Chicken Platter | Ready To Cook","discription":"3 of our favourite freshly marinated chicken recipes.","netWeight":"350 gms","grossWeight":"350 gms","price":"418 ","strikedOffPrice":"MRP: 697","discount":" 40% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Unavailable"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/21bca85a-6c80-9282-6476-2ca0bfc315b9/original/1601404517.5112--2020-09-3000_05_17--472.jpeg?format=webp","name":"Chicken Platter | Ready To Cook","discription":"3 of our favourite freshly marinated chicken recipes.","netWeight":"300gms","grossWeight":"300gms","price":"418","strikedOffPrice":" MRP: 697 ","discount":"40% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},
    
    {"image":"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_dynkp9h1orv/34/prod_display_image/1623055222.2665--2021-06-0714:10:22--738","name":"Classic Eggs -pack of 12 + Chicken Breakfast","discription":"Kickstart your day with nutritious eggs and juicy sausages.","netWeight":"Quantity in piece","grossWeight":"Quantity In piece","price":"357","strikedOffPrice":" MRP: 420 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/8abc8b41-d636-9ad6-4ec4-3d21df8df8ec/original/1601405662.7327--2020-09-3000_24_22--472.jpeg?format=webp","name":"Chicken Breast- Fillet Cut-450 gms and Classic","discription":"Make Chicken steaks for lunch and Eggs for breakfast.","netWeight":"450 gms","grossWeight":"450 gms","price":"264 ","strikedOffPrice":"MRP: 310 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/72b34f37-8114-c32f-0baa-45d10277758c/original/1608100497.0597--2020-12-1612_04_57--472.jpeg?format=webp","name":"Continental Chicken Spread 200gms+Classic","discription":"Enjoy eggs for breakfast & a meaty mid-morning snack l...","netWeight":"200gms","grossWeight":"200gms","price":"216 ","strikedOffPrice":"MRP: 254 ","discount":"15% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},
    
    {"image":"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/679da087-b561-afa1-111a-8541faa2fed0/original/Chicken---Three-ways-Combo-1.jpg?format=webp","name":"Chicken, Three ways Combo","discription":"Make Chicken steaks for lunch and Eggs for breakfast.","netWeight":"450gms","grossWeight":"450gms","price":"448","strikedOffPrice":" MRP: 517 ","discount":"13% OFF","logo":"https://www.licious.in/img/default/express_delivery.svg","delivery":"Out of Stock"},



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

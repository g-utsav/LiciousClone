coldData = [
    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },


    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image_url : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        item_name : "Cold Cut Combo - Chicken Sausages & Salami",
        item_des : " 8 - 11 pieces of breakfast sausages & peppery salami",
        net_wt : "200gms",
        pieces : "7-8",
        current_price : "₹99",
        mrp : "₹119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

]


coldData.map(function(elem){
    
    var card = document.createElement("div")
    card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" ; 
    card.style.borderRadius = "10px" ;
    // card.style.padding = "15px";

    var img = document.createElement("img");
    img.src = elem.image_url ;
    img.style.width = "100%";
    img.style.height = "240px"
    img.style.borderRadius = "10px 10px 0px 0px ";

    var itemName = document.createElement("p");
    itemName.innerText = elem.item_name ;
    itemName.style.fontWeight = "bold";
    itemName.style.padding = "10px";
    
    var itemDes = document.createElement("p");
    itemDes.innerText = elem.item_des ;
    itemDes.style.padding = "10px";

    var netWt = document.createElement("p");
    netWt.innerText = "Net wt : " + elem.net_wt ;

    var pieces = document.createElement("p");
    pieces.innerText = "Pieces : " + elem.pieces ;

    var net_wt_line = document.createElement("div")
    net_wt_line.className = "net-wt-line";
    net_wt_line.style.fontWeight = "bold";

    var currentPrice = document.createElement("p");
    currentPrice.innerText = elem.current_price ;
    currentPrice.style.color = "red";

    var mrp = document.createElement("p");
    mrp.innerText = elem.mrp ;
    mrp.style.textDecoration = "line-through";
    mrp.style.color = "grey";

    var discount = document.createElement("p");
    discount.innerText = elem.discount ;
    discount.style.color = "green";

    var price_line = document.createElement("div")
    price_line.className = "price-line";

    var cart_btn = document.createElement("button");
    cart_btn.innerText = "Add to Cart";
    cart_btn.setAttribute("class", "add_to_cart")  
    cart_btn.addEventListener("click", function(ele){
        addToCartBtn(ele)
    })

    var deli_line = document.createElement("div");
    deli_line.setAttribute("class","deli-line") 

    var d_img = document.createElement("img");
    d_img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Ftransportation-soft%2F512%2Ftruck_delivery_logistics_transportation_shipping_deliver_shipment_v3-512.png&f=1&nofb=1"
    d_img.setAttribute("class","deli-img")

    var d_time = document.createElement("p");
    d_time.innerText = elem.delivery_time ;
    d_time.style.textAlign = "center";
    d_time.setAttribute("class","dtime");



    deli_line.append(d_img,d_time)
    net_wt_line.append(netWt, pieces);
    price_line.append( currentPrice, mrp, discount, cart_btn);
    card.append(img, itemName, itemDes, net_wt_line, price_line, deli_line);
    document.querySelector("#main-container").append(card);

    // var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    // function addToCartBtn(ele){
    //     cartData.push(ele)
    //     localStorage.setItem("cartData",JSON.stringify(cartData))
    // }

})
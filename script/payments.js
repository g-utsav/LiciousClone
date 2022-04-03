var amount = JSON.parse(localStorage.getItem("amountPayable")) || 0;

document.querySelector("h2").innerText = `Total Amount is Rs ${amount}`;

document.querySelector("#form").addEventListener("submit", formSubmit);

function formSubmit(){
    event.preventDefault();
    
    var userName = document.querySelector("#cardName").value;
    var userNum = document.querySelector("#cardNumber").value;
    var date = document.querySelector("#date").value;
    var cvv = document.querySelector("#cvv").value;
    console.log(date,typeof date)
    var c =0
    if(userNum == 1234567890123456 && cvv == "123"){
        c++
    }else{
        alert("Enter valid Card Number and CVV")
        return;
    }
    if(c!=0 && userName != "" && date != ""){
        alert("Enter OTP")
        var div = document.createElement("div")
        div.setAttribute("id","otpdiv");
        var form = document.createElement("form");
        form.setAttribute("id","otp")
        
        var input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("placeholder","Enter OTP")
        input.setAttribute("id","otpForm")
        
        var button = document.createElement("input");
        button.setAttribute("value","Enter!")
        button.setAttribute("type","submit");
        
        div.append(input,button)
        form.append(div)
        document.querySelector("#container").append(form)
        
        document.querySelector("#otp").addEventListener("submit",otpCall);
        
    }else{
        alert("Enter Name and Date!")
    }

    function otpCall(){
        event.preventDefault()
        var otp = document.querySelector("#otpForm").value
        var c = localStorage.getItem("counter") || 0;
        if(otp == "1234"){
            alert("Payment Sucessful!\nMoving To Home Page")
            localStorage.setItem("counter",0)
            window.location.href="../index.html"
        }else{
            c++
            alert(`Try Again! ${c} of 3`);
            localStorage.setItem("counter",c);
        }
        console.log(c)
        if(c == 3){
            localStorage.setItem("counter",0)
            alert("Moving to Cart Payment Terminated\nToo many Tries")
            window.location.href="../index.html"
        }
    }
  
}
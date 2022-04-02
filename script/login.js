document.querySelector(".login-form").addEventListener("submit",loginform)

function regform(){
    event.preventDefault()

    var  usr = document.querySelector(".RegisterName")
    var  pass = document.querySelector(".RegisterPass")
    var email  = document.querySelector(".RegisterEmail")
    var  num = document.querySelector(".RegisterNumber")

    var obj = {
        name:usr.value,
        password:pass.value,
        email:email.value,
        number:num.value
    }
    var arr = []
    console.log(obj)
    arr.push(obj)
    localStorage.setItem("userCredential",JSON.stringify(arr))
    // alert("sucess")

    usr.value = ""
    pass.value = ""
    email.value = ""
    num.value = ""
}



function loginform(){
    
    event.preventDefault()
    var userData = JSON.parse(localStorage.getItem("userCredential")) || []
    console.log("sdfjks")
    if(!(Boolean(userData))){
        alert("Login First")
        return;
    }
    var usr = document.querySelector(".formName").value
    var pass = document.querySelector(".formPass").value

var c = 0
    userData.map(function(ele){

        if(ele.name == usr && ele.password == pass ){
                alert("Login Sucessful \n Moving to Home Page")
                window.location.href="../index.html"
                c++
                return;
        }
    })
    if(c==0)alert("User Name or Password Doesnt Match")

}
// login functionaligy
const login = document.getElementById("login-submit");
if (login != null)
{
    login.addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        console.log("user"+username+"pass"+password+"/");
        if (username != '' || username != null && password != '' || password != null){
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            console.log(sessionStorage.getItem('username'));
            window.location.replace("./index.html");
        }
    });
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin") {
        console.log("Login bem sucedido!");
        Swal.fire({
            icon: "success",
            title: "Login realizado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
          window.location.href = "main.html";
    } else {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nome de usuário ou senha incorretos"
        });
    }
  });
  

function logout() {
    window.location.href = "index.html";
}
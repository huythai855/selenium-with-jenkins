function validateLogin() {
    console.log("validating....")
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (!username && !password) {
        message.style.color = "red";
        message.textContent = "Vui lòng điền tên đăng nhập và mật khẩu.";
    } else if (!username) {
        message.style.color = "red";
        message.textContent = "Vui lòng điền tên đăng nhập.";
    } else if (!password) {
        message.style.color = "red";
        message.textContent = "Vui lòng điền mật khẩu.";
    } else if (username === "admin1" && password === "123456") {
        message.style.color = "green";
        message.textContent = "admin1 đăng nhập thành công!";
    } else if (username === "admin2" && password === "123456") {
        message.style.color = "green";
        message.textContent = "admin2 đăng nhập thành công!";
    } else {
        message.style.color = "red";
        message.textContent = "Tên đăng nhập và mật khẩu không đúng.";
    }
}

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // 验证用户名和密码，这里假设是硬编码的
    const validUsername = "3457522686";
    const validPassword = "123456789";

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === validUsername && passwordInput === validPassword) {
        // 存储登录状态到本地存储
        localStorage.setItem('isLoggedIn', 'true');
        alert("登录成功！");
        window.location.href = 'Home.html';
    } else {
        alert("登录失败，请检查用户名和密码");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // 检查localStorage中的登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn || isLoggedIn !== 'true') {
        // 如果未登录或登录状态无效，重定向到登录页面
        alert("请先登录");
        window.location.href = 'Login.html';
    } else {
        // 显示个人主页内容或执行其他操作
        console.log("欢迎回来，已登录用户！");
    }
});
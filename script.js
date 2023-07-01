const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('signup');

loginBtn.addEventListener('click',()=>{
    location.href='./login/index.html';
})

signBtn.addEventListener('click',()=>{
    location.href='./signup/index.html'
})

// //redirecting to login page
// document.querySelector("#login-btn").addEventListener("click", ()=>{
//     window.location.href="./login/index.html"
// })
// //redirecting to signup page
// document.querySelector("#signup-btn").addEventListener("click", ()=>{
//     window.location.href="./signup/index.html"
// })
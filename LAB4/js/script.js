

window.onload = function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const txtemail = document.getElementById("email");
        const txtpassword = document.getElementById("password");


        const email = txtemail.value;
        const password = txtpassword.value;


        document.getElementById("spnEmail").innerText = `Your email is ${email}`;
        document.getElementById("spnPwd").innerText = `Your email is ${password}`;



        txtemail.value = "";
        txtpassword.value = "";

    }
}

// window.onload = function () {
//     const loginForm = document.getElementById("loginForm");
//     loginForm.addEventListener("submit", event => {

//         const txtemail = document.getElementById("email");
//         const txtpassword = document.getElementById("password");
//         alert(`     
//        Customer txtemail:${txtemail.value},
//         Address:${txtpassword.value},
//      `);
//     });

// }




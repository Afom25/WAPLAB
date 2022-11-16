/**
 * mid term quiz
 */

"use strict";

window.onload = function () {

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", event => {
        event.preventDefault();

        const fName = document.getElementById("fName");
        const mName = document.getElementById("mName");
        const lName = document.getElementById("lName");
        const inputAddress = document.getElementById("inputAddress");
        const personalbio = document.getElementById("personalbio");
        const state = document.getElementById("state");
        const stuId = document.getElementById("stuId");

        const radioLevel = registrationForm.elements["radioLevel"];

        const formData = `

         Level of Study : ${radioLevel.value} 
         Applicant's FullName : ${fName.value} ${mName.value}  ${lName.value}
         Address : ${inputAddress.value}  ${personalbio.value}

         Applicat ID number : ${stuId.value}
         Course: ${state.value}
         `

            ;

        alert(formData);
        fName.value = "";
        mName.value = "";
        lName.value = "";
        inputAddress.value = "";
        personalbio.value = "";
        stuId.value = "";
        radioLevel.value = "";


    })

};
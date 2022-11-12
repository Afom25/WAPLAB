
/**
 * 
 */

"use strict";

window.onload = function () {

    const appForm = document.getElementById("appForm");
    appForm.addEventListener("submit", event => {
        event.preventDefault();

        const fullName = document.getElementById("fullName");
        const citizenId = document.getElementById("citizenId");
        const ssn = document.getElementById("ssn");
        const state = document.getElementById("state");
        const snrCitizen = appForm.elements["radioSnrCitizen"];

        const formData = `
        Full Name : ${fullName.value}
        Citizen ID : ${citizenId.value}
        Social Sec No : ${ssn.value}
        State : ${state.value}
        Is a Senior Citizen : ${snrCitizen.value}
        `

            ;

        alert(formData);
        fullName.value = "";
        citizenId.value = "";
        ssn.value = "";
        state.value = "";
        // snrCitizen.value = "";

    })

};
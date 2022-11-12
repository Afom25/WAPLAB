"use strict";
window.onload = function () {

    const accountForm = document.getElementById('bank-account-form');
    accountForm.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();
        let ownership;
        
        const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
        
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    ownership = radioButton.value;
                    break;
                }
            }


        const name = document.getElementById("inputName").value;
        const address = document.getElementById("inputAddress").value;
        const acctNo = document.getElementById("inputAccNo").value;
        const acctType = document.getElementById("inputAccType").value;

        alert(`
        Account Ownership Type: ${ownership}
        Customer FullName: ${name}
        Address: ${address}
        AccountNumber: ${acctNo}
        Type of Account: ${acctType}
        `);

    }
}
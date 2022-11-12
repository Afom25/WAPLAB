
//***
//QUIZ 2
//

window.onload = function () {
    const tenantForm = document.getElementById("tenantForm");
    tenantForm.addEventListener("submit", event => {

        const txtbuild = document.getElementById("buildingNo");
        const txtfloor = document.getElementById("floorNo");
        const txtapartment = document.getElementById("apartmentNo");
        const txttitle = document.getElementById("title");
        const txtfullname = document.getElementById("fullNames");
        const txtphoneNo = document.getElementById("phoneNo");
        const txtemail = document.getElementById("email");
        const txtdriver = document.getElementById("driversLicenceNo");

        const output = alert(`     
        Tenant Registration Date
        Building NO:${txtbuild.value},
        Floor:${txtfloor.value},
        Apartment:${txtapartment.value},
        Tenant Information
        Title:${txttitle.value},
        Full Names:${txtfullname.value},
        Phone No:${txtphoneNo.value},
        Email:${txtemail.value},
        Driver Licence No:${txtdriver.value},
     `);
        alert(output);

        txtbuild.value = "";
        txtfloor.value = "";
        txtapartment.value = "";
        txttitle.value = "";
        txtfullname.value = "";
        txtphoneNo.value = "";
        txtemail.value = "";
        txtdriver.value = "";
        txtbuild.focus();
    });

}

window.onload = function () {
    const newForm = document.getElementById("newForm");
    newForm.onsubmit = function (event) {
        event.preventDefault();

        const txtproduct = document.getElementById("product");
        const txtquantity = document.getElementById("quantity");
        const txtnewproduct = document.getElementById("nameproduct");
        const txtsupplier = document.getElementById("supplier");
        const txtprice = document.getElementById("price");
        const txtdate = document.getElementById("date");


        const product = txtproduct.value;
        console.log(product)
        const quantity = txtquantity.value;
        const nameproduct = txtnewproduct.value;
        const supplier = txtsupplier.value;
        const date = txtdate.value;
        const price = txtprice.value;




        document.getElementById("spnNewProduct").innerHTML = `product is      ${product}`;
        document.getElementById("spnName").innerHTML = ` quantity is          ${quantity}`;
        document.getElementById("spnQuntity").innerHTML = ` nameofProduct is   ${nameproduct}`;
        document.getElementById("spnSupplier").innerHTML = ` supplier is        ${supplier}`;
        document.getElementById("spnprice").innerHTML = `price                   ${price}`;
        document.getElementById("spndate").innerHTML = ` date purchased          ${date}`;




        txtproduct.value = "";
        txtquantity.value = "";
        txtnewproduct.value = "";
        txtsupplier.value = "";
        txtdate.value = "";
        txtprice.value = "";



    }
}



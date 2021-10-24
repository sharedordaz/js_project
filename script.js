function add_cart_1(){
    let Name = document.querySelector(".h41").innerHTML; // Get the name
    
    let price = document.querySelector(".p1").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total

    if (quantity == ""){
        alert("Please put a quantity");

    }

    else{
        let tr = document.createElement("tr"); //create trow

        let name_cell = document.createElement("td");
        name_cell.innerHTML = Name;

        let price_cell = document.createElement("td");
        price_cell.innerHTML = price;

        let quantity_cell = document.createElement("td");
        quantity_cell.innerHTML = quantity;

        let total_cell = document.createElement("td");
        total_cell.innerHTML = total;

        let cart = document.querySelector(".cart");
        cart.appendChild(tr);

        cart.appendChild(name_cell);
        cart.appendChild(price_cell);
        cart.appendChild(quantity_cell);
        cart.appendChild(total_cell);
}
}
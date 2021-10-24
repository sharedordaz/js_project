function add_cart_1(){
    let Name = document.querySelector("#1 h4").innerHTML; // Get the name
    let price = document.querySelector("#1 p").innerHTML; //Get the price
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    let total = price * quantity; //calculate total

    let tr = document.createElement("tr"); //create trow

    let name_cell = document.createElement("td");
    name_cell.innerHTML = Name;

    let price_cell = document.createElement("td");
    price_cell.innerHTML = price;

    let quantity_cell = document.createElement("td");
    quantity_cell.innerHTML = quantity;

    let total_cell = document.createElement("td");
    total_cell.innerHTML = total

    let cart = document.querySelector(".cart");
    cart.appendChild(tr);

    cart.appendChild(name_cell);
    cart.appendChild(price_cell);
    cart.appendChild(quantity_cell);
    cart.appendChild(total_cell);
}
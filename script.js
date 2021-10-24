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
    else if(isNaN(quantity)){
        alert("Please say a number")
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

function add_cart_2(){
    let Name = document.querySelector(".h42").innerHTML; // Get the name
    
    let price = document.querySelector(".p2").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
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

function add_cart_3(){
    let Name = document.querySelector(".h43").innerHTML; // Get the name
    
    let price = document.querySelector(".p3").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
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
function add_cart_4(){
    let Name = document.querySelector(".h44").innerHTML; // Get the name
    
    let price = document.querySelector(".p4").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
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
function add_cart_5(){
    let Name = document.querySelector(".h45").innerHTML; // Get the name
    
    let price = document.querySelector(".p5").innerHTML; //Get the price
    let n_price = price.replace("$", '');
    let quantity = document.querySelector(".desk_quantity").value; // Get the quantity
    console.log(quantity)
    let total = n_price * quantity; //calculate total

    if (quantity == ""){
        alert("Please put a quantity");

    }
    else if(isNaN(quantity)){
        alert("Please say a number")
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

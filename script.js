const itemsCatalog = {
    "689145740844":{
        itemName:"JavaScript Textbook", 
        price:34.95
    },
    "4549292070248":{
        itemName:"Xerox Paper", 
        price:10.99
    },
    "092265222983":{
        itemName:"First Aid Kit", 
        price:20.99
    },
    "X002ELVL3J":{
        itemName:"Box of Pencils (50ct.)", 
        price:15.99
    },
    "686024002468":{
        itemName:"Sanitizing Wipes", 
        price:10.99
    },
    "860004186236":{
        itemName:"N95 Face Masks", 
        price:15.99
    },
    "036000214000":{
        itemName:"Kleenex", 
        price:3.99
    },
    "8809693254156":{
        itemName:"Hand Sanitizer", 
        price:7.99
    },
    "036500060480":{
        itemName:"Printer Paper", 
        price:9.99
    },
    "085014561877":{
        itemName:"Brush Pens", 
        price:10.99
    },
    "X0032YGP2T":{
        itemName:"Multiport Adapter", 
        price:25.99
    },
    "B07G6JT1XS":{
        itemName:"Scissors", 
        price:23.99
    },
    "9780134682334":{
        itemName:"iOS Programming Textbook", 
        price:119.99
    },
    "718103230759":{
        itemName:"Spiral Notebook", 
        price:1.99
    },
    "551943":{
        itemName:"Pocketsized Human", 
        price:4.99
    },
    //I got this idea because a joke about me 
    //being "pocketsized for your convenience" then 
    //I thought about the items by checkouts
    //so I priced myself roughly at what those cost   
    //On Ishita's it's $0.01 so I can be bought in bulk lol :D
}
//1
let cartEmptyTxt = document.getElementById("cartEmpty")
let cartLs = document.getElementById("itemCartLs")
let barcodeInputs = document.getElementById("barcodeInput")
let numItems = document.getElementById("numOfItems")
let addToCart = document.getElementById("addCartButton")
let totalPelem = document.getElementById("totalPtax")
let subtotalPelem = document.getElementById("totalStax")
let subtotal = 0;
let total = 0;

//2

addToCart.addEventListener("click", findItem);
function findItem(){
    //3
    if(numItems.value <= 0){
        //3b
        alert("You need to have at least one Item to add it to the cart")
    }
    //3a
    else{
        const barcode = barcodeInputs.value;
        const quantity = parseInt(numItems.value)
        //3aiA
        if(itemsCatalog.hasOwnProperty(barcode)){
            //more variables
            const item = itemsCatalog[barcode];
            const itemName = item.itemName;
            const price = item.price;

            // Check if item is in cart
            const inCartQ = Array.from(cartLs.children).find(
                (child) => child.dataset.barcode === barcode
            );

            if (inCartQ){
                //update quantity for existing item
                const currentNum = parseInt(inCartQ.dataset.quantity);
                const newNum = currentNum + quantity;
                inCartQ.dataset.quantity = newNum;
                inCartQ.innerHTML = `${newNum} x ${itemName}: <span style = "float: right;"?> $${(newNum * price).toFixed(2)}</span>`;
            }else{
                //new cart item
                const cartItem = document.createElement("p");
                cartItem.dataset.barcode = barcode;
                cartItem.dataset.quantity = quantity;
                cartItem.innerHTML = `${quantity} x ${itemName}: <span style = "float: right;"?> $${quantity*price.toFixed(2)}<br></span>`;
                cartLs.appendChild(cartItem);
            }

            //Updates Subtotal
            subtotal += quantity*price;

            //clear input fields
            barcodeInputs.value = "";
            numItems.value = "1";

            cartEmptyTxt.innerHTML = "";
        }
        //3aiB
        else{
            alert("Barcode not registered");
        }
        subtotalPelem.innerHTML = "Subtotal: ";
        subtotalPelem.innerHTML += `$${subtotal.toFixed(2)}`;
    }
}

//
function checkout(){
    totalPelem.innerHTML = "Total: "
    total = subtotal*1.0925;
    //display subtotal and total in cart
    totalPelem.innerHTML += `$${total.toFixed(2)} (Tax~ 9.25%)`;
    //cartLs.appendChild(totalElement);
}

//checkout button
document.getElementById("checkoutButton").addEventListener("click", checkout);

/*
    Replace "It's empty here..." with the cart items
        //1. make too many variables
        //2. make a function to run onclick for add to cart
        //3. Read the input for number of items
            //a. determine if there's a positive quantity
                //i. depending on what barcode is inputted,
                     delete cartEmpty text and:
                    //A. If the barcode is registered, list
                         the Item, Quantity, and Price
                    //B. If not, alert that the barcode isn't
                         registered
            //b. if it's not positive, send alert

    As the items are added update the Subtotal
        //4. Read the "price" item in each of the ?objects?
        //5. Read quantity
            //a. multiply quantity by price
        //6. Add the adjusted amount to (update) the subtotal
    
    On Checkout print the Total
        //7. Make element for the total when checkout is clicked
*/

// MEeP
/* meEp */

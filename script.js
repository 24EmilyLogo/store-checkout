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

function findItem(){
    if(numItems <= 0){
        alert("You need to have at least one Item to add it to the cart")
    }else if(numItems > 0){
        if(itemsCatalog.hasOwnProperty(barcodeInputs)){
            //
        }else{
            //
        }
    }else{
        alert("Please input a quantity greater than 0")
    }
}
addToCart.addEventListener("click", findItem)
/*
    Replace "It's empty here..." with the cart items
        //1. make too many variables
        //2. make a function to run onclick for add to cart
        //3. depending on what barcode is inputted,
             delete cartEmpty text and:
            //a. If the barcode is registered, list
                 the Item, Quantity, and Price
            //b. If not, alert that the barcode isn't
                 registered
        //4. 
    As the items are added update the Subtotal
    On Checkout print the Total
*/

// MEeP
/* meEp */

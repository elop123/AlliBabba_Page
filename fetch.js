// globals

const myFeaturedElement= document.getElementById('featuredProducts');
const navElement= document.getElementById('navigation');

const basketIcon = document.getElementById('basketIcon');

 let myProducts =null;

 //page load
 GetProductData()
 GetCategoryData()


 //Model code

 function GetProductData(){

    fetch('https://dummyjson.com/products?limit=100')
    .then((result) => {
        return result.json();
    })
    .then((json) => {
        ProductsReceived(json);
        
    });
}

function GetCategoryData(){

    fetch('https://dummyjson.com/products/categories')
    .then((result) => {
        return result.json();
    })
    .then((json) => {
        //ReceivedCategoryData(json);
        categorySorter(json);
    });
}

//Controler code

function ProductsReceived(productData) {

    //console.log(productData)

 myProducts = productData.products

    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[0], myProducts[1], myProducts[2],myProducts[3],myProducts[4],myProducts[5])

    
    //console.log(myFeaturedProducts);

    CreateProductView(myFeaturedProducts)
        //CreateProductView(myProducts)
}

function CreateProductView(myCards) {
    console.log(myCards);
    //console.log(myCards);

    clearApp()
    
    myCards.forEach(product => {
        console.log(product);


    let myHTML = `<figure onclick="ProductCallback(${product.id})" >
    <img src="${product.thumbnail}">
    <h2>${product.title}</h2>
    <h3>PRICE: $ ${product.price}</h3> 
    <h4>SALE: ${product.discountPercentage}</h4>
    <button class="btn">BUY NOW</button></figure>`


    myFeaturedElement.innerHTML += myHTML
    });
}

function ProductCallback(myId) {
    console.log(myId);
    let myClickedProduct = null;
    myProducts.forEach(product => {
        if (product.id == myId) {
            myClickedProduct = product;
        }
    }
    )
    console.log(myClickedProduct);
    clearApp();
    buildProduct(myClickedProduct)
}

function buildProduct(product) {

    let myHTML = `<div><figure class="productCard" onclick="ProductCallback(${product.id})"</div >
    
    <img class="imageCard" src="${product.thumbnail}">
    <h2 class="titleCard">${product.title}</h2>
    <h3 class="priceCard">PRICE: $ ${product.price}</h3>
    <p class="descCard"><span>Description</span> :${product.description}</p>
    <button  class="btnCard" onclick="addtoCart()" class="btn">Add to Cart</button></figure>`


    myFeaturedElement.innerHTML = myHTML
}


function addtoCart(){
        let cartQuantity = document.getElementById("cartAmount");
        let newQuantity = parseInt(cartQuantity.innerHTML);
        cartQuantity.innerHTML = newQuantity + 1;
    }



function clearApp() {

}

function ReceivedCategoryData(myCategories){
    console.log(myCategories);

   CreateNavBar(myCategories);

}

function NavCallback(myCategory){
    // console.log(myCategory);
   
// if(myCategory ='all'){
//     CreateProductview(myProducts)
// } else{
//     console.log(myCategory);

    let mySelectedProducts=[]

    myProducts.forEach(product => {
    //console.log(product.category);

    if(myCategory==product.category){
    console.log(product.category);
    mySelectedProducts.push(product)
}
});
console.log(mySelectedProducts);
CreateProductView(mySelectedProducts)
}
    








//
function CreateProductview(myCards){
//console.log(myCards);
clearApp()

myCards.forEach(product =>{
    //console.log(product)

})


}

//Navigation bar
// controller 
function categorySorter(categoriesToSort) {
    //console.log("sort");

    // hoved kategori arrays
    let myElectronics = []
    let myCosmetics = []
    let myHome = []
    let myWomen = []
    let myMen = []
    let myVehicles = []
    let myAccesories = []
    let myGroceries = []
    let myMisc = []

    categoriesToSort.forEach(category => {

        switch (category) {

            case 'laptops':
            case 'lighting':
            case 'smartphones':
            console.log('electronics');
                myElectronics.push(category)
                break;

            case 'fragrances':
            case 'skincare':
            console.log('Care');
                myCosmetics.push(category)
                break;

            case 'furniture':
            case 'home-decoration':
            console.log('home');
                myHome.push(category)
                break;
            
            case 'tops':
            case 'womens-dresses':
            case 'womens-shoes':
            console.log('women');
                myWomen.push(category)
                break;

            case 'mens-shirts':
            case 'mens-shoes':
                console.log('men');
                myMen.push(category)
                break;

            case 'mens-watches':
            case 'womens-watches':
            case 'womens-bags':
            case 'womens-jewellery':
            case 'sunglasses':
                console.log('accesories');
                myAccesories.push(category)
                break;

            case 'automotive':
            case 'motorcycle':
                myVehicles.push(category)

                break;

            case 'groceries':
                myGroceries.push(category)
                break;

            default:

                myMisc.push(category)
                break;
        }

    });

    /* console.log(myElectronics);
    console.log(myCosmetics);
    console.log(myVehicles);
    console.log(myMisc); */

    // build datastructure to view code
    let myNavigationData = [
        {
            superCategoryname: 'Electronics',
            subCategories: myElectronics
        },
        {
            superCategoryname: 'Cosmetics',
            subCategories: myCosmetics
        },
        {
            superCategoryname: 'Home',
            subCategories: myHome
        },
        {
            superCategoryname: 'Women',
            subCategories: myWomen
        },
        {
            superCategoryname: 'Men',
            subCategories: myMen
        },
        {
            superCategoryname: 'Accesories',
            subCategories: myAccesories
        },
        {
            superCategoryname: 'Vehicles',
            subCategories: myVehicles
        },
        {
            superCategoryname: 'Groceries',
            subCategories: myGroceries
        },
        {
            superCategoryname: 'misc',
            subCategories: myMisc
        }

    ]

    BuildNavigation(myNavigationData);

}

//view code

//  function CreateNavBar(myCategories){
    
//      //  //navElement
    
//      let myHTML=`<button onclick="NavCallback('all')">All</button>`;
   
//      myCategories.forEach(element => {
//          console.log(element);
//           myHTML +=`<button onclick="NavCallback('${element}')">${element}</button>`
       
//       });
//        navElement.innerHTML = myHTML
   
//      }

// view
//  function BuildNavigation(myNavigationData) {

//     // hvor skal vi bygge navigation
   

//      myNavigationData.forEach(superCatData => {

//          // ul from category array
//          let myNavElement = document.getElementById('navigation')
         
//          let mySubCats = '<ul>';
//          superCatData.subCategories.forEach(subCatName => {
//              let myListElement = `<li><div class="navRollover"onClick="navCallback('${subCatName}')">${subCatName}</div></li>`
//              mySubCats += myListElement
//          });
//          mySubCats += '</ul>'

//          //console.log(mySubCats);
//          //console.log(superCat.superCategoryname);
//          let myCatHTML = `<div class="navCategories">
//          <h3 class="navRollover" onClick="navCallback('${superCatData.superCategoryname}')">${superCatData.superCategoryname}</h3>
//          ${mySubCats}
//          </div>`
//          navElement.innerHTML += myCatHTML
//      });



//  }



function BuildNavigation(myNavigationData) {

    // hvor skal vi bygge navigation
    let myNavElement = document.getElementById('navigation')

    myNavigationData.forEach(superCatData => {

        // ul from category array

        let mySubCats = '<ul>'
        superCatData.subCategories.forEach(subCatName => {
            let myListElement = `<li><div class="navRollover"onClick="NavCallback('${subCatName}')">${subCatName}
            </div></li>`
            mySubCats += myListElement
        });
        mySubCats += '</ul>'

        //console.log(mySubCats);
        //console.log(superCat.superCategoryname);
        let myCatHTML = `<div class="navCategories"><h3 class="navRollover" onClick="NavCallback('${superCatData.superCategoryname}')">${superCatData.superCategoryname}</h3>
        ${mySubCats}
        </div>`
        myNavElement.innerHTML += myCatHTML
    });
}



function clearApp(){
    myFeaturedElement.innerHTML="";
}

function navCallback(myItem) {
    //console.log(myItem);

}
//Local storage

function InitializeBasket() {
//myBasket

let myBasket = localStorage.getItem('myBasket')
}


function ReadLocalStorageData() {

    let mybasketstring = localStorage.getItem('myBasket')
    
    let myBasket = JSON.parse(mybasketstring)
    return myBasket
}

function SaveBasketData(basketData) {
    let mySerializedData = JSON.stringify(basketData)
    localStorage.setItem('myBasket', mySerializedData)
}

// // Local Storage Cart

// let cart = localStorage.setItem("cart", JSON.stringify(cart.items))
// //Save cart in Local Storage

 // localStorage.setItem("cart", JSON.stringify(cart.items))
    
// //Load cart from local storage

// function loadCart(){
// cart.items = localStorage.getItem("cart");
// if (cart.items == null) { cart.items = {}; }
// else { cart.items = JSON.parse(cart.items);}};


// function BuildBasket(products) {
//     clearApp()

//     let myBasketHTML = document.getElementById('basket')
//     if (products.length > 0) {
//         products.forEach(product => {
//              console.log(product);

//             let myHTML = `<figure><img src="${product.thumbnail}"><h2>${product.title}</h2><p>PRIS: ${product.price}</p><button onclick="BasketRemove(${product.id})">remove</button></figure>`


//             myBasketHTML += myHTML
//         })
//         myBasketHTML += `<section id="basketTools"><button onclick="paymentCallBack()">Go to payment</button><button onclick="BasketClear()">clear basket</button></section>`
//     } else {
//         myBasketHTML += `<h1>basket empty go buy stuff</h1><button onclick="GetProductData()">OK</button>`

//     }

//     myBasketHTML += '</section>'

//     productSection.innerHTML = myBasketHTML
// }


// Function to toggle sidebar
function toggleSidebar() {
    document.getElementById("mySidebar").style.width = "350px";
}

// Function to close sidebar
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}

// Your existing code...

let openCart = () => {
    let shoppingCart = document.getElementById("shopping-cart");
    // Clear previous content
    shoppingCart.innerHTML = "";

    // Example items (replace this with your actual cart items)
    let cartItems = [  {id: 3, title: 'Samsung Universe 9', price: 1249, 
    image: src="product-images/3/thumbnail.jpg"}];

    // Loop through items in the cart and display them
    cartItems.forEach(item => {
        let cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        cartItemElement.innerHTML = `
            <img  src="${item.image}">
            <div class="item-details">
                <span>ID: ${item.id}</span>
                <span>Name: ${item.title}</span>
                <span>Price: ${item.price}</span>
                <button class="btnshop" onclick="removeItem(${item.id})" width=20px>Remove</button>
            </div>
        `;

        shoppingCart.appendChild(cartItemElement);
    });

    // Add checkout button
    let checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.classList.add("checkout-button");
    shoppingCart.appendChild(checkoutButton);
};

// Example function to remove item (replace this with your actual implementation)
let removeItem = (itemId) => {
    console.log("Remove item with ID: " + itemId);
};

// Call openCart function to display the shopping cart
openCart();

// Function to add an item to the cart
function addToCart(item) {
    // Add the item to the cartItems array
    cartItems.push(item);
    // Update the cart icon or any other UI to reflect the new item count
    updateCartUI();
}

// Function to update the UI to reflect the current cart count
function updateCartUI() {
    let cartQuantity = document.getElementById("cartAmount");
    cartQuantity.innerHTML = cartItems.length;
}


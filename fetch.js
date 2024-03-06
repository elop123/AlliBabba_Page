// globals

const myFeaturedElement= document.getElementById('featuredProducts');
const navElement= document.getElementById('navigation');

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
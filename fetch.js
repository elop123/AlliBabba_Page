// globals

const myFeaturedElement= document.getElementById('featuredProducts');
const navElement= document.getElementById('navigation');

 let myProducts =null;

 //page load
 GetProductData()
 GetCategoryData()


 //Model view code

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
        ReceivedCategoryData(json);
    });
}

//Controler code

function ProductsReceived(productData) {

    //console.log(productData)

 myProducts = productData.products

    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[2], myProducts[10], myProducts[16])

    
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


    let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`


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

    let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price}</h3></figure>`


    myFeaturedElement.innerHTML = myHTML
}


function clearApp() {

}

function ReceivedCategoryData(myCategories){
    console.log(myCategories);

   CreateNavBar(myCategories);

}

function NavCallBack(myCategory){
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
    


//view code

function CreateNavBar(myCategories){
//navElement
let myHTML=`<button onclick="NavCallBack('all')">All</button>`;

myCategories.forEach(element => {
    console.log(element);
    myHTML +=`<button onclick="NavCallBack('${element}')">${element}</button>`
    
});
navElement.innerHTML = myHTML

}

//
function CreateProductview(myCards){
//console.log(myCards);
clearApp()

myCards.forEach(product =>{
    //console.log(product)

})


}


function clearApp(){
    myFeaturedElement.innerHTML="";
}
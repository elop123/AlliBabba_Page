// Step 1: Define a data structure (an array of purchases)
let userPurchases = [];

// Step 2: Convert the data structure to a JSON string
function savePurchasesToLocal() {
    const purchasesJSON = JSON.stringify(userPurchases);
    localStorage.setItem('userPurchases', purchasesJSON);
}

// Step 3: Save the JSON string to local storage
function addUserPurchase(purchase) {
    userPurchases.push(purchase);
    savePurchasesToLocal();
}

// Step 4: Retrieve the JSON string from local storage and parse it back into a JavaScript object
function loadPurchasesFromLocal() {
    const purchasesJSON = localStorage.getItem('userPurchases');
    if (purchasesJSON) {
        userPurchases = JSON.parse(purchasesJSON);
    }
}

// Load purchases when the script runs (if there are any stored)
loadPurchasesFromLocal();

// Assume purchase is an object representing a purchase
const purchase = {
    id: 1,
    item: "Product Name",
    price: 10.99
};

addUserPurchase(purchase);

// Now the purchase is added to the userPurchases array and saved to local storage

(function () {
    "use strict";

    let storeContainerEl = document.getElementById("store-items-container");
    let itemContainersEl = document.getElementsByClassName("item-container");
    let cartContainerEl = document.getElementById("cart-container");
    let cartItemsContainerEl = document.getElementById("cart-items-container");
    let cartItemContainerEl = document.getElementsByClassName("cart-item-container");
    let itemsEl = document.getElementsByClassName("item");
    let itemAddBtnEl = document.getElementById("add-item-btn");
    let itemRemoveBtnEl = document.getElementById("remove-item-btn");
    let cartBtnEl = document.getElementById("cart-btn");
    let totalCostEl = document.getElementById("total-cost");
    let checkoutBtnEl = document.getElementById("checkout-btn");
    let selectedItem = null;

    let items = [
        {id: 0, name: 'Blocks', price: 1.00, imgURL: './img/store-images/blocks.png'},
        {id: 1, name: 'Batman Figurine', price: 5.50, imgURL: './img/store-images/batman.png'},
        {id: 2, name: 'Spiderman Figurine', price: 5.50, imgURL: './img/store-images/spiderman.png'},
        {
            id: 3,
            name: "Captain America's Shield",
            price: 12.50,
            imgURL: './img/store-images/captain-america-shield.png'
        },
        {id: 4, name: 'Superman', price: 5.50, imgURL: './img/store-images/superman.png'},
        {id: 5, name: 'Stuffed Teddy', price: 4.00, imgURL: './img/store-images/teddy-bear.png'},
        {id: 6, name: 'Stuffed Panda', price: 4.00, imgURL: './img/store-images/panda-bear.png'},
        {id: 7, name: 'Yo-yo', price: 6.75, imgURL: './img/store-images/yoyo.png'},
        {id: 8, name: 'Basketball', price: 16.50, imgURL: './img/store-images/basketball.png'},
        {id: 9, name: 'Soccer Ball', price: 14.50, imgURL: './img/store-images/soccer-ball.png'},
        {id: 10, name: 'Green Doll', price: 4.00, imgURL: './img/store-images/doll-green.png'},
        {id: 11, name: 'Pink Doll', price: 4.00, imgURL: './img/store-images/doll-pink.png'},
        {id: 12, name: 'Car', price: 230.00, imgURL: './img/store-images/car.png'},
        {id: 13, name: 'Blue Helmet', price: 8.00, imgURL: './img/store-images/helmet-blue.png'},
        {id: 14, name: 'Pink Helmet', price: 8.00, imgURL: './img/store-images/helmet-pink.png'},
        {id: 15, name: 'Bike', price: 65.00, imgURL: './img/store-images/bike.png'},
        {id: 16, name: 'Baseball Ball', price: 6.50, imgURL: './img/store-images/baseball-ball.png'},
        {id: 17, name: 'Bat', price: 19.50, imgURL: './img/store-images/bat.png'},
        {id: 18, name: 'Tan Dog', price: 175.00, imgURL: './img/store-images/dog.png'},
        {id: 19, name: 'Cat', price: 120.00, imgURL: './img/store-images/cat.png'},
        {id: 20, name: 'Brown Dog', price: 175.00, imgURL: './img/store-images/dog-brown.png'},
        {id: 21, name: 'Turtle', price: 50.00, imgURL: './img/store-images/turtle.png'},
        {id: 22, name: 'Rabbit', price: 70.00, imgURL: './img/store-images/rabbit.png'},
        {id: 23, name: 'Kitten', price: 140.00, imgURL: './img/store-images/kitten.png'},
        {id: 24, name: 'Dolls House', price: 90.00, imgURL: './img/store-images/dolls-house.png'},
        {id: 25, name: 'Duck', price: 2.50, imgURL: './img/store-images/duck.png'},
        {id: 26, name: 'Motorcycle', price: 200.00, imgURL: './img/store-images/motorcycle.png'},
        {id: 27, name: 'Stylish Sunglasses', price: 12.00, imgURL: './img/store-images/sunglasses-1.png'},
        {id: 28, name: 'Black Sunglasses', price: 10.00, imgURL: './img/store-images/sunglasses-2.png'},
        {id: 29, name: 'Xbox', price: 500.00, imgURL: './img/store-images/xbox.png'},
        {id: 30, name: 'Playstation 4', price: 400.00, imgURL: './img/store-images/ps4.png'},
        {id: 31, name: 'Nintendo Switch', price: 300.00, imgURL: './img/store-images/nintendo-switch.png'},
        {id: 32, name: 'Laptop', price: 600.00, imgURL: './img/store-images/laptop.png'},
        {id: 33, name: 'Telescope', price: 95.00, imgURL: './img/store-images/telescope.png'},
        {id: 34, name: 'Makeup Kit', price: 20.00, imgURL: './img/store-images/makeup-kit.png'},
        {id: 35, name: 'Vanity Mirror', price: 80.00, imgURL: './img/store-images/vanity-mirror.png'},
        {id: 36, name: 'Skates', price: 38.00, imgURL: './img/store-images/skate.png'},
        {id: 37, name: 'Tiara', price: 25.00, imgURL: './img/store-images/tiara.png'},
    ];

    // A cart to store items to purchase
    let cart = [];

    let displayShopItems = function (itemsArray) {
        let htmlString = "";
        itemsArray.forEach((item) => {
            htmlString += `<div class="d-flex flex-column item-container align-items-center justify-content-between text-center my-1 mx-1"><p class="my-2">${item.name}</p>
            <img class="item" src="${item.imgURL}" alt="">
            <p class="my-2">Cost: $${item.price.toFixed(2)}</p>
        </div>`
        });
        storeContainerEl.innerHTML = htmlString;
    };

    let displayCartItems = function (cartArray) {
        let htmlString = "";
        cartArray.forEach((item) => {
            htmlString += `<div class="d-flex flex-column cart-item-container align-items-center justify-content-between text-center my-1 mx-1"><p class="my-2">${item.name}</p>
            <img class="item" src="${item.imgURL}" alt="">
            <p class="my-2">Cost: $${item.price.toFixed(2)}</p>
        </div>`
        });
        cartItemsContainerEl.innerHTML = htmlString;
    };

    let itemClicked = function () {
        for (let i = 0; i < itemContainersEl.length; i++) {
            itemContainersEl[i].addEventListener("click", function () {
                    // Loop through the items array to see if the imgURL matches the clicked item
                    // If it matches, then set it as the selected item
                    let clickedItem = itemContainersEl[i].getElementsByClassName("item")[0];
                    items.forEach(function (item, id) {
                        // Set the clicked item when user clicks the item container
                        if (item.imgURL === clickedItem.getAttribute("src")) {
                            selectedItem = items[id];
                        }
                    });

                    // At each iteration, check to see if there is already an active container and only allow 1 active container.
                    if (itemContainersEl[i].classList.contains("item-container-active")) {
                        itemContainersEl[i].classList.toggle("item-container-active");
                        // Sets selectedItem as null because it was unselected.
                        selectedItem = null;
                    } else {
                        removeAllSelection();
                        itemContainersEl[i].classList.toggle("item-container-active");
                    }
                }
            );
        }
    };

    let addButtonClicked = function () {
        itemAddBtnEl.addEventListener("click", function () {
            if (selectedItem === null) {
                // console.log(selectedItem);
                alert("Please select an item to add to the cart!");
            } else {
                console.log(selectedItem);
                cart.push(selectedItem);
                alert(`Added ${selectedItem.name} to the cart.`)
            }
        });
    };

    let removeButtonClicked = function () {
        itemRemoveBtnEl.addEventListener("click", function () {
            if (selectedItem === null) {
                // console.log(selectedItem);
                alert("Please select an item to remove.");
            } else {
                let newCart = [];
                let removed = false;
                cart.forEach((item, index) => {
                    // remove item if found in the cart
                    if (item.name === selectedItem.name && !removed) {
                        newCart = cart.slice(0, index).concat(cart.slice(index + 1));
                        cart = newCart;
                        removed = true;
                        alert(`Removed ${selectedItem.name} from the cart.`)
                    }
                });
                if (!removed) {
                    alert(`${selectedItem.name} is not in the cart.`)
                }
            }
        });
    };

    let cartBtnClicked = function () {
        cartBtnEl.addEventListener("click", function () {
            if (cartContainerEl.classList.contains("close-cart-modal")) {
                itemAddBtnEl.style.display = "none";
                itemRemoveBtnEl.style.display = "none";
                checkoutBtnEl.style.display = "block";
            } else {
                itemAddBtnEl.style.display = "block";
                itemRemoveBtnEl.style.display = "block";
                checkoutBtnEl.style.display = "none";
            }
            updateTotal();
            displayCartItems(cart);
            cartModalTrigger();
        })
    };

    let updateTotal = function () {
        let totalCost = 0;
        cart.forEach((item) => {
            totalCost += item.price;
        });
        totalCostEl.innerHTML = `Total cost: $${totalCost.toFixed(2)}`;
    };

    let cartModalTrigger = function () {
        cartContainerEl.classList.toggle("open-cart-modal");
        cartContainerEl.classList.toggle("close-cart-modal");
    };

    let removeAllSelection = function () {
        for (let i = 0; i < itemContainersEl.length; i++) {
            itemContainersEl[i].classList.remove("item-container-active");
        }
    };

    displayShopItems(items);
    itemClicked();
    cartBtnClicked();
    addButtonClicked();
    removeButtonClicked();
})();
const searchButton = document.querySelector(".search-btn");
const dropDown = document.querySelector(".dropdown");
const cancelButton = document.querySelector(".cancel-btn");
const footer = document.querySelector(".footer");

searchButton.addEventListener("click", function() {
  dropDown.style.display = "block";
  suggCont.style.display = "none";
  footer.style.display = "none";
})
cancelButton.addEventListener("click",function() {
  dropDown.style.display = "none";
  searchBar.value = "";
  xBtn.style.display = "none";
  footer.style.display = "inherit";
  noResults.style.display = "none";
  resultText.innerText = "Popular Now";
  for(let i = 0; i < suggestions.length; i++){
    suggestions[i].style.display = "none";
  }
  suggCont.style.display = "none";
})

const xBtn = document.querySelector(".xbtn");
const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", function() {
  if(searchBar.value.length <= 0){
    xBtn.style.display = "none";
  }
  else{
    xBtn.style.display = "block";
  }
})

xBtn.addEventListener("click", function() {
  searchBar.value = "";
  xBtn.style.display = "none";
  resultText.innerText = "Popular Now";
  popularWrapper.style.display = "flex";
  popularWrapper.classList.remove("sugg-appear");
  noResults.style.display = "none";
  for(let i = 0; i < suggestions.length; i++){
    suggestions[i].style.display = "none";
  }
  suggCont.style.display = "none";
})

const suggestions = document.querySelectorAll(".suggestion");
const suggCont = document.querySelector(".suggestions-wrapper");
const resultText = document.querySelector(".result-text");
const noResults = document.querySelector(".no-results-alert");
let count;

searchBar.addEventListener("keyup", function(){
  count = 0;

  for(let i = 0; i < suggestions.length; i++){
    currentHTML = suggestions[i].innerText.toLowerCase();
    if(currentHTML.includes(searchBar.value.toLowerCase())){
      suggestions[i].style.display = "flex";
      count++;
    }
    else{
      suggestions[i].style.display = "none";
    }
  }
  if(searchBar.value.length < 1){
    suggCont.style.display = "none";
    resultText.innerText = "Popular Now";
    popularWrapper.style.display = "flex";
    popularWrapper.classList.remove("sugg-appear");
  }
  else{
    suggCont.style.display = "flex";
    resultText.innerText = "Results";
    popularWrapper.style.display = "none";
  }
  if(count == 0){
    noResults.style.display = "block";
  }
  else{
    noResults.style.display = "none";
  }
})

const popularWrapper = document.querySelector(".popular-wrapper");

dropDown.addEventListener("animationend", function(){
  popularWrapper.style.display = "flex";
  popularWrapper.classList.add("sugg-appear");
})

let bagLength;
let bagItemID;


window.addEventListener("load", function(){
  bagLength = parseInt(localStorage.getItem("bagLength"));
  console.log("bag length is " + bagLength)
  bagItemID = parseInt(localStorage.getItem("currBagID"));
  console.log("current bag item id is " + bagItemID)
})



const bagItemContainer = document.querySelector(".bag-item-container");
const bagCountAlert = document.querySelector(".bag-count-alert");
const noItemsMessage = document.querySelector(".no-items-message");

let bagItemImage;
let bagItemName;
let bagItemPrice;
let bagItemSize;
let bagItemID2;

let currBagItem;
let currBagItemArr;

let bagTotal = 0;
const subTotal = document.querySelector(".subtotal-value");

window.addEventListener("load", function(){
  for(let i = 0; i < localStorage.length; i++){
    currBagItem = localStorage.getItem(localStorage.key(i));
    
    if(parseInt(currBagItem) != bagLength && parseInt(currBagItem) != bagItemID){
      currBagItemArr = currBagItem.split(",");

      bagItemImage = currBagItemArr[0];
      
      bagItemName = currBagItemArr[1];
      
      bagItemPrice = currBagItemArr[2];
      
      bagItemSize = currBagItemArr[3];

      bagItemID2 = currBagItemArr[4];
      let newBagItem = document.createElement("div");

      newBagItem.classList.add("bag-item");
      bagItemContainer.append(newBagItem);

      let newBagItemImage = document.createElement("div");
      newBagItemImage.classList.add("bag-item-image");
      newBagItemImage.style.backgroundImage = "url("+bagItemImage+")";
      newBagItem.append(newBagItemImage);

      let newBagItemDetails = document.createElement("div");
      newBagItemDetails.classList.add("item-details");
      newBagItem.append(newBagItemDetails);

      let newBagItemName = document.createElement("p");
      newBagItemName.classList.add("name");
      newBagItemName.innerText = bagItemName;
      newBagItemDetails.append(newBagItemName);

      let newBagItemSize = document.createElement("p");
      newBagItemSize.classList.add("size");
      newBagItemSize.innerText = "Size: " + bagItemSize;
      newBagItemDetails.append(newBagItemSize);

      let quantityCont = document.createElement("form");
      quantityCont.classList.add("quantity");
      newBagItemDetails.append(quantityCont);

      let quantityLabel = document.createElement("p");
      quantityLabel.classList.add("quantity-label");
      quantityLabel.innerText = "Quantity";
      quantityCont.append(quantityLabel);

      let newQuantitySelector = document.createElement("select");
      newQuantitySelector.classList.add("select-quantity")
      quantityCont.append(newQuantitySelector);

      let optionOne = document.createElement("option");
      optionOne.innerText = "1";
      optionOne.value = 1;
      newQuantitySelector.append(optionOne)

      let optionTwo = document.createElement("option");
      optionTwo.innerText = "2";
      optionTwo.value = 2;
      newQuantitySelector.append(optionTwo)

      let optionThree = document.createElement("option");
      optionThree.innerText = "3";
      optionThree.value = 3;
      newQuantitySelector.append(optionThree)

      let optionFour = document.createElement("option");
      optionFour.innerText = "4";
      optionFour.value = 4;
      newQuantitySelector.append(optionFour)

      let optionFive = document.createElement("option");
      optionFive.innerText = "5";
      optionFive.value = 5;
      newQuantitySelector.append(optionFive)

      let newRemoveButton = document.createElement("button");
      newRemoveButton.classList.add("remove-item-btn");
      newRemoveButton.innerText = "Remove";
      newBagItemDetails.append(newRemoveButton);

      let newBagItemPrice = document.createElement("p");
      newBagItemPrice.classList.add("price");
      newBagItemPrice.innerText = bagItemPrice + ".00";
      newBagItem.append(newBagItemPrice);

      let bagIdEl = document.createElement("p");
      bagIdEl.classList.add("id");
      bagIdEl.innerText = bagItemID2;
      newBagItemDetails.append(bagIdEl);

      newRemoveButton.addEventListener("click", function(){
        localStorage.removeItem("Bag Item " + bagIdEl.innerText);
        newRemoveButton.parentElement.parentElement.remove();
        console.log(newRemoveButton.parentElement.parentElement)
        let currBagNumber = parseInt(localStorage.getItem("bagLength"));
        currBagNumber--;
        if (currBagNumber <= 0){
          currBagNumber = 0;
        }
        if(localStorage.length === 2){
          localStorage.setItem("currBagID", 0);
        }
        if(localStorage.length > 2){
          bagCountAlert.style.display = "block";
          bagCountAlert.innerHTML = localStorage.length - 2;
          noItemsMessage.style.display = "none";
        }
        else{
          bagCountAlert.style.display = "none";
          noItemsMessage.style.display = "block";
        }
        localStorage.setItem("bagLength", currBagNumber)
        console.log(localStorage);
      })

      newRemoveButton.addEventListener("click", function(){
        let itemPrices = document.querySelectorAll(".price");
        bagTotal = 0;
        for (let i = 0; i < itemPrices.length; i ++){
          bagTotal += parseInt(itemPrices[i].innerText.substring(1));
        }
        if(bagTotal == 0){
          subTotal.innerText = "-";
        }
        else{
          subTotal.innerText = "$" + bagTotal + ".00";
        }
      })

      let itemPriceEl = newQuantitySelector.parentElement.parentElement.parentElement.children[2];
      let itemPrice = parseInt(itemPriceEl.innerText.substring(1,4));

      newQuantitySelector.addEventListener("change", function(){
        let quanValue = parseInt(newQuantitySelector.value);
        let itemCost = quanValue * itemPrice;
        itemPriceEl.innerText = "$" + itemCost + ".00";

        let itemPrices = document.querySelectorAll(".price");
        bagTotal = 0;
        for (let i = 0; i < itemPrices.length; i ++){
          bagTotal += parseInt(itemPrices[i].innerText.substring(1));
        }
        if(bagTotal == 0){
          subTotal.innerText = "-";
        }
        else{
          subTotal.innerText = "$" + bagTotal + ".00";
        }

      })

    }
  }
    if (bagTotal == 0){
      subTotal.innerText = ("-");
    }
    let itemPrices = document.querySelectorAll(".price");
    for (let i = 0; i < itemPrices.length; i ++){
      bagTotal += parseInt(itemPrices[i].innerText.substring(1));
      }
    if(bagTotal == 0){
        subTotal.innerText = "-";
    }
    else{
      subTotal.innerText = "$" + bagTotal + ".00";
    }

    console.log(bagTotal);
})


window.addEventListener("load", function(){
  if(localStorage.length > 2){
    bagCountAlert.style.display = "block";
    bagCountAlert.innerHTML = localStorage.length - 2;
    noItemsMessage.style.display = "none";
  }
  else{
    noItemsMessage.style.display = "block";
  }
})

const emailSubmitButton = document.querySelector(".email-submit");
const emailInput = document.querySelector("#email-input");
const submitMessage = document.querySelector(".submit-message");

emailSubmitButton.addEventListener("click", function(){
  if(emailInput.value.includes("@") && emailInput.value.includes(".com")){
    submitMessage.innerText = "Thank you for signing up for emails."
    submitMessage.style.color = "white";
    submitMessage.style.display = "block";
    emailInput.value = "";
  }
  else{
    submitMessage.innerText = "Please enter a valid email address."
    submitMessage.style.color = "red";
    submitMessage.style.display = "block";
  }
})




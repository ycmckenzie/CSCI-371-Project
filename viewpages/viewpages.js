const searchButton = document.querySelector(".search-btn");
const dropDown = document.querySelector(".dropdown");
const cancelButton = document.querySelector(".cancel-btn");
const mainContent = document.querySelector(".main-content");
const suggContainer = document.querySelector(".suggested-container");
const footer = document.querySelector(".footer");

searchButton.addEventListener("click", function() {
  dropDown.style.display = "block";
  suggCont.style.display = "none";
  mainContent.style.display = "none";
  footer.style.display = "none";
  suggContainer.style.display = "none";
})
cancelButton.addEventListener("click",function() {
  dropDown.style.display = "none";
  searchBar.value = "";
  xBtn.style.display = "none";
  mainContent.style.display = "flex";
  noResults.style.display = "none";
  resultText.innerText = "Popular Now";
  suggContainer.style.display = "block";
  footer.style.display = "inherit";
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

window.addEventListener("onload", function(){
  shoeCount = 1;
})

const shoeImgOne = document.querySelector(".shoeimg1");
const shoeImgTwo = document.querySelector(".shoeimg2");
const shoeImgThree = document.querySelector(".shoeimg3");
const shoeImgFour = document.querySelector(".shoeimg4");
const shoeImgs = document.querySelectorAll(".shoeimg");
const rightToggle = document.querySelector(".rightarrowtoggle");
const leftToggle = document.querySelector(".leftarrowtoggle");
let shoeCount = 1;

rightToggle.addEventListener("click", function(){
  shoeCount++;
  if(shoeCount == 1){
    shoeImgOne.style.display = "block";
    shoeImgTwo.style.display = "none";
    shoeImgThree.style.display = "none";
    shoeImgFour.style.display = "none";
  }
  else if(shoeCount == 2){
    shoeImgTwo.style.display = "block";
    shoeImgOne.style.display = "none";
    shoeImgThree.style.display = "none";
    shoeImgFour.style.display = "none";
  }
  else if(shoeCount == 3){
    shoeImgThree.style.display = "block";
    shoeImgOne.style.display = "none";
    shoeImgTwo.style.display = "none";
    shoeImgFour.style.display = "none";
  }
  else{
    shoeImgFour.style.display = "block";
    shoeImgOne.style.display = "none";
    shoeImgTwo.style.display = "none";
    shoeImgThree.style.display = "none";
    shoeCount = 0;
  }
})

leftToggle.addEventListener("click", function(){
  shoeCount--;
  if(shoeCount == 1){
    shoeImgOne.style.display = "block";
    shoeImgTwo.style.display = "none";
    shoeImgThree.style.display = "none";
    shoeImgFour.style.display = "none";
  }
  else if(shoeCount == 2){
    shoeImgTwo.style.display = "block";
    shoeImgOne.style.display = "none";
    shoeImgThree.style.display = "none";
    shoeImgFour.style.display = "none";
  }
  else if(shoeCount == 3){
    shoeImgThree.style.display = "block";
    shoeImgOne.style.display = "none";
    shoeImgTwo.style.display = "none";
    shoeImgFour.style.display = "none";
  }
  else{
    shoeImgFour.style.display = "block";
    shoeImgOne.style.display = "none";
    shoeImgTwo.style.display = "none";
    shoeImgThree.style.display = "none";
    shoeCount = 4;
  }
})
const selecSizeMessage = document.querySelector(".select-size-message");
const bagButton = document.querySelector(".bag-btn");
const sizeButtons = document.querySelectorAll(".si-radiobtn");
let selectedSize;
let sizeSelected = false;

bagButton.addEventListener("click", function(){
  for (let i = 0; i < sizeButtons.length; i++){
    if(sizeButtons[i].checked == true){
      selectedSize = sizeButtons[i].nextElementSibling.innerText;
      sizeSelected = true;
      selecSizeMessage.style.display = "none";
    }
  }
  if(sizeSelected == false){
    selecSizeMessage.style.display = "block";
  }
})

console.log(localStorage);

let bagLength;
let bagItemID;

window.addEventListener("load", function(){
  bagLength = localStorage.getItem("bagLength");
  console.log("bag length is " + bagLength)
  bagItemID = parseInt(localStorage.getItem("currBagID"));
  console.log("current bag item id is " + bagItemID);
})

let bagItem = [];
let bagItemImage;
let bagItemName;
let bagItemPrice;
let bagItemSize;
let newCurrID;

const shoeImage = document.querySelector(".shoeimg1");
const shoeName = document.querySelector(".vp-shoe-name");
const shoePrice = document.querySelector(".vp-shoe-price");

bagButton.addEventListener("click", function(){
  if(sizeSelected == true){
    bagItemImage = shoeImage.src.substring(22);
    bagItem.push(bagItemImage);
    bagItemName = shoeName.innerText;
    bagItem.push(bagItemName);
    bagItemPrice = shoePrice.innerText;
    bagItem.push(bagItemPrice);
    bagItemSize = selectedSize;
    bagItem.push(bagItemSize);

    newCurrID = bagItemID + 1;
    bagItemID++;
    localStorage.setItem("currBagID", newCurrID)
    bagItem.push(newCurrID);

    localStorage.setItem("Bag Item " + newCurrID, bagItem);
    bagItem = [];

    bagLength++;
    localStorage.setItem("bagLength", bagLength)
    console.log("bag length is " + bagLength)
    console.log("current bag item id is " + bagItemID)

    if(localStorage.length > 2){
      bagCountAlert.style.display = "block";
      bagCountAlert.innerHTML = localStorage.length - 2;
    }
    else{
      bagCountAlert.style.display = "none";
    }

    console.log(localStorage);
  }
})

const bagCountAlert = document.querySelector(".bag-count-alert");

window.addEventListener("load", function(){
  if(localStorage.length > 2){
    bagCountAlert.style.display = "block";
    bagCountAlert.innerHTML = localStorage.length - 2;
  }
  else{
    bagCountAlert.style.display = "none";
  }
})

const popup = document.querySelector(".added-to-bag-popup");
const popupItemImage = document.querySelector(".popup-image");
const popupItemName = document.querySelector(".popup-name");
const popupItemSize = document.querySelector(".popup-size");
const popupItemPrice = document.querySelector(".popup-price");
const conShopBtn = document.querySelector(".popup-cs-btn");
const cover = document.querySelector(".cover")


bagButton.addEventListener("click", function(){
  if(sizeSelected == true){
    popup.style.display = "block";
    let shoeImageURL = shoeImage.src.substring(21);
    popupItemImage.style.backgroundImage = "url(.."+shoeImageURL+")";
    console.log(shoeImageURL);
    popupItemName.innerText = bagItemName;
    popupItemSize.innerText = "Size: " + bagItemSize;
    popupItemPrice.innerText = bagItemPrice;
    cover.style.display = "block";
  }
})
conShopBtn.addEventListener("click", function(){
  popup.style.display = "none";
  cover.style.display = "none";
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


window.addEventListener("load", function(){
  const nikeHeader = document.querySelector(".nike-header");
  const nikeDesc = document.querySelector(".nike-description");
  const nikeShopLink = document.querySelector(".nslc");

  nikeHeader.addEventListener("animationend", function(){
    nikeDesc.style.display = "block";
    nikeShopLink.style.display = "block";
    nikeDesc.classList.add("nike-description-after");
    nikeShopLink.classList.add("nike-description-after");
  })
})

const searchIcon = document.querySelector(".search-icon");
const slideContainer = document.querySelector(".container");
const dropDown = document.querySelector(".dropdown");
const cancelButton = document.querySelector(".cancel-btn");
const mainHeader = document.querySelector(".main-header");

searchIcon.addEventListener("click", function() {
  dropDown.style.display = "block";
  suggCont.style.display = "none";
  mainHeader.style.display = "none";
  popularWrapper.style.display = "flex";
  popularWrapper.classList.add("slide-down-two");
  resultText.classList.add("slide-down-two");
})
cancelButton.addEventListener("click",function() {
  dropDown.style.display = "none";
  searchBar.value = "";
  xBtn.style.display = "none";
  mainHeader.style.display = "flex";
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
  popularWrapper.classList.remove("slide-down-two");
  resultText.classList.remove("slide-down-two");
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

const popularWrapper = document.querySelector(".popular-wrapper");
const suggestions = document.querySelectorAll(".suggestion");
const suggCont = document.querySelector(".suggestions-wrapper");
const resultText = document.querySelector(".result-text");
const noResults = document.querySelector(".no-results-alert");
let currentHTML;

window.addEventListener("resize", function(){
  if(searchBar.value.length < 1){
    suggCont.style.display = "none";
    popularWrapper.style.display = "flex";
  }
  else{
    suggCont.style.display = "flex";
    popularWrapper.style.display = "none";
  }
})

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
    noResults.style.display = "block"
  }
  else{
    noResults.style.display = "none";
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




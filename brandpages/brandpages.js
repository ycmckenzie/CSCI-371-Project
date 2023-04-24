const modelFilterDropDown = document.querySelector(".modelfilter-dropdown");
const modelFilterBtn = document.querySelector(".model-filter");
const modelArrow = document.querySelector(".model-da")
let modelVisible = true;

modelFilterBtn.addEventListener("click", function(){
  if (modelVisible){
    modelFilterDropDown.style.display = "none";
    modelVisible = false;
    modelArrow.classList.add("flip")
    modelFilterBtn.style.marginBottom = "20px";
  }
  else{
    modelFilterDropDown.style.display = "block";
    modelVisible = true;
    modelArrow.classList.remove("flip")
    modelFilterBtn.style.marginBottom = "0px";
  }
})

const colorFilterDropDown = document.querySelector(".colorfilter-dropdown");
const colorFilterBtn = document.querySelector(".color-filter");
const colorArrow = document.querySelector(".color-da")
let colorVisible = true;

colorFilterBtn.addEventListener("click", function(){
  if (colorVisible){
    colorFilterDropDown.style.display = "none";
    colorVisible = false;
    colorArrow.classList.add("flip")
    colorFilterBtn.style.marginBottom = "20px";
  }
  else{
    colorFilterDropDown.style.display = "block";
    colorVisible = true;
    colorArrow.classList.remove("flip")
    colorFilterBtn.style.marginBottom = "0px";
  }
})

const brandFilterDropDown = document.querySelector(".brandfilter-dropdown");
const brandFilterBtn = document.querySelector(".brand-filter");
const brandArrow = document.querySelector(".brand-da")
let brandVisible = true;

brandFilterBtn.addEventListener("click", function(){
  if (brandVisible){
    brandFilterDropDown.style.display = "none";
    brandVisible = false;
    brandArrow.classList.add("flip")
    brandFilterBtn.style.marginBottom = "20px";
  }
  else{
    brandFilterDropDown.style.display = "block";
    brandVisible = true;
    brandArrow.classList.remove("flip")
    brandFilterBtn.style.marginBottom = "0px";
  }
})


const filterOption = document.querySelectorAll(".filter-option");
const filterOptionBtn = document.querySelectorAll(".filter-option-btn");

for (let i = 0; i < filterOption.length; i++){
  let isWhite = true;
  filterOption[i].addEventListener("click", function(){
    if(isWhite){
      filterOptionBtn[i].style.backgroundColor = "black"
      isWhite = false;
    }
    else{
      filterOptionBtn[i].style.backgroundColor = "white"
      isWhite = true;
    }
  })
}

const currFilters = [];
const shoeOptions = document.querySelectorAll(".shoe-container");
let filterText;

for (let i = 0; i < filterOption.length; i++){
  let isActive = false;
  filterOption[i].addEventListener("click", function(){
    if(isActive == false){
      filterText = filterOption[i].innerText;
      currFilters.push(filterText);
      console.log(currFilters);
      isActive = true;
    }
    else{
      filterText = filterOption[i].innerText;
      currFilters.splice(currFilters.indexOf(filterText), 1);
      console.log(currFilters);
      isActive = false;
    }
    if(currFilters.length > 0){
      for(let i = 0; i < shoeOptions.length; i++){
        shoeOptions[i].style.display = "none";
      }
    }
    else{
      for(let i = 0; i < shoeOptions.length; i++){
        shoeOptions[i].style.display = "flex";
      }
    }
    for(let i = 0; i < shoeOptions.length; i++){
      let shoeContent = shoeOptions[i].firstElementChild.innerText;
      for(let j = 0; j < currFilters.length; j++){
        if(shoeContent.includes(currFilters[j])){
          shoeOptions[i].style.display = "flex";
        }
      }
    }
  })
}




const searchButton = document.querySelector(".search-btn");
const dropDown = document.querySelector(".dropdown");
const cancelButton = document.querySelector(".cancel-btn");
const mainContent = document.querySelector(".main-content");
const footer = document.querySelector(".footer");

searchButton.addEventListener("click", function() {
  dropDown.style.display = "block";
  suggCont.style.display = "none";
  mainContent.style.display = "none";
  footer.style.display = "none";
})
cancelButton.addEventListener("click",function() {
  dropDown.style.display = "none";
  searchBar.value = "";
  xBtn.style.display = "none";
  mainContent.style.display = "flex";
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





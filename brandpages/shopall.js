const adModelFilterDropDown = document.querySelector(".ad-modelfilter-dropdown");
const adModelFilterBtn = document.querySelector(".ad-model-filter");
const adModelArrow = document.querySelector(".ad-model-da")
let adModelVisible = true;

adModelFilterBtn.addEventListener("click", function(){
  if (adModelVisible){
    adModelFilterDropDown.style.display = "none";
    adModelVisible = false;
    adModelArrow.classList.add("flip")
    adModelFilterBtn.style.marginBottom = "20px";
  }
  else{
    adModelFilterDropDown.style.display = "block";
    adModelVisible = true;
    adModelArrow.classList.remove("flip")
    adModelFilterBtn.style.marginBottom = "0px";
  }
})

const nbModelFilterDropDown = document.querySelector(".nb-modelfilter-dropdown");
const nbModelFilterBtn = document.querySelector(".nb-model-filter");
const nbModelArrow = document.querySelector(".nb-model-da")
let nbModelVisible = true;

nbModelFilterBtn.addEventListener("click", function(){
  if (nbModelVisible){
    nbModelFilterDropDown.style.display = "none";
    nbModelVisible = false;
    nbModelArrow.classList.add("flip")
    nbModelFilterBtn.style.marginBottom = "20px";
  }
  else{
    nbModelFilterDropDown.style.display = "block";
    nbModelVisible = true;
    nbModelArrow.classList.remove("flip")
    nbModelFilterBtn.style.marginBottom = "0px";
  }
})
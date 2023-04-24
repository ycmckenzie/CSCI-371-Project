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
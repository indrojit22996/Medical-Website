// Inisilize The Variable
const requestCallBackBtn = document.querySelector(".request-btn");
const requestContainer = document.querySelector(".request-call-cont");
const requestCloseBtn=document.querySelector(".request-call-close");
// Request btn Function
requestCallBackBtn.addEventListener("click", () => {
  requestContainer.classList.remove("request-hidden");
});
// Request btn Function closeing the window
requestCloseBtn.addEventListener("click",()=>{
  requestContainer.classList.add("request-hidden");
});

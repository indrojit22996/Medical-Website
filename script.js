// Inisilize The Variable
const requestCallBackBtn = document.querySelector(".request-btn");
const requestContainer = document.querySelector(".request-call-cont");
const requestCloseBtn = document.querySelector(".request-call-close");
// Request btn Function
requestCallBackBtn.addEventListener("click", () => {
  requestContainer.classList.remove("request-hidden");
});
// Request btn Function closeing the window
requestCloseBtn.addEventListener("click", () => {
  requestContainer.classList.add("request-hidden");
});
const knowMoreBtn = document.querySelector(".konwmore-btn");
const knowMoreContainer = document.querySelector(".knowmore-cont");
const KnowMoreCloseBtn = document.querySelector(".knowmore-close");
// Knowmore btn Function
knowMoreBtn.addEventListener("click", () => {
  knowMoreContainer.classList.remove("know-hidden");
});
// Knowmore btn Popup Closeing Function
KnowMoreCloseBtn.addEventListener("click", () => {
  knowMoreContainer.classList.add("know-hidden");
});

// window.addEventListener("click",()=>{
//   knowMoreContainer.classList.add("know-hidden");
// })
let readMore=document.querySelector(".read-btn");
let readMoreContainer=document.querySelector(".read-more-popup");
readMore.addEventListener("click",()=>{
readMoreContainer.classList.remove("readmore-hidden");
})
let readMoreCloseBtn=document.querySelector(".readmore-close");
readMoreCloseBtn.addEventListener("click",()=>{
  readMoreContainer.classList.add("readmore-hidden");
})
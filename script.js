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
// our Service section See all button function
let doctorSeeAll=document.querySelector(".depermentSeeall");
let doctorSeeLess=document.querySelector(".depermentSeeless")
let seeAllcont=document.querySelector('.deperment-seeall');
doctorSeeAll.addEventListener('click',seeallFunction)
function seeallFunction(){
console.log("Buttom Clicked");
seeAllcont.classList.remove("deperment-hidden");
doctorSeeAll.remove();

}
doctorSeeLess.addEventListener('click',seeLessFunction)
function seeLessFunction(){
  seeAllcont.classList.add("deperment-hidden");
  document.querySelector('.seeallBtn-cont').appendChild(doctorSeeAll);
}